
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
      position: "Data Science Writer",
      company: "AI ML Universe",
      location: "Remote",
      period: "Apr 2025 – Jun 2025",
      description: "Focused on researching, writing, and optimizing AI/ML content to boost visibility, engagement, and thought leadership.",
      responsibilities: [
        "Authored 8+ SEO-optimized blogs on topics such as Tokenization, Reliable AI, RAIL, Forecasting, Hugging Face, and Multimodal AI, increasing organic traffic by ~30%",
        "Simplified complex AI concepts into accessible, engaging content, improving read-through rate by 18% and average time-on-page by 20%",
        "Applied keyword optimization and metadata strategies, achieving top-10 Google search rankings for multiple focus keywords",
        "Enhanced engagement by blending technical depth with storytelling and humor, driving a 25% increase in blog shares/comments",
        "Contributed to AIML Universe's thought leadership on ethical and applied AI, growing LinkedIn engagement by ~35%"
      ],
      technologies: ["SEO", "Content Strategy", "Technical Writing", "AI/ML Research", "Google Analytics", "Hugging Face"]
    },
    {
      position: "Data Analytics and Power BI Intern",
      company: "Edunet Foundation",
      location: "Remote",
      period: "Jul 2024 – Aug 2024",
      description: "Worked on large-scale e-commerce datasets to deliver actionable insights and create interactive dashboards for business decision-making.",
      responsibilities: [
        "Analyzed 100,000+ e-commerce records, identifying 5+ KPIs to guide strategic decisions",
        "Designed and deployed 3 interactive Power BI dashboards adopted by 10+ managers for sales, retention, and operational efficiency tracking",
        "Improved reporting accuracy by 25%, ensuring 95%+ confidence in decision-making",
        "Standardized dashboard reporting with a reusable template, reducing future reporting time by 40% (~8 analyst hours/month saved)",
        "Presented insights to senior leadership, influencing inventory reduction (~12% less overstock) and improving sales forecast accuracy by 15%"
      ],
      technologies: ["Power BI", "SQL", "Excel", "Data Visualization", "Business Analytics"]
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
