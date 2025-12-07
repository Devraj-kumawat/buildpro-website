import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Award, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      status: "Completed",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      title: "Commercial Shopping Mall",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      status: "In Progress",
      location: "Delhi, NCR"
    },
    {
      id: 3,
      title: "Modern Office Building",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      status: "Planning",
      location: "Bangalore, Karnataka"
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Construction Services",
      description: "Complete construction solutions from planning to execution with quality materials and skilled workforce."
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Professional project management ensuring timely delivery and budget optimization for all projects."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and compliance with all safety standards and building regulations."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Team" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Laduram</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => navigate('/projects')} className="text-gray-700 hover:text-blue-600">Projects</button>
              <button onClick={() => navigate('/builder')} className="text-gray-700 hover:text-blue-600">Builder</button>
              <Button>Contact Us</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  Premium Construction Services
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Building Dreams Into
                  <span className="text-blue-600"> Reality</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional construction services with 25+ years of experience. From residential complexes to commercial buildings, we deliver excellence in every project.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate('/projects')} className="bg-blue-600 hover:bg-blue-700">
                  View Our Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/builder')}>
                  Explore Homes
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" 
                alt="Construction Site"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600">ISO Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs and requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600">Showcasing our latest and most impressive construction projects.</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/projects')}>
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${
                    project.status === 'Completed' ? 'bg-green-500' : 
                    project.status === 'In Progress' ? 'bg-blue-500' : 'bg-yellow-500'
                  } text-white`}>
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => navigate('/projects')}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100">
              Get in touch with our expert team for a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Call Now: +91 9828478432
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Laduram </h3>
              </div>
              <p className="text-gray-400">
                Professional construction services with excellence and reliability.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => navigate('/')} className="block text-gray-400 hover:text-white">Home</button>
                <button onClick={() => navigate('/projects')} className="block text-gray-400 hover:text-white">Projects</button>
                <button onClick={() => navigate('/builder')} className="block text-gray-400 hover:text-white">Builder</button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Residential Construction</div>
                <div>Commercial Buildings</div>
                <div>Project Management</div>
                <div>Quality Assurance</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9828478432</span>
                  <span>+91 9024722912</span>
                  
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>laduram98@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jaipur Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Laduram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}