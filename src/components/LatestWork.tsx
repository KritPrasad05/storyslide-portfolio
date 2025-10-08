
import React from 'react';
import SectionTransition from './SectionTransition';
import { ArrowUpRight, Clock, Code } from 'lucide-react';
import diffusionImage from '@/assets/diffusion-text-generation.jpg';
import worldquantImage from '@/assets/worldquant-deep-learning-lab.jpg';

interface LatestWorkCardProps {
  title: string;
  description: string;
  status: string;
  type: string;
  technologies: string[];
  image: string;
  link?: string;
}

const LatestWorkCard = ({ 
  title, 
  description, 
  status, 
  type, 
  technologies, 
  image,
  link 
}: LatestWorkCardProps) => (
  <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/80 hover:shadow-md transition-all duration-300">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 overflow-hidden h-full">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      
      <div className="p-6 md:col-span-2">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mr-2">
              <Clock className="h-3 w-3 mr-1" />
              {status}
            </span>
            <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              {type}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground">
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View Project <ArrowUpRight className="h-3 w-3 ml-1" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProgressCard = ({ label, progress }: { label: string, progress: number }) => (
  <div className="bg-card/80 border border-border/40 rounded-lg p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm font-medium">{progress}%</span>
    </div>
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary rounded-full" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

const LatestWork = () => {
  const latestWorks = [
    {
      title: "🧠 Diffusion-Based Text Generation Framework",
      description: "Developing a diffusion model architecture that generates coherent and context-aware text through denoising embeddings across timesteps. The research explores timestep embeddings, positional encoding, and denoising schedules to achieve controllable and high-fidelity text synthesis.",
      status: "In Progress",
      type: "Research & Development",
      technologies: ["PyTorch", "Transformers", "Diffusion Models", "Embedding Layers", "Tokenization"],
      image: diffusionImage,
      link: ""
    },
    {
      title: "💡 Deep Learning Fundamentals Lab — WorldQuant University",
      description: "Pursuing an intensive, project-based lab that builds deep technical mastery in neural networks and CNN architectures. The lab's 12 projects cover everything from PyTorch basics to real-world applications in healthcare, environmental data, and computer vision.",
      status: "Active",
      type: "Deep Learning Lab Program",
      technologies: ["PyTorch", "CNNs", "Transfer Learning", "Cloud VM Environments", "EDA"],
      image: worldquantImage,
      link: "https://www.worldquant.com/university/"
    }
  ];

  const focusAreas = [
    "Building and optimizing deep neural networks",
    "Implementing CNNs (LeNet, AlexNet, ResNet, VGG)",
    "Using transfer learning and regularization for real-world datasets",
    "Running models on cloud-based virtual machines",
    "Measuring model performance via accuracy, precision, recall, and loss metrics"
  ];

  return (
    <section id="latest-work" className="relative py-20 px-4 md:px-8 bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_60%)]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            Current Projects
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            My Latest Work
          </h2>
        </SectionTransition>
        
        <SectionTransition delay={200}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            I'm currently focused on these cutting-edge AI projects that push the boundaries of what's possible with artificial intelligence and machine learning technologies.
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 gap-8 mb-16">
          {latestWorks.map((work, index) => (
            <SectionTransition key={work.title} delay={300 + index * 100}>
              <LatestWorkCard {...work} />
            </SectionTransition>
          ))}
        </div>
        
        <div>
          <SectionTransition delay={500}>
            <h3 className="text-2xl font-display font-semibold mb-6">
              Focus Areas
            </h3>
          </SectionTransition>
          
          <SectionTransition delay={600}>
            <div className="bg-card/80 border border-border/40 rounded-lg p-6">
              <ul className="space-y-4">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex">
                    <Code className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
