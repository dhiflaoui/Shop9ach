import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object into a  regular js object
export function convertToRegularObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function formatNumberWithDecimal(num: number): string {
  const [integerPart, decimalPart] = num.toString().split(".");
  return decimalPart
    ? `${integerPart}.${decimalPart.padEnd(2, "0")}`
    : `${integerPart}.00`;
}
