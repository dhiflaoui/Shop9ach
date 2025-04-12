"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
