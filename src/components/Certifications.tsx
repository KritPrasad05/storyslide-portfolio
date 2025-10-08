
import React from 'react';
import SectionTransition from './SectionTransition';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

const CertificationCard = ({ title, issuer, date, description, credentialUrl }: CertificationCardProps) => {
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
        <div className="absolute -right-3 -top-3 rounded-full p-2 bg-primary/10 border border-primary/20">
          <Award className="h-5 w-5 text-primary" />
        </div>
        
        <h3 className="text-lg font-semibold mb-1 pr-8">{title}</h3>
        <h4 className="text-primary mb-3">{issuer}</h4>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        
        {credentialUrl && (
          <a 
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline mt-auto"
          >
            View Credential <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        )}
      </div>
      
      {/* 3D shadow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ transform: 'translateZ(-10px)' }}></div>
    </div>
  );
};

const AchievementCard = ({ title, description }: { title: string; description: string }) => {
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
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      </div>
      
      {/* 3D shadow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ transform: 'translateZ(-10px)' }}></div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "May 2024",
      description: "Comprehensive 8-course certification covering data cleaning, analysis, visualization, and R programming with hands-on projects in SQL, Tableau, and AI-driven analytics.",
      credentialUrl: "https://www.credly.com/badges/fcc0b4b9-d3d0-462e-91d7-2d9ae377f02b/public_url"
    },
    {
      title: "Data Science Lab Badge",
      issuer: "WorldQuant University",
      date: "Apr 2025",
      description: "Awarded for completing hands-on projects in applied machine learning, data science, and model deployment within the WorldQuant Applied AI Lab.",
      credentialUrl: "https://drive.google.com/file/d/1V8oF4a-0O6ytDfWHvM9i2dK19ybs6sy9/view?usp=sharing"
    },
    {
      title: "Applied AI Labs: Deep Learning for Computer Vision",
      issuer: "WorldQuant University",
      date: "Apr 2025",
      description: "Developed 6 computer vision models using transfer learning, augmentation, and GANs to achieve 90–92% accuracy on real-world datasets.",
      credentialUrl: "https://github.com/KritPrasad05/Applied-AI_Lab-Deep_Learning_for_Computer_Vision_WorldQuant_University"
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Feb 2024",
      description: "Covered data literacy, storytelling, and visualization principles using real-world datasets, building foundation for business-driven analytics.",
      credentialUrl: "https://www.credly.com/badges/7241daa5-189d-4c62-8004-390c1fa8be94/public_url"
    },
    {
      title: "Google Generative AI Certificate",
      issuer: "Google Cloud Skills Boost",
      date: "Jun 2024",
      description: "Practical certification demonstrating generative AI applications, including prompt engineering, large language models, and image generation workflows.",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/a70d33a9-87d9-41e2-afe2-11cacce1767f/badges/6894130"
    }
  ];

  const achievements = [
    {
      title: "Deloitte Data Analytics Virtual Job Simulation",
      description: "Forage – Aug 2025. Completed Deloitte Australia's Data Analytics Virtual Experience Program. Designed a dynamic Tableau dashboard to track system downtime and utilized Excel to classify 100+ roles into three pay equity categories, demonstrating strong data visualization and analytical capabilities."
    },
    {
      title: "Commonwealth Bank Data Science Virtual Job Simulation",
      description: "Forage – Jan 2024. Completed Commonwealth Bank's Introduction to Data Science Virtual Experience. Optimized SQL schemas and queries, improving execution speed by 25% and boosting data processing efficiency by 40%, showcasing advanced problem-solving and data engineering proficiency."
    }
  ];

  return (
    <section id="certifications" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTransition>
          <span className="inline-block text-sm font-medium text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
            Certifications & Achievements
          </span>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">
            Professional Qualifications
          </h2>
        </SectionTransition>
        
        <SectionTransition delay={200}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Continuous learning is essential in the rapidly evolving field of artificial intelligence. Here are the certifications I've earned and notable achievements in my professional journey.
          </p>
        </SectionTransition>
        
        <div className="mb-16">
          <SectionTransition delay={300}>
            <h3 className="text-2xl font-display font-semibold mb-8">
              Certifications
            </h3>
          </SectionTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <SectionTransition key={cert.title} delay={400 + index * 100}>
                <CertificationCard {...cert} />
              </SectionTransition>
            ))}
          </div>
        </div>
        
        <div>
          <SectionTransition delay={900}>
            <h3 className="text-2xl font-display font-semibold mb-8">
              Key Achievements
            </h3>
          </SectionTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <SectionTransition key={achievement.title} delay={1000 + index * 100}>
                <AchievementCard {...achievement} />
              </SectionTransition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
