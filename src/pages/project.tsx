import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projectDetails } from "@/utils/details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Find the project by matching the ID from URL parameters
  const project = projectDetails.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <section className="w-full max-w-4xl my-0 mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl my-0 mx-auto px-6 py-20">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-4">
          Project Details
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {project.overview}
        </p>

        {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        {project.links.liveUrl && (
          <Button asChild>
            <a href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.links.githubUrl && (
          <Button variant="outline" asChild>
            <a href={project.links.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
        )}
      </div>
        
        {/* Image Carousel */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <Card>
                        <CardContent className="flex aspect-[16/10] items-center justify-center p-0 h-80">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Objectives</h2>
        <ul className="space-y-2">
          {project.objectives.map((objective: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span className="text-muted-foreground">{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="space-y-3">
          {project.keyFeatures.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3 mt-1">{feature.split(' ')[0]}</span>
              <span className="text-muted-foreground">{feature.substring(feature.indexOf(' ') + 1)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.architecture}
        </p>
      </div>

      {/* Setup Instructions */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setup Instructions</h2>
        <ol className="space-y-2">
          {project.setup.map((step: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary font-semibold mr-3">{index + 1}.</span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Usage */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <ul className="space-y-2">
          {project.usage.map((use: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span className="text-muted-foreground">{use}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Security/Testing */}
      {(project.security || project.testing) && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {project.security ? 'Security' : 'Testing'}
          </h2>
          <ul className="space-y-2">
            {(project.security || project.testing)?.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Project;