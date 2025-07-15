import { Code, Database, Cloud, Brain, Globe, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface SkillsProps {
  className?: string;
}

export function Skills({ className }: SkillsProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      description: "Core programming languages with production experience",
      skills: [
        { name: "Python", level: 95, years: "3+ years" },
        { name: "JavaScript", level: 85, years: "2+ years" },
        { name: "Java", level: 80, years: "2+ years" },
        { name: "C/C++", level: 75, years: "2+ years" },
        { name: "SQL", level: 85, years: "2+ years" },
        { name: "MATLAB", level: 70, years: "1+ years" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      description: "Machine learning frameworks and data science tools",
      skills: [
        { name: "TensorFlow", level: 90, years: "2+ years" },
        { name: "PyTorch", level: 85, years: "2+ years" },
        { name: "scikit-learn", level: 90, years: "2+ years" },
        { name: "Keras", level: 85, years: "2+ years" },
        { name: "OpenCV", level: 80, years: "1+ years" },
        { name: "NLTK", level: 85, years: "1+ years" },
        { name: "SpaCy", level: 80, years: "1+ years" },
        { name: "Transformers", level: 75, years: "1+ years" }
      ]
    },
    {
      title: "Web & Cloud Technologies",
      icon: Globe,
      description: "Full-stack development and cloud platforms",
      skills: [
        { name: "React.js", level: 85, years: "2+ years" },
        { name: "Flask", level: 90, years: "2+ years" },
        { name: "Django", level: 80, years: "1+ years" },
        { name: "AWS", level: 85, years: "2+ years" },
        { name: "Docker", level: 80, years: "1+ years" },
        { name: "Kubernetes", level: 70, years: "1+ years" },
        { name: "GitHub Actions", level: 75, years: "1+ years" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      description: "Database management and data storage solutions",
      skills: [
        { name: "PostgreSQL", level: 85, years: "2+ years" },
        { name: "MongoDB", level: 80, years: "1+ years" },
        { name: "Redis", level: 75, years: "1+ years" },
        { name: "Elasticsearch", level: 70, years: "1+ years" }
      ]
    },
    {
      title: "AWS Services",
      icon: Cloud,
      description: "Amazon Web Services for scalable applications",
      skills: [
        { name: "EC2", level: 85, years: "2+ years" },
        { name: "S3", level: 90, years: "2+ years" },
        { name: "Lambda", level: 80, years: "1+ years" },
        { name: "SageMaker", level: 75, years: "1+ years" }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      description: "Development workflow and productivity tools",
      skills: [
        { name: "Git", level: 90, years: "3+ years" },
        { name: "Linux", level: 85, years: "2+ years" },
        { name: "Jupyter", level: 90, years: "2+ years" },
        { name: "VS Code", level: 85, years: "3+ years" },
        { name: "Tableau", level: 75, years: "1+ years" }
      ]
    }
  ];

  const achievements = [
    {
      value: "94%",
      label: "ML Model Accuracy",
      description: "Achieved in production environment"
    },
    {
      value: "30%",
      label: "Cost Reduction",
      description: "In maintenance operations"
    },
    {
      value: "80%",
      label: "Process Automation",
      description: "Efficiency improvement"
    },
    {
      value: "25%",
      label: "Downtime Reduction",
      description: "Through predictive analytics"
    }
  ];

  const coursework = [
    "Machine Learning", "Deep Learning", "Natural Language Processing",
    "Data Analysis", "Cloud Computing", "Data Structures & Algorithms",
    "Operating Systems", "Database Management Systems", "Computer Networks"
  ];

  return (
    <section id="skills" className={cn('py-24 bg-background', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across AI/ML, full-stack development, and cloud technologies.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-hover transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-professional-blue-dark mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-primary mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-professional-blue/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-professional-blue-dark" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.years}</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coursework */}
        <div className="bg-accent/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {coursework.map((course, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}