
import React from 'react';
import SectionTransition from './SectionTransition';
import { Brain, Cpu, Database, FileCode, FlaskConical, ChartLine } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-card border border-border/40 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
    <Icon className="h-10 w-10 text-primary mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "PyTorch, TensorFlow, transfer learning, CNNs"
    },
    {
      icon: ChartLine,
      title: "Computer Vision",
      description: "object detection, segmentation, YOLO/transfer pipelines"
    },
    {
      icon: FileCode,
      title: "NLP & Generative AI",
      description: "transformers, RAG, fine-tuning LLMs"
    },
    {
      icon: Cpu,
      title: "ML Ops & Cloud",
      description: "Docker, AWS, model optimization & inference"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "EDA, feature engineering, XGBoost, LightGBM"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
