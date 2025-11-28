import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined. Please set the DATABASE_URL environment variable with your MongoDB connection string.");
}

// Validate MongoDB connection string format
if (!databaseUrl.startsWith("mongodb://") && !databaseUrl.startsWith("mongodb+srv://")) {
  throw new Error("DATABASE_URL must be a valid MongoDB connection string starting with 'mongodb://' or 'mongodb+srv://'");
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  mongoClient?: MongoClient;
};

// Create MongoDB client for Prisma 7 adapter
// Ensure we use the connection string directly from DATABASE_URL
if (!globalForPrisma.mongoClient) {
  globalForPrisma.mongoClient = new MongoClient(databaseUrl, {
    // MongoDB connection options
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });
}

// Create MongoDB adapter factory for Prisma 7
// Prisma 7 requires an adapter that implements the driverAdapterFactory interface
const mongoAdapterFactory = {
  provider: "mongodb" as const,
  adapterName: "mongodb" as const,
  connect: async () => {
    if (!globalForPrisma.mongoClient) {
      globalForPrisma.mongoClient = new MongoClient(databaseUrl, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
    }
    // Connect the client - MongoDB driver handles reconnection automatically
    try {
      await globalForPrisma.mongoClient.connect();
    } catch (error) {
      // If already connected, ignore the error
      if ((error as Error).message?.includes("already connected")) {
        // Client is already connected, continue
      } else {
        throw error;
      }
    }
    return globalForPrisma.mongoClient;
  },
};

// Prisma 7 with MongoDB requires an adapter, but TypeScript types don't fully support MongoDB adapters
// The runtime accepts this adapter, but TypeScript types are designed for SQL adapters
// Using type assertion to work around TypeScript limitations
export const prisma =
  globalForPrisma.prisma ??
  new (PrismaClient as any)({
    adapter: mongoAdapterFactory,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

