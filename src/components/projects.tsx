import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import portfolioData from "@/lib/portfolio-data.json";
import { useState } from "react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-primary font-code font-semibold tracking-wider uppercase">03. Projects</h2>
          <h3 className="text-3xl lg:text-4xl font-headline font-bold">Featured Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and professional projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [imgSrc, setImgSrc] = useState(project.imageUrl);

  const handleError = () => {
    // If local image fails, fallback to a unique placeholder
    if (!imgSrc.startsWith("https://picsum.photos")) {
      setImgSrc(`https://picsum.photos/seed/project-${index}/600/400`);
    }
  };

  return (
    <Card className="overflow-hidden border-border/50 group hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm flex flex-col h-full">
      <CardHeader className="p-0 relative overflow-hidden aspect-[16/10]">
        <img
          src={imgSrc}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="flex flex-wrap gap-2 mb-2">
            {project.tech?.map((t: string) => (
              <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-primary text-primary-foreground rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
          {project.description}
        </p>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
        >
          View Project <ExternalLink className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}
