import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Understanding your challenges, objectives, and AI readiness',
  },
  {
    number: '02',
    title: 'Workflow & Systems Audit',
    description: 'Deep analysis of current operations and technical infrastructure',
  },
  {
    number: '03',
    title: 'Data & Tool Mapping',
    description: 'Identifying data sources, integration points, and existing tools',
  },
  {
    number: '04',
    title: 'Agent Blueprint',
    description: 'Strategic design of AI agent architecture and capabilities',
  },
  {
    number: '05',
    title: 'Build & Iteration',
    description: 'Agile development with continuous feedback loops',
  },
  {
    number: '06',
    title: 'Deployment',
    description: 'Seamless integration into production environments',
  },
  {
    number: '07',
    title: 'Team Training',
    description: 'Comprehensive enablement for your team members',
  },
  {
    number: '08',
    title: 'Optimization & Scaling',
    description: 'Continuous improvement and expansion of capabilities',
  },
];

export function ProcessDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
    <section id="process" ref={sectionRef} className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

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
            Process
          </motion.div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            From Discovery to Optimization
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to AI transformation
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative group"
              >
                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-card border border-border rounded-sm p-6 h-full transition-all duration-300"
                    style={{
                      boxShadow: activeStep === index ? '0 20px 60px rgba(0, 102, 255, 0.15)' : 'none',
                    }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <motion.div
                        animate={{
                          scale: activeStep === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-accent tracking-tight" style={{ fontWeight: 500 }}>
                            {step.number}
                          </span>
                        </div>
                        {activeStep === index && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border-2 border-accent"
                          />
                        )}
                      </motion.div>
                    </div>

                    <h3 className="text-lg mb-3 tracking-tight" style={{ fontWeight: 500 }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>

                  {/* Vertical connector for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-full w-px h-8 bg-accent/20" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
