import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SpatialScrollProps {
  children: React.ReactNode;
}

const SpatialScroll = ({ children }: SpatialScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      gsap.set(".panel", { transformStyle: "preserve-3d" });

      panels.forEach((panel, i) => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        
        if (!prefersReducedMotion) {
          // Light zoom-in and fade effect
          gsap.fromTo(panel,
            { 
              scale: 0.95, 
              opacity: 0.7,
              y: 50
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                end: "top 25%",
                scrub: 0.5,
              }
            }
          );
        } else {
          // Simple fade for reduced motion
          gsap.fromTo(panel,
            { opacity: 0.8 },
            {
              opacity: 1,
              duration: 0.8,
              ease: "power1.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                end: "top 50%",
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ perspective: 1200 }}
      className="spatial-scroll-container"
    >
      {children}
    </div>
  );
};

export default SpatialScroll;