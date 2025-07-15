import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import profileHeadshot from '@/assets/profile-headshot.jpg';
import workspaceHero from '@/assets/workspace-hero.jpg';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const socialLinks = [
    { icon: Mail, href: 'mailto:priyanshu.gupta22b@iiitg.ac.in', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/priyanshu-gupta-65119625a', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/001Priyans', label: 'GitHub' }
  ];

  return (
    <section className={cn('relative min-h-screen flex items-center bg-gradient-hero', className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={workspaceHero}
          alt="Professional workspace"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-professional-blue/10 text-professional-blue-dark rounded-full text-sm font-medium">
                Available for Full-Time Opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Priyanshu Gupta
              </h1>
              <h2 className="text-2xl sm:text-3xl text-professional-slate-dark font-medium">
                AI/ML Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Results-driven AI/ML Engineer with hands-on experience delivering production-ready systems (94% accuracy, 30% cost reduction). Skilled in scalable system design, real-time dashboards, and cross-functional collaboration.
              </p>
            </div>

            {/* Education Badge */}
            <div className="flex items-center space-x-2 text-professional-slate-dark">
              <div className="w-2 h-2 bg-professional-blue rounded-full"></div>
              <span className="font-medium">IIIT Guwahati</span>
              <span className="text-muted-foreground">•</span>
              <span>B.Tech Electronics & Comm.</span>
              <span className="text-muted-foreground">•</span>
              <span>Expected 2026</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm">Connect with me:</span>
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-accent hover:scale-110 transition-transform"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={profileHeadshot}
                  alt="Priyanshu Gupta - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-xs opacity-90">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}