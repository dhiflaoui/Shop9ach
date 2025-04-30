import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaClient } from "@/lib/generated/prisma";
import ws from "ws";

// Sets up WebSocket connections for Neon
neonConfig.webSocketConstructor = ws;

// Get database URL with fallback
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Create connection pool
let pool = new Pool({ connectionString });

// Maximum number of reconnection attempts
const MAX_RECONNECTION_ATTEMPTS = 5;
// Delay between reconnection attempts (in milliseconds)
const RECONNECTION_DELAY = 5000;
// Track reconnection attempts
let reconnectionAttempts = 0;

// Handle pool errors with reconnection logic
const setupPoolErrorHandler = (currentPool: Pool) => {
  currentPool.on("error", async (err: Error) => {
    console.error(`Database connection error: ${err.message}`);

    if (reconnectionAttempts < MAX_RECONNECTION_ATTEMPTS) {
      reconnectionAttempts++;
      console.log(
        `Attempting to reconnect (${reconnectionAttempts}/${MAX_RECONNECTION_ATTEMPTS}) in ${
          RECONNECTION_DELAY / 1000
        } seconds...`
      );

      // Wait before attempting to reconnect
      await new Promise((resolve) => setTimeout(resolve, RECONNECTION_DELAY));

      try {
        // Clean up the old pool
        await currentPool.end();

        // Create a new pool
        pool = new Pool({ connectionString });
        setupPoolErrorHandler(pool);

        console.log("Reconnection successful");
        reconnectionAttempts = 0; // Reset counter after successful reconnection
      } catch (reconnectError) {
        console.error(`Reconnection failed: ${reconnectError}`);
        // If this was the last attempt, exit the process
        if (reconnectionAttempts >= MAX_RECONNECTION_ATTEMPTS) {
          console.error("Maximum reconnection attempts reached. Exiting...");
          process.exit(-1);
        }
      }
    } else {
      console.error("Maximum reconnection attempts reached. Exiting...");
      process.exit(-1);
    }
  });
};

// Set up initial error handler
setupPoolErrorHandler(pool);

// Create Prisma client with Neon adapter
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
}).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          // Handle potential null/undefined values
          return product.price != null ? product.price.toString() : null;
        },
      },
      rating: {
        compute(product) {
          // Handle potential null/undefined values
          return product.rating != null ? product.rating.toString() : null;
        },
      },
    },
  },
});

// Implement a function to check if the database connection is healthy
export const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    // Try a simple query to test the connection
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();
    return true;
  } catch (error) {
    console.error("Database health check failed:", error);
    return false;
  }
};
