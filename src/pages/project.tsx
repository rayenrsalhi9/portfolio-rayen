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
    <section className="w-full max-w-5xl my-0 mx-auto px-6 py-20">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 hover:bg-accent/50 transition-colors">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-16">
        <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-1.5">
          Project Details
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {project.title}
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {project.overview}
          </p>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          {project.links.liveUrl && (
            <Button asChild className="group">
              <a href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                Live Demo
              </a>
            </Button>
          )}
          {project.links.githubUrl && (
            <Button variant="outline" asChild className="group">
              <a href={project.links.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Code
              </a>
            </Button>
          )}
        </div>
        
        {/* Image Carousel */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <div className="relative">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <Card className="overflow-hidden border-2 border-border/20 hover:border-border/40 transition-colors">
                          <CardContent className="flex aspect-[16/10] items-center justify-center p-0 h-96 bg-gradient-to-br from-muted/50 to-background">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-full object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                        {project.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <div className="flex space-x-2">
                              {project.images.map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    i === index ? 'bg-primary' : 'bg-primary/30'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
            </div>
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech: string) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Objectives</h2>
        <div className="space-y-4">
          {project.objectives.map((objective: string, index: number) => (
            <div key={index} className="flex items-start group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5">
                <span className="text-primary text-sm font-semibold">{index + 1}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Key Features</h2>
        <div className="grid gap-4">
          {project.keyFeatures.map((feature: string, index: number) => (
            <div key={index} className="flex items-start p-4 rounded-lg border border-border/50 hover:border-border/80 transition-colors group">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-4 mt-2"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{feature.split(' ')[0].replace('–', '').trim()}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.substring(feature.indexOf('–') + 1).trim()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Architecture</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed bg-muted/30 p-6 rounded-lg border border-border/50">
            {project.architecture}
          </p>
        </div>
      </div>

      {/* Setup Instructions */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Setup Instructions</h2>
        <div className="space-y-4">
          {project.setup.map((step: string, index: number) => (
            <div key={index} className="flex items-start group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 font-semibold text-primary">
                {index + 1}
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Usage</h2>
        <div className="grid gap-3">
          {project.usage.map((use: string, index: number) => (
            <div key={index} className="flex items-start p-3 rounded-lg hover:bg-accent/30 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-4 mt-2"></div>
              <p className="text-muted-foreground leading-relaxed">{use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security/Testing */}
      {(project.security || project.testing) && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            {project.security ? 'Security' : 'Testing'}
          </h2>
          <div className="grid gap-3">
            {(project.security || project.testing)?.map((item: string, index: number) => (
              <div key={index} className="flex items-start p-3 rounded-lg hover:bg-accent/30 transition-colors">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-4 mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;