import { ShoppingCart, UserIcon, Sun, Moon, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ToggleTheme from "@/components/shared/header/toggleTheme";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <ToggleTheme />
          <Button asChild variant="ghost">
            <Link href="/cart" className="relative">
              <ShoppingCart size={24} /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in" className="relative">
              <UserIcon size={24} /> Sign in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
