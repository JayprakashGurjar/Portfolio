import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <a href="#home" className="text-2xl font-headline font-bold tracking-tight">
              JG<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Designing and developing beautiful, functional digital experiences with a focus on modern aesthetics.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Jayprakashg47" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="linkedin.com/in/jayprakash-gurjar46927424b" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link> */}
            </div>
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Jayprakash Gurjar. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop} 
            className="rounded-full h-12 w-12 border border-border/50 animate-bounce"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
