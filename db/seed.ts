import { PrismaClient } from '@/lib/generated/prisma';
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Starting to seed data...");

    await prisma.product.deleteMany();
    console.log("Cleaned up existing products");

    await prisma.product.createMany({
      data: sampleData.products,
    });
    console.log("Products seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
