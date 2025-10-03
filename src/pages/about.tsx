import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Github } from "lucide-react";
import profile from '/profile.jpg'

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">

          <ProfileImage className="hidden md:block" />

          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful web applications
            </h2>
            <p className="text-muted-foreground mb-6 text-justify leading-7">
              I'm a final-year software development student starting my internship in January 2026. After a full-stack bootcamp at Scrimba and several solo projects, I now build modern web apps with React, Express JS, PostgreSQL, and BaaS platforms like Firebase and Supabase. I love crafting user-friendly solutions and growing through new challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <a 
                  href="https://github.com/rayenrsalhi9" 
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Github />
                  View Github
                </a>
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProfileImage = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <img src={profile} alt="Profile Picture" className="object-cover object-center w-full h-full" />
    </div>
  </div>
)

export default About;