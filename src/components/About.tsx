
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
      title: "Machine Learning",
      description: "Expertise in supervised and unsupervised learning algorithms, deep learning, and neural networks."
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Implementing and optimizing neural networks using TensorFlow and PyTorch frameworks."
    },
    {
      icon: FileCode,
      title: "Natural Language Processing",
      description: "Building text analysis systems, sentiment analysis, and language generation models."
    },
    {
      icon: ChartLine,
      title: "Computer Vision",
      description: "Developing image recognition, object detection, and visual data analysis systems."
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Processing and analyzing large-scale datasets using distributed computing frameworks."
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
      description: "Exploring cutting-edge AI techniques and publishing research in academic journals."
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
                I am a dedicated AI/ML engineer with a passion for developing intelligent systems that solve complex real-world problems. My journey in artificial intelligence began with a fascination for how machines can learn and adapt, mimicking human cognitive functions while exceeding human capabilities in specific domains.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong foundation in mathematics, statistics, and programming, I've worked on diverse projects ranging from natural language processing to computer vision and reinforcement learning. I believe that AI has the potential to transform industries and improve human lives in meaningful ways.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines theoretical knowledge with practical implementation, always staying current with the latest advancements in the field. I'm particularly interested in developing ethical AI systems that are explainable, fair, and beneficial to society.
              </p>
            </div>
          </SectionTransition>
          
          <SectionTransition type="slide-left" delay={300}>
            <div className="relative h-full flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-background border border-border/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5/6 h-5/6 rounded-xl bg-card flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/10">AI</div>
                  </div>
                </div>
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
