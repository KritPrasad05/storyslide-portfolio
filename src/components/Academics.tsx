
import React from 'react';
import SectionTransition from './SectionTransition';
import { Calendar, GraduationCap, MapPin, Trophy } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const EducationCard = ({ degree, institution, location, period, description, achievements }: EducationCardProps) => (
  <div className="relative p-6 border border-border/40 rounded-xl bg-card/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
    <div className="absolute -left-3 -top-3 rounded-full p-2 bg-primary/10 border border-primary/20">
      <GraduationCap className="h-5 w-5 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{degree}</h3>
    <h4 className="text-lg text-primary mb-4">{institution}</h4>
    
    <div className="flex items-center text-sm text-muted-foreground mb-2">
      <MapPin className="h-4 w-4 mr-1" />
      <span>{location}</span>
    </div>
    
    <div className="flex items-center text-sm text-muted-foreground mb-4">
      <Calendar className="h-4 w-4 mr-1" />
      <span>{period}</span>
    </div>
    
    <p className="text-muted-foreground mb-4">{description}</p>
    
    {achievements && achievements.length > 0 && (
      <div>
        <h5 className="text-sm font-medium mb-2 flex items-center">
          <Trophy className="h-4 w-4 mr-1 text-primary" />
          Achievements
        </h5>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Academics = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2022",
      description: "Specialized in machine learning and artificial intelligence with a focus on deep reinforcement learning algorithms for complex decision-making systems.",
      achievements: [
        "Published 5 research papers in top-tier AI conferences (ICML, NeurIPS)",
        "Awarded the University's Outstanding Research Award for AI Innovation",
        "Developed a novel learning algorithm that improved training efficiency by 30%"
      ]
    },
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2016 - 2018",
      description: "Focused on neural networks, computer vision, and natural language processing. Thesis on attention mechanisms in transformer architectures for improved language understanding.",
      achievements: [
        "Graduated with High Distinction (GPA: 3.95/4.0)",
        "Teaching Assistant for Advanced Machine Learning course",
        "Winner of the annual AI Hackathon for healthcare solutions"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2012 - 2016",
      description: "Comprehensive education in computer science fundamentals, algorithms, data structures, and introduction to machine learning and AI systems.",
      achievements: [
        "Dean's List for all semesters",
        "Undergraduate Research Assistant in the AI Research Lab",
        "Awarded Academic Excellence Scholarship for outstanding performance"
      ]
    }
  ];

  return (
    <section id="academics" className="relative py-20 px-4 md:px-8 bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_60%)]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            Academics
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            Educational Journey
          </h2>
        </SectionTransition>
        
        <SectionTransition delay={200}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            My academic background has provided me with a strong foundation in computer science, mathematics, and specialized knowledge in artificial intelligence. Each educational experience has shaped my understanding and approach to solving complex AI challenges.
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 gap-12">
          {education.map((edu, index) => (
            <SectionTransition key={edu.degree} delay={300 + index * 100}>
              <EducationCard {...edu} />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
