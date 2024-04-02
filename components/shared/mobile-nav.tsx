import Link from "next/link";
import { SheetHeader } from "../ui/sheet";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <div className="pt-4">
      <h1 className="text-4xl tracking-wide md:text-5xl lg:text-6xl font-bold text-center mt-8">
        <span className=" bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
          ChatterArt
        </span>
      </h1>
      <div className="flex mt-8 flex-col gap-8 items-start">
        <Link
          href={"#"}
          className="text-muted-foreground text-2xl font-medium tracking-wide transition-all duration-100 hover:border-b hover:border-b-rose-500 pb-1 w-full rounded-md hover:shadow-sm px-4  hover:shadow-primary"
        >
          Products
        </Link>
        <Link
          href={"#"}
          className="text-muted-foreground text-2xl font-semibold tracking-wide transition-all duration-100 hover:border-b hover:border-b-rose-500 pb-1 w-full rounded-md hover:shadow-sm px-4  hover:shadow-primary"
        >
          Community
        </Link>
        <Link
          href={"#"}
          className="text-muted-foreground text-2xl font-semibold tracking-wide transition-all duration-100 hover:border-b hover:border-b-rose-500 pb-1 w-full rounded-md hover:shadow-sm px-4  hover:shadow-primary"
        >
          Pricing
        </Link>
        <Button size={"lg"} className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
};
export default MobileNav;
