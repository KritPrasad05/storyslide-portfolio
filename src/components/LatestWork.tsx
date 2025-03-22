
import React from 'react';
import SectionTransition from './SectionTransition';
import { ArrowUpRight, Clock, Code, FileCode, Layers, PlayCircle } from 'lucide-react';

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
  // Placeholder images
  const imagePlaceholders = [
    "https://images.unsplash.com/photo-1581092160607-ee23d8c9fcb8?q=80&w=1470&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1470&auto=format&fit=crop",
  ];
  
  const latestWorks = [
    {
      title: "AI-Powered Medical Diagnosis System",
      description: "Developing a cutting-edge deep learning system for early detection of diseases from medical imaging data. The system uses a novel architecture combining CNNs and transformer attention mechanisms to achieve state-of-the-art diagnostic accuracy.",
      status: "In Progress",
      type: "Research & Development",
      technologies: ["PyTorch", "Medical Imaging", "Transformers", "CNNs", "CUDA"],
      image: imagePlaceholders[0],
      link: "#"
    },
    {
      title: "Multilingual NLP Framework for Low-Resource Languages",
      description: "Creating an innovative natural language processing framework specifically designed for languages with limited available training data. The approach uses transfer learning and meta-learning techniques to generalize knowledge from high-resource languages.",
      status: "Early Stage",
      type: "Research Project",
      technologies: ["NLP", "Transfer Learning", "Meta-Learning", "HuggingFace", "TensorFlow"],
      image: imagePlaceholders[1]
    }
  ];

  const projectProgress = [
    { label: "Research & Data Collection", progress: 100 },
    { label: "Model Architecture Design", progress: 85 },
    { label: "Model Training & Validation", progress: 70 },
    { label: "Performance Optimization", progress: 45 },
    { label: "Deployment & Integration", progress: 20 }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SectionTransition delay={500}>
              <h3 className="text-2xl font-display font-semibold mb-6">
                Development Progress
              </h3>
            </SectionTransition>
            
            <div className="space-y-4">
              {projectProgress.map((item, index) => (
                <SectionTransition key={item.label} delay={600 + index * 100}>
                  <ProgressCard label={item.label} progress={item.progress} />
                </SectionTransition>
              ))}
            </div>
          </div>
          
          <div>
            <SectionTransition delay={500}>
              <h3 className="text-2xl font-display font-semibold mb-6">
                Current Objectives
              </h3>
            </SectionTransition>
            
            <SectionTransition delay={600}>
              <div className="bg-card/80 border border-border/40 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <FileCode className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Optimize transformer architecture for medical imaging analysis</span>
                  </li>
                  <li className="flex">
                    <Layers className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Collect and preprocess additional training data for low-resource languages</span>
                  </li>
                  <li className="flex">
                    <Code className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Implement efficient cross-lingual knowledge transfer mechanisms</span>
                  </li>
                  <li className="flex">
                    <PlayCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Begin beta testing of the diagnosis system with partner medical institutions</span>
                  </li>
                </ul>
              </div>
            </SectionTransition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
