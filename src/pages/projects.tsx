import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <img
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
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

const Projects = () => {
  const projects = [
    {
        title: "Sales Tracker",
        description: "A secure, real-time web application for tracking and visualizing sales performance. Features interactive dashboards with realtime updates, Supabase-powered authentication, and robust database security with Row Level Security (RLS) policies to ensure data privacy and controlled access.",
        image: "/placeholder.svg",
        technologies: ["React", "Recharts", "Supabase (Auth & RLS)", "CSS3"], 
        liveUrl: "https://sales-tracker-demo.com",
        githubUrl: "https://github.com/username/sales-tracker"
    },
    {
        title: "CastGPT - AI Podcast Recommendation System",
        description:
            "An AI-powered podcast recommendation system that leverages natural language processing, vector embeddings, and conversational AI to deliver personalized podcast suggestions. Built with Ollama, Supabase, and LangChain, the app supports semantic search, conversational memory, and real-time recommendations through a modern web interface.",
        image: "/placeholder.svg",
        technologies: [
            "JavaScript (ES6+)",
            "Supabase (PostgreSQL + Vector)",
            "Ollama (nomic-embed-text, llama3.1:8b)",
            "CSS3"
        ],
        liveUrl: "https://castgpt-demo.com",
        githubUrl: "https://github.com/username/castgpt"
    },
    {
        title: "MatchyMatch - Memory Card Game",
        description:
            "A responsive memory card matching game that showcases strong problem-solving through efficient game logic, state management, and interactive UI design. Emphasizes software quality with a comprehensive testing suite using Vitest and React Testing Library, ensuring reliability, performance, and maintainability across devices.",
        image: "/placeholder.svg",
        technologies: [
            "React 19",
            "CSS3 (Grid & Transforms)",
            "React Confetti",
            "Vitest",
            "React Testing Library"
        ],
        liveUrl: "https://matchymatch-demo.com",
        githubUrl: "https://github.com/username/matchymatch"
    },
    {
      title: "Quizzly - Interactive Quiz Application",
      description:
        "An interactive quiz app built with React and Vite that fetches trivia questions from the Open Trivia Database API. Highlights problem-solving and state management skills through dynamic question handling, answer validation, and real-time scoring, with a strong focus on accessibility and responsive design.",
      image: "/placeholder.svg",
      technologies: [
        "React 19",
        "CSS3",
        "API",
        "clsx"
      ],
      liveUrl: "https://quizzly-demo.com",
      githubUrl: "https://github.com/username/quizzly"
    },
    {
      title: "Assembly: Endgame - Word Guess Game",
      description:
        "A modern, accessible word guessing game built with React and TypeScript. Players guess words to prevent Assembly language from taking over, featuring problem-solving challenges, state management, and testing-focused development. Highlights include interactive gameplay, dynamic feedback, accessibility-first design, and responsive UI.",
      image: "/placeholder.svg",
      technologies: [
        "React 19",
        "TypeScript",
        "CSS3"
      ],
      liveUrl: "https://assembly-endgame-demo.com",
      githubUrl: "https://github.com/username/assembly-endgame"
    }
  ]

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;