import logo from '@/assets/d50e9618a68b060f0064743d02a7fdb0c132f8d8.png';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="ZENITH" className="h-8 mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              AI-driven. Human-focused.
              <br />
              Custom AI agents and automation systems for enterprise transformation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 tracking-tight" style={{ fontWeight: 500 }}>
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>AI Agents</li>
              <li>Custom Development</li>
              <li>AI Implementation</li>
              <li>Training & Enablement</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 tracking-tight" style={{ fontWeight: 500 }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Warsaw, Poland</li>
              <li>Dubai, UAE</li>
              <li>contact@zenith-ai.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} ZENITH. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
