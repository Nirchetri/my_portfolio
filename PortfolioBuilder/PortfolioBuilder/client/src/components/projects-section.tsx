import { Calendar, Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      id: "meetify",
      title: "Meetify",
      description: "A real-time video conferencing web application inspired by Zoom. Built with React, Tailwind CSS, ShadCN, Stream, and Clerk for seamless video communication and authentication.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Tailwind CSS", "ShadCN", "Stream", "Clerk"],
      duration: "20 Jan 2025 - 20 Mar 2025",
      github: "#",
      live: "#"
    },
    {
      id: "linkkiwi",
      title: "LinkKiwi",
      description: "A comprehensive service-based web platform built with React, Tailwind CSS, and Firebase. Features reusable UI components and real-time functionalities for enhanced client engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Tailwind CSS", "Firebase", "REST API"],
      duration: "Jan 2025 - Feb 2025",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="projects-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="projects-description">
            Here are some of my recent projects that showcase my skills in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group" data-testid={`project-${project.id}`}>
              <img 
                src={project.image} 
                alt={`${project.title} application interface`} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`project-image-${project.id}`}
              />
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`project-title-${project.id}`}>{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    <a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`project-github-${project.id}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.live} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`project-live-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm" data-testid={`project-duration-${project.id}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
