import { Button } from "@/components/ui/button";
import ToggleTheme from "./toggleTheme";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
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
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
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
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
