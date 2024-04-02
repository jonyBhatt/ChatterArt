import Image from "next/image";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="py-6 px-4 sm:container sm:mx-auto">
      {/** Mobile device */}
      <div className="flex md:hidden justify-between items-center">
        <Image src={"/svg/logo.svg"} alt="logo" width={50} height={50} />
        <Sheet>
          <SheetTrigger>
            <AlignRight className="w-8 h-8 text-primary" />
          </SheetTrigger>
          <SheetContent>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
      {/** Desktop Device */}
      <div className="hidden md:flex justify-between items-center">
        {/** Nav menu */}
        <div className="flex gap-2 items-center">
          <Link
            href={"#"}
            className="text-muted-foreground  font-semibold tracking-wide transition-all duration-100 hover:border-b hover:border-b-rose-500 pb-1 w-full rounded-md hover:shadow-sm px-4  hover:shadow-primary"
          >
            Products
          </Link>
          <Link
            href={"#"}
            className="text-muted-foreground  font-semibold tracking-wide transition-all duration-100 hover:border-b hover:border-b-rose-500 pb-1 w-full rounded-md hover:shadow-sm px-4  hover:shadow-primary"
          >
            Community
          </Link>
          <Link
            href={"#"}
            className="text-muted-foreground  font-semibold tracking-wide transition-all duration-100 hover:border-b hover:border-b-rose-500 pb-1 w-full rounded-md hover:shadow-sm px-4  hover:shadow-primary"
          >
            Pricing
          </Link>
        </div>
        <Image src="/svg/logo.svg" alt="logo" width={50} height={50} />
        <div className="flex items-center gap-2">
          <Button variant={"ghost"} size={"lg"} className="rounded-full">
            Sign In
          </Button>
          <Button variant={"default"} size={"lg"} className="rounded-full tracking-wide">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
