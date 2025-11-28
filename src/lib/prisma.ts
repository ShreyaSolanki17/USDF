import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  mongoClient?: MongoClient;
};

// Create MongoDB client for Prisma 7 adapter
if (!globalForPrisma.mongoClient) {
  globalForPrisma.mongoClient = new MongoClient(databaseUrl);
}

// Create MongoDB adapter factory for Prisma 7
const mongoAdapterFactory = {
  provider: "mongodb" as const,
  adapterName: "mongodb" as const,
  connect: async () => {
    if (!globalForPrisma.mongoClient) {
      globalForPrisma.mongoClient = new MongoClient(databaseUrl);
    }
    await globalForPrisma.mongoClient.connect();
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

