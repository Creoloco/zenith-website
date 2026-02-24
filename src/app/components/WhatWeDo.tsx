import { motion } from 'motion/react';
import { Brain, Code, Building2, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Brain,
    title: 'AI Agents',
    description: 'Custom-built intelligent agents designed around your workflows, data, and goals.',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored AI systems, integrations, and scalable architecture beyond no-code limitations.',
  },
  {
    icon: Building2,
    title: 'AI Implementation',
    description: 'Introducing AI into company structures — governance, workflows, and measurable integration.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Enablement',
    description: 'Hands-on training for teams to effectively adopt, manage, and scale AI systems.',
  },
];

export function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="solutions" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
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
            Solutions
          </motion.div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic AI solutions designed for enterprise transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? -8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-card border border-border rounded-sm p-8 transition-all duration-300"
                  style={{
                    boxShadow: hoveredIndex === index ? '0 20px 60px rgba(0, 102, 255, 0.1)' : 'none',
                  }}
                >
                  <div className="mb-6">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <h3 className="text-xl mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
