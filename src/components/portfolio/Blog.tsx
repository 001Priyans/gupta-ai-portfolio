import { useState } from 'react';
import { Calendar, Clock, Eye, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlogProps {
  className?: string;
}

export function Blog({ className }: BlogProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const blogPosts = [
    {
      title: "Understanding Time-Series Anomaly Detection in Industrial IoT",
      excerpt: "Deep dive into implementing real-time anomaly detection for industrial sensor networks using machine learning techniques.",
      date: "2025-01-10",
      readTime: "8 min read",
      views: 1240,
      tags: ["Industrial IoT", "Machine Learning", "Time-Series"],
      featured: true,
      slug: "time-series-anomaly-detection-iot"
    },
    {
      title: "Building Production-Ready ML Pipelines with TensorFlow",
      excerpt: "Best practices for deploying machine learning models in production environments with scalability and reliability.",
      date: "2025-01-05",
      readTime: "12 min read",
      views: 980,
      tags: ["Machine Learning", "TensorFlow", "Production"],
      featured: false,
      slug: "production-ml-pipelines-tensorflow"
    },
    {
      title: "NLP for E-commerce: Sentiment Analysis at Scale",
      excerpt: "How to implement efficient sentiment analysis for large-scale e-commerce platforms using modern NLP techniques.",
      date: "2024-12-28",
      readTime: "10 min read",
      views: 1520,
      tags: ["NLP", "Deep Learning", "E-commerce"],
      featured: true,
      slug: "nlp-ecommerce-sentiment-analysis"
    },
    {
      title: "AWS Infrastructure for ML Workloads",
      excerpt: "Comprehensive guide to setting up scalable AWS infrastructure for machine learning applications.",
      date: "2024-12-20",
      readTime: "15 min read",
      views: 756,
      tags: ["AWS", "Machine Learning", "Infrastructure"],
      featured: false,
      slug: "aws-infrastructure-ml-workloads"
    },
    {
      title: "Real-time Data Processing with Apache Kafka",
      excerpt: "Building robust real-time data processing pipelines for industrial applications using Apache Kafka.",
      date: "2024-12-15",
      readTime: "11 min read",
      views: 892,
      tags: ["Industrial IoT", "Data Processing", "Kafka"],
      featured: false,
      slug: "real-time-data-processing-kafka"
    },
    {
      title: "Deep Learning Model Optimization Techniques",
      excerpt: "Advanced techniques for optimizing deep learning models for better performance and reduced computational cost.",
      date: "2024-12-10",
      readTime: "14 min read",
      views: 1340,
      tags: ["Deep Learning", "Optimization", "Performance"],
      featured: true,
      slug: "deep-learning-model-optimization"
    }
  ];

  const tags = ["All", "Machine Learning", "Deep Learning", "NLP", "Industrial IoT", "AWS", "TensorFlow", "Production"];

  const filteredPosts = selectedTag && selectedTag !== "All" 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className={cn('py-24 bg-background', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Technical Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and learnings from AI/ML engineering, deep learning, and industrial IoT projects.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag === "All" ? null : tag)}
              className="text-sm"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Featured Posts</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="shadow-md hover:shadow-hover transition-shadow border-professional-blue/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-professional-blue">Featured</Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-professional-blue-dark transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">
            {featuredPosts.length > 0 ? 'Latest Posts' : 'All Posts'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Card key={index} className="shadow-md hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-professional-blue-dark transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">
                Want to stay updated?
              </h3>
              <p className="text-white/90 mb-6">
                Subscribe to my newsletter for the latest insights on AI/ML engineering, deep learning, and industrial IoT.
              </p>
              <Button variant="secondary" size="lg">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}