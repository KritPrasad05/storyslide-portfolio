
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, Code, Award, Layers, Mail } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  index: number;
  activeSection: string;
}

const NavItem = ({ icon: Icon, label, href, index, activeSection }: NavItemProps) => {
  const isActive = activeSection === href.substring(1);
  
  return (
    <motion.a
      href={href}
      className={`nav-item group relative flex items-center px-3 py-3 my-1 text-sm rounded-lg transition-all duration-300 ${
        isActive 
          ? 'text-primary font-medium bg-secondary/80' 
          : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
      }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
    >
      <span className="flex items-center">
        <Icon className={`mr-2 h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
      </span>
      {isActive && (
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-full"
          layoutId="activeIndicator"
        />
      )}
    </motion.a>
  );
};

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: GraduationCap, label: 'Academics', href: '#academics' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Certifications', href: '#certifications' },
    { icon: Layers, label: 'Latest Work', href: '#latest-work' },
    { icon: Mail, label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className="fixed left-0 top-0 h-screen z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ width: 70 }}
      animate={{ width: isHovered ? 200 : 70 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-start h-full py-6 px-2 backdrop-blur-lg bg-white/6 border-r border-white/12 shadow-2xl">
        <div className="w-full flex items-center justify-center mb-8 px-3">
          <motion.div 
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {isHovered ? "Portfolio" : "P"}
          </motion.div>
        </div>
        
        <div className="flex flex-col w-full flex-grow overflow-y-auto hide-scrollbar">
          {navItems.map((item, index) => (
            <NavItem 
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              index={index}
              activeSection={activeSection}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
