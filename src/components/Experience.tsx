
import React from 'react';
import SectionTransition from './SectionTransition';
import { Briefcase, Calendar, Check, ChevronRight, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

const ExperienceCard = ({ 
  position, 
  company, 
  location, 
  period, 
  description, 
  responsibilities,
  technologies
}: ExperienceCardProps) => (
  <div className="relative p-6 border border-border/40 rounded-xl bg-card/50 hover:shadow-md transition-all duration-300">
    <div className="absolute -left-3 -top-3 rounded-full p-2 bg-primary/10 border border-primary/20">
      <Briefcase className="h-5 w-5 text-primary" />
    </div>
    
    <h3 className="text-xl font-semibold mb-1">{position}</h3>
    <h4 className="text-lg text-primary mb-4">{company}</h4>
    
    <div className="flex items-center text-sm text-muted-foreground mb-2">
      <MapPin className="h-4 w-4 mr-1" />
      <span>{location}</span>
    </div>
    
    <div className="flex items-center text-sm text-muted-foreground mb-4">
      <Calendar className="h-4 w-4 mr-1" />
      <span>{period}</span>
    </div>
    
    <p className="text-muted-foreground mb-4">{description}</p>
    
    <div className="mb-4">
      <h5 className="text-sm font-medium mb-2">Key Responsibilities</h5>
      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
    
    {technologies && (
      <div>
        <h5 className="text-sm font-medium mb-2">Technologies</h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Experience = () => {
  const experiences = [
    {
      position: "Senior AI Engineer",
      company: "TechVision AI",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading AI initiatives focused on developing state-of-the-art computer vision systems for autonomous vehicles and smart city infrastructure.",
      responsibilities: [
        "Architect and develop deep learning models for object detection, segmentation, and tracking in real-time video feeds",
        "Lead a team of 5 AI engineers, mentoring junior team members and coordinating cross-functional collaboration",
        "Design and implement efficient data pipelines for processing large-scale image and video datasets",
        "Collaborate with product managers to define AI product roadmap and technical specifications"
      ],
      technologies: ["PyTorch", "TensorFlow", "CUDA", "Python", "Docker", "Kubernetes", "AWS", "Computer Vision", "MLOps"]
    },
    {
      position: "Machine Learning Engineer",
      company: "DataMind Analytics",
      location: "Boston, MA",
      period: "2019 - 2022",
      description: "Developed and deployed machine learning solutions for predictive analytics, recommendation systems, and natural language processing applications.",
      responsibilities: [
        "Built end-to-end machine learning pipelines for large-scale data processing and model training",
        "Implemented recommendation engines that increased user engagement by 35% across client platforms",
        "Developed NLP models for sentiment analysis, entity recognition, and text classification for multiple languages",
        "Optimized model inference for production environments, reducing latency by 60%"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "SQL", "Spark", "Airflow", "GCP"]
    },
    {
      position: "AI Research Intern",
      company: "OpenAI Research",
      location: "Remote",
      period: "Summer 2018",
      description: "Contributed to research on reinforcement learning algorithms and their applications in robotic control and strategy games.",
      responsibilities: [
        "Implemented and evaluated novel reinforcement learning algorithms for complex environments",
        "Conducted experiments to benchmark algorithm performance against existing state-of-the-art methods",
        "Contributed to an open-source library of reinforcement learning tools and environments",
        "Co-authored a research paper presented at a major AI conference"
      ],
      technologies: ["Python", "PyTorch", "OpenAI Gym", "Reinforcement Learning", "Robotics Simulation"]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            Professional Experience
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            My Work Experience
          </h2>
        </SectionTransition>
        
        <SectionTransition delay={200}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Through my professional journey, I've had the opportunity to work on diverse AI projects across different domains, developing expertise in building and deploying intelligent systems at scale.
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <SectionTransition key={exp.company} delay={300 + index * 100}>
              <ExperienceCard {...exp} />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
