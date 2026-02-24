import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { ProcessDiagram } from './components/ProcessDiagram';
import { Industries } from './components/Industries';
import { Founders } from './components/Founders';
import { Consultation } from './components/Consultation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <ProcessDiagram />
        <Industries />
        <Founders />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
