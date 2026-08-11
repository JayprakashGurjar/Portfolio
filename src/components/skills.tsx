import { Code2, Layout, Smartphone, Database, Terminal, Palette, Globe, Layers } from "lucide-react";
import portfolioData from "@/lib/portfolio-data.json";

// Helper to map icons to skill names or categories
const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('react')) return <Code2 className="h-6 w-6" />;
  if (n.includes('javascript') || n.includes('js')) return <Terminal className="h-6 w-6" />;
  if (n.includes('html') || n.includes('css')) return <Layout className="h-6 w-6" />;
  if (n.includes('redux') || n.includes('database')) return <Database className="h-6 w-6" />;
  if (n.includes('tailwind') || n.includes('bootstrap') || n.includes('styling')) return <Palette className="h-6 w-6" />;
  if (n.includes('typescript') || n.includes('ts')) return <Code2 className="h-6 w-6" />;
  return <Globe className="h-6 w-6" />;
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 space-y-6 sticky top-32">
            <h2 className="text-primary font-code font-semibold tracking-wider">02. SKILLS</h2>
            <h3 className="text-3xl lg:text-4xl font-headline font-bold leading-tight">
              My Technical <br /> Arsenal
            </h3>
            <p className="text-muted-foreground">
              I specialize in frontend technologies but I'm always eager to pick up new tools that help me build better products. 
              Here is a glimpse of what I use on a daily basis.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center gap-4"
              >
                <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {getIcon(skill.name)}
                </div>
                <span className="font-headline font-semibold text-sm sm:text-base">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
