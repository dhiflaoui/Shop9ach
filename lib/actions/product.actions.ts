"user server";
import { PrismaClient } from "@/lib/generated/prisma";
import { convertToRegularObject } from "@/lib/utils";
//latest Products
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  try {
    const products = await prisma.product.findMany({
      take: 4,
      orderBy: {
        createdAt: "desc",
      },
    });
    return convertToRegularObject(products);
  } catch (error) {
    console.log("Error while fetching products from database", error);
  } finally {
    await prisma.$disconnect();
  }
}
