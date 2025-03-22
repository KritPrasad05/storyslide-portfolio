
import React, { useEffect, useRef } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  type?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  delay?: number;
  threshold?: number;
}

const SectionTransition = ({
  children,
  className = '',
  type = 'slide-up',
  delay = 0,
  threshold = 0.1,
}: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-animation ${type} ${className}`}>
      {children}
    </div>
  );
};

export default SectionTransition;
