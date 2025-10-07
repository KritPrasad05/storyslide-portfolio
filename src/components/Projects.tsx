import React, { useState, KeyboardEvent } from 'react';
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
  date: string;
  projectId: string;
  featured?: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  projectUrl,
  date,
  projectId,
  featured = false,
  isHovered,
  onHover,
  onLeave
}: ProjectCardProps) => {
  return (
    <div
      className={`project-card ${featured ? 'featured md:col-span-2' : ''} transition-all duration-500 ease-in-out`}
      aria-label={featured ? `Featured project: ${title}` : title}
      data-project-id={projectId}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-full overflow-hidden rounded-xl border border-border/40 bg-card/50 shadow-lg hover:border-primary/40 focus-within:border-primary/40 transition-all duration-300">
        <div className="aspect-video overflow-hidden">
          <div 
            className="h-full w-full bg-cover bg-center transition-transform duration-700"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
        
        {/* Expandable Description */}
        <div 
          className={`absolute inset-x-0 bottom-0 bg-background/98 border-t border-border/40 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden ${
            isHovered ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 space-y-3">
            <p className="text-sm text-foreground leading-relaxed">
              {description}
            </p>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      title: "Amazon Lex Chatbot with AWS Lambda — NextWork",
      description: "Built a fully serverless banking chatbot using Amazon Lex and AWS Lambda to automate balance queries, intent recognition, and real-time responses—reducing manual intervention and improving response efficiency by 30%.",
      image: projectAmazonLex,
      tags: ["AWS Lex", "AWS Lambda", "CloudFormation", "Serverless"],
      projectUrl: "https://learn.nextwork.org/vibrant_cyan_adorable_stingray/portfolio",
      date: "Aug 2025",
      projectId: "amazon-lex-chatbot",
      featured: true
    },
    {
      title: "Deep Learning (Computer Vision) — WorldQuant Applied AI Lab",
      description: "Developed and fine-tuned 6 deep learning models for image classification, detection, and segmentation tasks on real-world datasets, achieving 90–92% accuracy using transfer learning, augmentation, and advanced CNN architectures.",
      image: projectComputerVision,
      tags: ["PyTorch", "OpenCV", "YOLO", "Transfer Learning", "GANs", "Streamlit"],
      projectUrl: "https://github.com/KritPrasad05/Applied-AI_Lab-Deep_Learning_for_Computer_Vision_WorldQuant_University",
      date: "Jan 2025 – Jul 2025",
      projectId: "computer-vision-worldquant"
    },
    {
      title: "System Efficiency Forecasting (ML) — Zelestra x AWS ML Challenge",
      description: "Preprocessed and validated 20K+ entries by cleaning 5+ critical features, handling outliers, and training 6 regression models. Achieved the best R² score of 89.21 using Gradient Boosting Regressor for accurate efficiency forecasting.",
      image: projectEfficiencyForecast,
      tags: ["XGBoost", "GradientBoosting", "Scikit-learn", "EDA"],
      projectUrl: "https://colab.research.google.com/drive/1TslB_Qr0ioABQpx61aB01VcOzpiMqRCy?usp=sharing",
      date: "Jun 2025",
      projectId: "efficiency-forecasting"
    },
    {
      title: "AI-Based Trade Ranking System (FinTech) — Primetrade.ai",
      description: "Ranked 150+ traders using ML models trained on 20,000+ trade records (R² = 0.99). Enhanced fairness by 20% with ROI-based ranking filters and Z-score normalization for outlier control, improving decision reliability in trade analytics.",
      image: projectTradeRanking,
      tags: ["Python", "Pandas", "XGBoost", "LightGBM", "Scikit-Learn"],
      projectUrl: "https://github.com/KritPrasad05/Primetrade.ai._Internship_Task",
      date: "Feb 2025",
      projectId: "trade-ranking-fintech"
    },
    {
      title: "Temperature Prediction Model (Time Series) — Hackathon",
      description: "Designed a time-series regression model to forecast temperature trends. Implemented lag, cyclic, and rolling window features, achieving 96.91% accuracy and 2.5°C RMSE after XGBoost tuning and 10-fold validation.",
      image: projectTemperature,
      tags: ["Python", "XGBoost", "Time-Series Features", "Cross-Validation"],
      projectUrl: "https://github.com/KritPrasad05/Time_Series_Data-Future_Weather_Prediction-",
      date: "Oct 2024",
      projectId: "temperature-prediction"
    },
    {
      title: "Speech-to-Text Transformer (NLP) — NULLCLASS Task",
      description: "Fine-tuned Transformer-based speech recognition models to convert 50+ minutes of audio to text. Reduced word error rate (WER) by 18% using a custom dataset and implemented a 2-layer Transformer pipeline for robust transcription.",
      image: projectSpeechToText,
      tags: ["Hugging Face", "TensorFlow", "Transformers", "Streamlit"],
      projectUrl: "https://github.com/KritPrasad05/NULLCLASS_INTERNSHIP-TASK3-KritPrasad",
      date: "Jun 2024 – Jul 2024",
      projectId: "speech-to-text-nlp"
    },
    {
      title: "Customer Churn Prediction (Data Science) — Coursera Project Network",
      description: "Analyzed 5K+ telecom customer records to predict churn probability. Improved recall by 15% using SMOTE for class balance and optimized models with GridSearchCV, enabling proactive retention strategies.",
      image: projectChurnPrediction,
      tags: ["Scikit-Learn", "Pandas", "SMOTE", "ROC-AUC"],
      projectUrl: "https://github.com/KritPrasad05/Churn_Prediction-Coursera_Project_Network",
      date: "May 2024 – Jun 2024",
      projectId: "churn-prediction"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <SectionTransition key={project.projectId} delay={300 + index * 100}>
              <ProjectCard 
                {...project} 
                isHovered={hoveredProject === project.projectId}
                onHover={() => setHoveredProject(project.projectId)}
                onLeave={() => setHoveredProject(null)}
              />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
