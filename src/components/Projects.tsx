
import React, { useState } from 'react';
import SectionTransition from './SectionTransition';
import { Code, ExternalLink, Github, Info } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  demoUrl,
  featured = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl border border-border/40 bg-card/50 transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      
      {/* Title overlay when not hovered */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const Projects = () => {
  // Placeholder images
  const imagePlaceholders = [
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544333323-ec9ed3218dd1?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=1632&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=1480&auto=format&fit=crop",
  ];
  
  const projects = [
    {
      title: "Applied AI Lab — CV Suite",
      description: "Built 6 CV pipelines (classification, detection, segmentation) using PyTorch; transfer learning + augmentation yielded ~90–92% on validation.",
      image: imagePlaceholders[0],
      tags: ["PyTorch", "OpenCV", "TensorBoard"],
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      title: "Primetrade.ai — Trade Ranking System",
      description: "Ranked traders across 20k+ records using XGBoost/LightGBM with engineered financial metrics and robust outlier handling.",
      image: imagePlaceholders[1],
      tags: ["XGBoost", "LightGBM", "Python", "Pandas"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Solar Panel Efficiency",
      description: "20k rows, stacked regressors + feature engineering; production-ready CSV generator and PyTorch NN baseline.",
      image: imagePlaceholders[2],
      tags: ["PyTorch", "Scikit-learn", "Feature Engineering"],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8 bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,119,198,0.1),transparent_60%)]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            Projects
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            Featured Projects
          </h2>
        </SectionTransition>
        
        <SectionTransition delay={200}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Explore a selection of my most significant projects in artificial intelligence and machine learning. Each project demonstrates different aspects of my technical expertise and problem-solving approach.
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <SectionTransition key={project.title} delay={300 + index * 100}>
              <ProjectCard {...project} />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
