import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import foundersImage from '@/assets/734ccd0c981dc22d581eb9be4cf3a0dd68992794.png';

export function Founders() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="founders" ref={sectionRef} className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 bg-accent/10 text-accent text-sm tracking-tight rounded-full"
          >
            Leadership
          </motion.div>
          <h2 className="text-4xl md:text-6xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Founders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={foundersImage}
                alt="ZENITH Founders"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 border border-accent/20 rounded-sm pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-accent" />
                <h3 className="text-2xl tracking-tight" style={{ fontWeight: 500 }}>
                  Martyna Uliasz
                </h3>
              </div>
              <p className="text-sm text-accent mb-2 tracking-wider uppercase">CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Martyna Uliasz is an AI strategist with a background in neurocognitive science and over eight years 
                in technology consulting and enterprise IT, she has led complex digital initiatives that connect business 
                strategy with scalable AI systems. As a Women in Tech ambassador, she actively supports greater 
                representation and leadership of women in emerging technologies. Combining cognitive science, consulting 
                expertise, and applied AI execution, she helps organizations adopt intelligent agents that enhance 
                decision-making, optimize operations, and unlock new growth opportunities.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />

            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-accent" />
                <h3 className="text-2xl tracking-tight" style={{ fontWeight: 500 }}>
                  Blake Lezenski
                </h3>
              </div>
              <p className="text-sm text-accent mb-2 tracking-wider uppercase">COO</p>
              <p className="text-muted-foreground leading-relaxed">
                Blake Lezenski is an AI & Web3 VC. As the Head of Advisory at Outlier Ventures, he has led the execution 
                of multiple accelerators, including two editions of FARFETCH Dream Assembly Base Camp. Having successfully 
                guided 40 startups across 5 cohorts, he is an expert in immersive commerce and the adoption of AI Agents 
                & Web3 across various industries. Deeply embedded in the global technology ecosystem and executive advisor 
                to numerous founders, he matches the needs of fashion brands, corporates, and foundations with the best 
                startups to help them build technology ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
