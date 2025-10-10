import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: string
  title: string
  description: string
  image: string;
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({project}:ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Clickable image and title section */}
      <Link to={`/projects/${project.id}`} className="block">
        <div className="relative h-64 overflow-hidden bg-accent">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6 pb-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {
              project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="rounded-full">
                  {tech}
                </Badge>
              ))
            }
          </div>
        </div>
      </Link>

      {/* Action buttons - separate from the main link */}
      <div className="px-6 pb-6 mt-auto">
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard