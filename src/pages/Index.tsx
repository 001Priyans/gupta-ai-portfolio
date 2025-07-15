import { useEffect } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { Experience } from '@/components/portfolio/Experience';
import { Skills } from '@/components/portfolio/Skills';
import { Education } from '@/components/portfolio/Education';
import { Blog } from '@/components/portfolio/Blog';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About/Professional Summary - embedded in Hero */}
        
        {/* Experience & Projects */}
        <Experience />
        
        {/* Education */}
        <Education />
        
        {/* Technical Skills */}
        <Skills />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
