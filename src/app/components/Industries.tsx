import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEzMzM0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Intelligent systems for patient care and operational efficiency',
  },
  {
    name: 'Finance',
    image: 'https://images.unsplash.com/photo-1765729003706-355ca161736d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkaXN0cmljdCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzE0MDkzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Advanced automation for risk assessment and compliance',
  },
  {
    name: 'Retail',
    image: 'https://images.unsplash.com/photo-1747564881010-10d74fbd0f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXRhaWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE0MDkzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'AI-powered personalization and inventory optimization',
  },
  {
    name: 'Legal',
    image: 'https://images.unsplash.com/photo-1714150458873-715e134901a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXclMjBvZmZpY2V8ZW58MXx8fHwxNzcxMzYyODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Document analysis and intelligent contract management',
  },
];

export function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
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
            Industries
          </motion.div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            Trusted Across Sectors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering AI excellence to diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-sm"
              style={{ height: '400px' }}
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-accent/20"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl text-white mb-3 tracking-tight" style={{ fontWeight: 500 }}>
                    {industry.name}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0.7 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white/90 text-sm leading-relaxed"
                  >
                    {industry.description}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
