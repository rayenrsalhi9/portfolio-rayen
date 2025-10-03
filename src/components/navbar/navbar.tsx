import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react"
import Logo from "./logo";
import Links from "./links";
import Sheet from "./sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <Links className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <a href="https://www.linkedin.com/in/rayen-salhi/" target="_blank">
              <Linkedin className="h-5! w-5!" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <a href="https://github.com/rayenrsalhi9" target="_blank">
              <Github className="h-5! w-5!" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;