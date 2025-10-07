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
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  projectUrl,
  date,
  projectId,
  featured = false
}: ProjectCardProps) => {
  return (
    <div
      className={`project-card ${featured ? 'featured md:col-span-2' : ''}`}
      aria-label={featured ? `Featured project: ${title}` : title}
      data-project-id={projectId}
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
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Amazon Lex Chatbot with AWS Lambda — NextWork",
      description: "Built a serverless banking chatbot using Amazon Lex and AWS Lambda to automate balance queries, eliminating manual lookups and improving response speed by 30%. Integrated intent handlers and code hooks for real-time responses.",
      image: projectAmazonLex,
      tags: ["AWS Lex", "AWS Lambda", "CloudFormation", "Serverless"],
      projectUrl: "https://learn.nextwork.org/vibrant_cyan_adorable_stingray/portfolio",
      date: "Aug 2025",
      projectId: "amazon-lex-chatbot",
      featured: true
    },
    {
      title: "Deep Learning (Computer Vision) — WorldQuant Applied AI Lab",
      description: "Built 6 computer-vision models (classification, detection, segmentation) on real-world datasets, achieving 90–92% accuracy using transfer learning, augmentation, and advanced CNN tuning.",
      image: projectComputerVision,
      tags: ["PyTorch", "OpenCV", "YOLO", "Transfer Learning", "GANs", "Streamlit"],
      projectUrl: "https://github.com/KritPrasad05/Applied-AI_Lab-Deep_Learning_for_Computer_Vision_WorldQuant_University",
      date: "Jan 2025 – Jul 2025",
      projectId: "computer-vision-worldquant"
    },
    {
      title: "System Efficiency Forecasting (ML) — Zelestra x AWS ML Challenge",
      description: "Preprocessed 20K+ entries and engineered/validated the dataset by cleaning 5+ critical features and applying robust outlier handling. Trained 6 regression models; best score: 89.21 (Gradient Boosting Regressor).",
      image: projectEfficiencyForecast,
      tags: ["XGBoost", "GradientBoosting", "Scikit-learn", "EDA"],
      projectUrl: "https://colab.research.google.com/drive/1TslB_Qr0ioABQpx61aB01VcOzpiMqRCy?usp=sharing",
      date: "Jun 2025",
      projectId: "efficiency-forecasting"
    },
    {
      title: "AI-Based Trade Ranking System (FinTech) — Primetrade.ai",
      description: "Ranked 150+ traders using ML models trained on 20,000+ trade records (R² = 0.99). Improved ranking fairness by 20% using ROI filters and Z-score outlier control.",
      image: projectTradeRanking,
      tags: ["Python", "Pandas", "XGBoost", "LightGBM", "Scikit-Learn"],
      projectUrl: "https://github.com/KritPrasad05/Primetrade.ai._Internship_Task",
      date: "Feb 2025",
      projectId: "trade-ranking-fintech"
    },
    {
      title: "Temperature Prediction Model (Time Series) — Hackathon",
      description: "Predicted temperature with RMSE = 2.5°C using lag/cyclic/rolling features; boosted test performance to 96.91% via XGBoost tuning and 10-fold validation.",
      image: projectTemperature,
      tags: ["Python", "XGBoost", "Time-Series Features", "Cross-Validation"],
      projectUrl: "https://github.com/KritPrasad05/Time_Series_Data-Future_Weather_Prediction-",
      date: "Oct 2024",
      projectId: "temperature-prediction"
    },
    {
      title: "Speech-to-Text Transformer (NLP) — NULLCLASS Task",
      description: "Fine-tuned STT transformer models on custom audio, reducing WER by 18% and converting 50+ minutes of domain audio with a 2-layer transformer pipeline.",
      image: projectSpeechToText,
      tags: ["Hugging Face", "TensorFlow", "Transformers", "Streamlit"],
      projectUrl: "https://github.com/KritPrasad05/NULLCLASS_INTERNSHIP-TASK3-KritPrasad",
      date: "Jun 2024 – Jul 2024",
      projectId: "speech-to-text-nlp"
    },
    {
      title: "Customer Churn Prediction (Data Science) — Coursera Project Network",
      description: "Modeled churn on 5K+ telecom records; improved recall by 15% using SMOTE balancing and tuned ML models via GridSearchCV.",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <SectionTransition key={project.projectId} delay={300 + index * 100}>
              <ProjectCard {...project} />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
