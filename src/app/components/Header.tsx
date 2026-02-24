import { motion } from 'motion/react';
import logo from '@/assets/d50e9618a68b060f0064743d02a7fdb0c132f8d8.png';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <img src={logo} alt="ZENITH" className="h-10" />
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('solutions')}
            className="text-sm tracking-tight text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-sm tracking-tight text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection('founders')}
            className="text-sm tracking-tight text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Leadership
          </button>
          <button
            onClick={() => scrollToSection('consultation')}
            className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-tight hover:bg-primary/90 transition-all duration-300 rounded-sm"
          >
            Get Started
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
