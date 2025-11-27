const fs = require('fs');
const path = require('path');

const clientPath = path.join(process.cwd(), 'node_modules', '.prisma', 'client');
const defaultJsPath = path.join(clientPath, 'default.js');

// Create or update default.js to properly export from client
// This is needed for @prisma/client/default.js to work correctly
const defaultJsContent = `module.exports = require('./client');\n`;

if (fs.existsSync(defaultJsPath)) {
  const existingContent = fs.readFileSync(defaultJsPath, 'utf8');
  if (existingContent !== defaultJsContent) {
    fs.writeFileSync(defaultJsPath, defaultJsContent);
    console.log('✓ Updated default.js file');
  }
} else {
  fs.writeFileSync(defaultJsPath, defaultJsContent);
  console.log('✓ Created default.js file');
}

console.log('✓ Prisma client ready');

