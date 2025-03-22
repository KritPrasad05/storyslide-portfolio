
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

const CertificationCard = ({ title, issuer, date, description, credentialUrl }: CertificationCardProps) => (
  <div className="group relative p-6 border border-border/40 rounded-xl bg-card/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
    <div className="absolute -right-3 -top-3 rounded-full p-2 bg-primary/10 border border-primary/20">
      <Award className="h-5 w-5 text-primary" />
    </div>
    
    <h3 className="text-lg font-semibold mb-1 pr-8">{title}</h3>
    <h4 className="text-primary mb-4">{issuer}</h4>
    
    <div className="flex items-center text-sm text-muted-foreground mb-4">
      <Calendar className="h-4 w-4 mr-1" />
      <span>{date}</span>
    </div>
    
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    
    {credentialUrl && (
      <a 
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-primary hover:underline"
      >
        View Credential <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    )}
  </div>
);

const AchievementCard = ({ title, description }: { title: string; description: string }) => (
  <div className="relative p-6 border border-border/40 rounded-xl bg-card/80 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - DeepLearning.AI",
      date: "September 2021",
      description: "Comprehensive specialization covering neural networks, deep learning, structuring machine learning projects, CNNs, and sequence models.",
      credentialUrl: "#"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "March 2022",
      description: "Professional certification demonstrating proficiency in using TensorFlow to implement machine learning models for various applications.",
      credentialUrl: "#"
    },
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "January 2023",
      description: "Validation of ability to design, implement, deploy, and maintain machine learning solutions for real-world problems on AWS.",
      credentialUrl: "#"
    },
    {
      title: "Computer Vision Professional Certificate",
      issuer: "NVIDIA Deep Learning Institute",
      date: "November 2022",
      description: "Advanced training in computer vision techniques, including object detection, segmentation, and video analysis using NVIDIA's tools.",
      credentialUrl: "#"
    },
    {
      title: "Natural Language Processing Nanodegree",
      issuer: "Udacity",
      date: "August 2021",
      description: "In-depth program covering text processing, feature extraction, sentiment analysis, and neural machine translation.",
      credentialUrl: "#"
    }
  ];

  const achievements = [
    {
      title: "1st Place in International AI Hackathon",
      description: "Led a team that won first place for developing an AI solution for early disease detection from medical images."
    },
    {
      title: "Research Publication in Top-tier Conference",
      description: "Published original research on efficient transformers for vision tasks at NeurIPS 2022."
    },
    {
      title: "Open Source Contribution Recognition",
      description: "Recognized as top contributor to a popular machine learning library, adding key features used by thousands of developers."
    },
    {
      title: "Industry Innovation Award",
      description: "Received recognition for developing an AI system that reduced manufacturing defects by 35% for a Fortune 500 client."
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
