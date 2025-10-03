import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./logo";
import Links from "./links";

const sheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Mobile navigation menu for the portfolio website</SheetDescription>
        <Logo />
        <Links orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
}

export default sheet