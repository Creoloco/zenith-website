import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

export function Consultation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    try {
      const res = await fetch('https://formspree.io/f/xkodqlqj', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
    <section id="consultation" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,102,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 bg-accent/10 text-accent text-sm tracking-tight rounded-full"
          >
            Get Started
          </motion.div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            Schedule a Free 30-Minute
            <br />
            Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discuss your AI transformation journey with our experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-sm p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 tracking-tight" style={{ fontWeight: 500 }}>Locations</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Warsaw, Poland</p>
              <p>Dubai, UAE</p>
              <p>Remote Globally</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-sm p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 tracking-tight" style={{ fontWeight: 500 }}>Engagement Models</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Project-based</p>
              <p>Retainer</p>
              <p>Revenue-share</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-sm p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 tracking-tight" style={{ fontWeight: 500 }}>Consultation</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>30 minutes</p>
              <p>Free of charge</p>
              <p>No obligations</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card border border-border rounded-sm p-8 md:p-12"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option>Select an industry</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Retail</option>
                  <option>Legal</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Tell us about your AI needs
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                placeholder="Describe your challenges and objectives..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground rounded-sm transition-all duration-300 hover:bg-primary/90"
            >
              {status === 'sending' ? 'Sending…' : 'Request Consultation'}
            </motion.button>

            {status === 'success' && (
              <p className="text-sm text-accent">Thank you! Your request has been sent. We'll be in touch shortly.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
