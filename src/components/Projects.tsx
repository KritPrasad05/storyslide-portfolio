import React, { useState } from 'react';
import SectionTransition from './SectionTransition';
import { ExternalLink } from 'lucide-react';
import projectAmazonLex from '@/assets/project-amazon-lex.jpg';
import projectComputerVision from '@/assets/project-computer-vision.jpg';
import projectEfficiencyForecast from '@/assets/project-efficiency-forecast.jpg';
import projectTradeRanking from '@/assets/project-trade-ranking.jpg';
import projectTemperature from '@/assets/project-temperature.jpg';
import projectSpeechToText from '@/assets/project-speech-to-text.jpg';
import projectChurnPrediction from '@/assets/project-churn-prediction.jpg';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  projectUrl,
  featured = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-xl border border-border/40 bg-card/50 transition-all duration-300 block cursor-pointer hover:border-primary/40 ${
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
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {title}
          <ExternalLink className="h-4 w-4 text-primary" />
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-xs text-primary/80 font-medium">
          Click to view project →
        </div>
      </div>
      
      {/* Title overlay when not hovered */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Amazon Lex Chatbot with AWS Lambda",
      description: "NextWork Lambda - Built a serverless AI chatbot using Amazon Lex and AWS Lambda for cloud-based conversation handling and automation.",
      image: projectAmazonLex,
      tags: ["AWS Lambda", "Amazon Lex", "Serverless", "AI"],
      projectUrl: "https://learn.nextwork.org/vibrant_cyan_adorable_stingray/portfolio",
      featured: true
    },
    {
      title: "Deep Learning (Computer Vision)",
      description: "WorldQuant Applied AI Lab - Implemented advanced computer vision pipelines for object detection, classification, and segmentation tasks.",
      image: projectComputerVision,
      tags: ["PyTorch", "Computer Vision", "Deep Learning", "AI"],
      projectUrl: "https://github.com/KritPrasad05/Applied-AI_Lab-Deep_Learning_for_Computer_Vision_WorldQuant_University"
    },
    {
      title: "System Efficiency Forecasting (ML)",
      description: "Zelestra x AWS ML Challenge - Developed predictive models to forecast system efficiency trends using machine learning algorithms.",
      image: projectEfficiencyForecast,
      tags: ["Machine Learning", "AWS", "Forecasting", "Python"],
      projectUrl: "https://colab.research.google.com/drive/1TslB_Qr0ioABQpx61aB01VcOzpiMqRCy?usp=sharing"
    },
    {
      title: "AI-Based Trade Ranking System",
      description: "Primetrade.ai FinTech Project - Built an intelligent ranking system for traders using AI-driven algorithms and financial metrics.",
      image: projectTradeRanking,
      tags: ["AI", "FinTech", "XGBoost", "Python"],
      projectUrl: "https://github.com/KritPrasad05/Primetrade.ai._Internship_Task"
    },
    {
      title: "Temperature Prediction Model",
      description: "Time Series Hackathon - Created a predictive model for temperature forecasting using time series analysis and ML techniques.",
      image: projectTemperature,
      tags: ["Time Series", "ML", "Forecasting", "Python"],
      projectUrl: "https://github.com/KritPrasad05/Time_Series_Data-Future_Weather_Prediction-"
    },
    {
      title: "Speech-to-Text Transformer (NLP)",
      description: "NULLCLASS TASK - Implemented a transformer-based speech recognition system converting audio to text using NLP techniques.",
      image: projectSpeechToText,
      tags: ["NLP", "Transformers", "Speech Recognition", "AI"],
      projectUrl: "https://github.com/KritPrasad05/NULLCLASS_INTERNSHIP-TASK3-KritPrasad"
    },
    {
      title: "Customer Churn Prediction",
      description: "Coursera Project Network - Developed a data science model to predict customer churn using advanced analytics and ML algorithms.",
      image: projectChurnPrediction,
      tags: ["Data Science", "ML", "Analytics", "Python"],
      projectUrl: "https://github.com/KritPrasad05/Churn_Prediction-Coursera_Project_Network"
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
