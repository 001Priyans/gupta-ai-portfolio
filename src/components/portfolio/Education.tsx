import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface EducationProps {
  className?: string;
}

export function Education({ className }: EducationProps) {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics & Communication Engineering",
      institution: "Indian Institute of Information Technology, Guwahati",
      period: "2022 - 2026",
      location: "Guwahati, Assam",
      status: "Expected Graduation",
      gpa: "8.5/10",
      achievements: [
        "Relevant coursework in ML, AI, and Data Science",
        "Active member of Technical Society",
        "Participated in multiple hackathons and coding competitions"
      ]
    },
    {
      degree: "Intermediate (ISC)",
      field: "Physics, Chemistry, Mathematics",
      institution: "Higher Secondary School",
      period: "2021",
      location: "India",
      status: "Completed",
      gpa: "80%",
      achievements: [
        "Strong foundation in Mathematics and Physics",
        "Excellent performance in analytical subjects"
      ]
    },
    {
      degree: "High School (ICSE)",
      field: "Science Stream",
      institution: "Secondary School",
      period: "2019",
      location: "India",
      status: "Completed",
      gpa: "85%",
      achievements: [
        "Consistent academic performance",
        "Developed interest in computer science"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "In Progress"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      status: "In Progress"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford/Coursera",
      date: "2023",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className={cn('py-24 bg-gradient-subtle', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation with continuous learning and professional development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-md hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-professional-blue/10 rounded-lg mt-1">
                        <GraduationCap className="h-5 w-5 text-professional-blue-dark" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-professional-blue-dark">
                          {edu.field}
                        </CardDescription>
                        <CardDescription className="text-base">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-professional-amber" />
                        <span className="font-semibold text-professional-amber">
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                    
                    {edu.achievements && (
                      <div>
                        <h4 className="font-semibold mb-2">Key Highlights:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-md hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-professional-green/10 rounded-lg">
                      <Award className="h-5 w-5 text-professional-green" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                    <Badge variant={cert.status === "Completed" ? "default" : "secondary"}>
                      {cert.status}
                    </Badge>
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