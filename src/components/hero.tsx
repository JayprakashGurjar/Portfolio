import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "@/lib/portfolio-data.json";
import { useState } from "react";
import profileImageSrc from '../assetes/jay_prakash_image.png'
export function Hero() {

  const { personal } = portfolioData;
  const [imgSrc, setImgSrc] = useState<string>(personal.profileImage);
  const [errored, setErrored] = useState(false);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc(profileImageSrc);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-primary font-code font-semibold tracking-wider flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary" />
              HELLO WORLD, I'M
            </h2>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight">
              {personal.firstName} <br />
              <span className="text-gradient">{personal.lastName}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-lg">
              {personal.tagline}
            </p>
            <p className="text-muted-foreground text-lg max-w-lg">
              {personal.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8 gap-2 shadow-lg hover:shadow-primary/20 transition-all">
              <a href="#contact">
                Hire Me <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:border-primary/50">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a href={personal.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href={personal.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${personal.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="block relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl rotate-6 -z-10" />
            <div className="absolute inset-0 bg-muted rounded-3xl border border-border/50 shadow-2xl m-1">
              <img
                src={imgSrc}
                alt={`${personal.firstName} ${personal.lastName}`}
                width={400}
                height={400}
                className="w-full h-full object-contain object-center transition-all duration-700"
                onError={handleError}
              />
            </div>
            <div className="absolute -top-4 -right-4 glass p-4 rounded-xl shadow-xl animate-bounce">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl shadow-xl">
              <span className="font-bold text-primary">{personal.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
