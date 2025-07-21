import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface TechBadge {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  techStack: TechBadge[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features.",
  date = "May 2025",
  techStack = [{ name: "React" }, { name: "TypeScript" }, { name: "Vite" }],
  githubUrl = "https://github.com/dhruv552",
  liveUrl,
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
}: ProjectCardProps) => {
  const getBadgeColor = (tech: string) => {
    const techColors: Record<string, string> = {
      React: "bg-accent-blue",
      TypeScript: "bg-accent-cyan",
      JavaScript: "bg-yellow-500",
      Vite: "bg-accent-emerald",
      MongoDB: "bg-green-600",
      Node: "bg-green-700",
      "Node.js": "bg-green-700",
      Express: "bg-gray-600",
      Python: "bg-blue-600",
      TensorFlow: "bg-orange-600",
      Flask: "bg-gray-700",
      PostgreSQL: "bg-blue-800",
      CSS: "bg-pink-500",
      HTML: "bg-orange-500",
      AES: "bg-red-500",
      RSA: "bg-red-700",
      "AI/ML": "bg-indigo-600",
    };

    return techColors[tech] || "bg-gray-600";
  };

  return (
    <Card className="w-full h-[580px] bg-dark-card border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20 hover:border-accent-blue/50 flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <CardHeader className="flex-shrink-0 h-32 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-bold text-text-light leading-tight line-clamp-2">
              {title}
            </CardTitle>
            <span className="text-sm text-text-muted whitespace-nowrap flex-shrink-0">
              {date}
            </span>
          </div>
          <CardDescription className="text-text-muted text-sm leading-relaxed h-16 overflow-hidden line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-4 pt-0 flex flex-col justify-center min-h-[80px]">
          <div className="flex flex-wrap gap-1.5 justify-start">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`${tech.color || getBadgeColor(tech.name)} text-white text-xs px-2 py-1`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-shrink-0 p-4 pt-0">
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-gray-600 text-text-light hover:bg-dark-surface hover:border-accent-blue flex-1"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            {liveUrl && (
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-2 bg-accent-cyan hover:bg-accent-cyan/90 text-dark-bg flex-1"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
