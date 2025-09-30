
import React from 'react';
import SectionTransition from './SectionTransition';
import { Brain, Sparkles, ChartLine, Code2, Database, PieChart, Cloud, Monitor } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
  const cardId = title.replace(/\s/g, '-').toLowerCase();
  
  return (
    <div className="group relative rounded-xl p-6 h-[280px] flex flex-col transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1" style={{ transformStyle: 'preserve-3d' }}>
      {/* Base border */}
      <div className="absolute inset-0 rounded-xl border border-primary/20"></div>
      
      {/* Animated traveling light on border with glow */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ borderRadius: '0.75rem' }}>
        <defs>
          <linearGradient id={`light-gradient-${cardId}`}>
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="transparent" />
            <stop offset="45%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="50%" stopColor="currentColor" className="text-gray-700 dark:text-white" stopOpacity="1" />
            <stop offset="55%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="70%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id={`glow-${cardId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect 
          x="2" 
          y="2" 
          width="calc(100% - 4px)" 
          height="calc(100% - 4px)" 
          rx="10" 
          ry="10" 
          fill="none" 
          stroke={`url(#light-gradient-${cardId})`}
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="15 85"
          filter={`url(#glow-${cardId})`}
          className="animate-[border-spin_6s_linear_infinite]"
        />
      </svg>
      
      {/* Card background */}
      <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
        <h3 className="text-lg font-semibold mb-2 flex-shrink-0">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* 3D shadow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ transform: 'translateZ(-10px)' }}></div>
    </div>
  );
};

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Supervised, Unsupervised, Time Series, Neural Networks (CNN, RNN), Gradient Boosting and Tree Based Algorithm"
    },
    {
      icon: Sparkles,
      title: "Next GenAI",
      description: "RAG, GAN, A2A, MCP, Diffusion Models, Prompt Engineering, Fine Tuning, Transfer Learning"
    },
    {
      icon: ChartLine,
      title: "Data Science & Analytics",
      description: "EDA, ETL Pipelines, Predictive Analytics, Feature Engineering, Statistical Modelling, Model Optimisation"
    },
    {
      icon: Code2,
      title: "Python Programming",
      description: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, PyTorch, TensorFlow, FastAPI, Streamlit"
    },
    {
      icon: Database,
      title: "Databases",
      description: "MySQL, Microsoft SQL Server, Oracle, Oracle Apex, mongoDB"
    },
    {
      icon: PieChart,
      title: "BI Tools",
      description: "Microsoft Power BI, Tableau"
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "AWS (Bedrock, SageMaker, S3, Lambda, Lex, PartyRock)"
    },
    {
      icon: Monitor,
      title: "Software Skill",
      description: "Word, Excel, PowerPoint, Google Forms, Sheets"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            About Me
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            Passionate AI Engineer with a Vision
          </h2>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <SectionTransition type="slide-right" delay={200}>
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Krit Prasad — a hands-on AI/ML engineer and data scientist building practical, explainable solutions across computer vision, NLP, and time-series forecasting. I combine rigorous math and research-driven best practices with production experience (PyTorch, TensorFlow, AWS) to design scalable pipelines and models that deliver real business value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Driven by curiosity, I love turning messy data into clear decisions — whether that's improving model latency for production, designing a novel CV pipeline, or explaining model outputs to stakeholders. I focus on reliability, reproducibility, and responsible AI.
              </p>
            </div>
          </SectionTransition>
          
          <SectionTransition type="slide-left" delay={300}>
            <div className="relative h-full flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-background border border-border/40">
                <img 
                  src="/lovable-uploads/4907a969-4ef5-47e8-bbef-151d8c577293.png" 
                  alt="Krit Prasad - AI/ML Engineer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_70%)]"></div>
              </div>
            </div>
          </SectionTransition>
        </div>
        
        <SectionTransition delay={400}>
          <h3 className="text-2xl font-display font-semibold mb-8">
            My Expertise
          </h3>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SectionTransition key={skill.title} delay={500 + index * 100}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
