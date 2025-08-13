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
          // Subtle staggered depth: farther panels start slightly behind
          gsap.fromTo(panel,
            { z: i * -120, scale: 0.94 + i * 0.01, rotationX: 5 },
            {
              z: 0,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 0.8,
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