import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Facebook, Instagram  } from "lucide-react";
import Logo from "./navbar/logo";

const footerLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <Logo />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Salhi Rayen. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/rayenrsalhi9" target="_blank">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/rayen-salhi/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" target="_blank">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" target="_blank">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;