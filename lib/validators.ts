import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
const currency = z
  .number()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))),
    "price must be a number with two decimal places"
  );
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(255),
  description: z
    .string()
    .min(3, "description must be at least 3 characters")
    .max(1000),
  slug: z.string().min(3, "Slug must be at least 3 characters").max(255),
  price: currency,
  category: z
    .string()
    .min(3, "category must be at least 3 characters")
    .max(255),
  images: z
    .array(z.string().url())
    .min(1, "Product must have at least one image")
    .max(5),
  brand: z.string().min(3, "brand must be at least 3 characters").max(255),
  stock: z.coerce.number().min(0),
  banner: z.string().nullable(),
  isFeatured: z.boolean(),
});
