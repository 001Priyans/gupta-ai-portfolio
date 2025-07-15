import { Calendar, MapPin, ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  className?: string;
}

export function Experience({ className }: ExperienceProps) {
  const experiences = [
    {
      title: "Research Intern",
      company: "IIIT Guwahati",
      period: "May 2025 - Jul 2025",
      location: "Guwahati, India",
      type: "Internship",
      description: "Built an end-to-end ML pipeline for industrial sensor fault detection with 10,000+ readings, achieving 94% accuracy and reducing downtime by 25%.",
      achievements: [
        "Developed time-series anomaly detection algorithms",
        "Implemented real-time monitoring dashboard",
        "Optimized model performance for production deployment",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["Python", "TensorFlow", "Time-series Analysis", "Flask", "PostgreSQL"]
    }
  ];

  const projects = [
    {
      title: "Industrial Sensor Fault Detection System",
      description: "End-to-end ML pipeline for real-time industrial sensor monitoring with anomaly detection and automated alerts.",
      achievements: [
        "Processed 10,000+ sensor readings with 94% accuracy",
        "Reduced system downtime by 25%",
        "Real-time dashboard with Flask + PostgreSQL",
        "Deployed on AWS with automated scaling"
      ],
      technologies: ["Python", "TensorFlow", "Time-series", "Flask", "PostgreSQL", "AWS"],
      demoUrl: "https://sensor-demo.example.com",
      githubUrl: "https://github.com/001Priyans/sensor-fault-detection",
      featured: true
    },
    {
      title: "E-commerce Review Analytics Platform",
      description: "Comprehensive sentiment analysis platform for e-commerce reviews with automated insights and trend detection.",
      achievements: [
        "Scraped 50,000+ Myntra product reviews",
        "Achieved 88% sentiment classification accuracy",
        "Built interactive Tableau dashboard",
        "Automated daily trend reports"
      ],
      technologies: ["Python", "NLTK", "SpaCy", "Scrapy", "Tableau", "MongoDB"],
      demoUrl: "https://review-analytics.example.com",
      githubUrl: "https://github.com/001Priyans/review-analytics",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "Full-stack portfolio website with modern design, responsive layout, and automated deployment pipeline.",
      achievements: [
        "Built with React.js and Node.js",
        "Deployed on AWS EC2 with auto-scaling",
        "CI/CD pipeline with GitHub Actions",
        "SEO optimized with 95+ Lighthouse score"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS EC2", "GitHub Actions"],
      demoUrl: "https://priyanshu-portfolio.example.com",
      githubUrl: "https://github.com/001Priyans/portfolio",
      featured: false
    }
  ];

  return (
    <section id="experience" className={cn('py-24 bg-gradient-subtle', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Experience & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and key projects demonstrating expertise in AI/ML engineering and full-stack development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-md hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-professional-blue-dark">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Badge variant="secondary" className="mb-2">{exp.type}</Badge>
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">Key Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className={cn(
                "shadow-md hover:shadow-hover transition-shadow",
                project.featured && "border-professional-blue"
              )}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge className="mt-1 bg-professional-blue">Featured</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}