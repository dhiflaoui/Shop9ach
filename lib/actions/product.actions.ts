"user server";

import { prisma } from "@/db/prisma";
import { convertToRegularObject } from "@/lib/utils";
//latest Products
export async function getLatestProducts() {
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

//get single product by it's slug
export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
    });
    return convertToRegularObject(product);
  } catch (error) {
    console.log("Error while fetching product from database", error);
  } finally {
    await prisma.$disconnect();
  }
}
