import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Building2, ArrowLeft, MapPin, Calendar, Users, IndianRupee, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock project data (in real app, fetch from API based on id)
  const projectsData = {
    '1': {
      id: 1,
      title: "Luxury Residential Complex",
      description: "A premium residential complex with modern amenities, swimming pool, gym, and landscaped gardens. Features 200 apartments with 2-4 BHK configurations.",
      fullDescription: "This luxury residential complex represents the pinnacle of modern living in Mumbai. Spread across 15 acres, the project features 200 premium apartments ranging from 2BHK to 4BHK configurations. Each apartment is designed with contemporary architecture and premium finishes. The complex includes world-class amenities such as a swimming pool, fully equipped gymnasium, children's play area, landscaped gardens, and 24/7 security. The project also features rainwater harvesting, solar panels, and waste management systems, making it an eco-friendly development.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      status: "Completed",
      location: "Jaipur rajasthan",
      duration: "24 months",
      teamSize: 45,
      category: "Residential",
      budget: 50000000,
      progress: 100,
      startDate: "January 2022",
      endDate: "December 2023",
      client: "Mumbai Housing Development Corporation",
      architect: "Sharma & Associates",
      area: "15 acres",
      units: "200 apartments",
      features: [
        "Swimming Pool & Gym",
        "Landscaped Gardens",
        "24/7 Security",
        "Power Backup",
        "Rainwater Harvesting",
        "Solar Panels",
        "Waste Management",
        "Children's Play Area",
        "Community Hall",
        "Parking for 300 cars"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
      ]
    },
    '2': {
      id: 2,
      title: "Commercial Shopping Mall",
      description: "Multi-story shopping mall with retail spaces, food court, cinema, and parking facilities. Total built-up area of 500,000 sq ft.",
      fullDescription: "This state-of-the-art commercial shopping mall is designed to be the premier shopping destination in Delhi NCR. The 5-story structure spans 500,000 square feet and houses over 200 retail outlets, a multiplex cinema, food court with 15 restaurants, and entertainment zones. The mall features modern architecture with natural lighting, energy-efficient systems, and advanced fire safety measures. With parking for 1,000 vehicles and easy metro connectivity, it's positioned to serve over 50,000 visitors daily.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      status: "In Progress",
      location: "Delhi, NCR",
      duration: "30 months",
      teamSize: 60,
      category: "Commercial",
      budget: 80000000,
      progress: 65,
      startDate: "March 2023",
      endDate: "September 2025",
      client: "Delhi Commercial Ventures",
      architect: "Metro Design Studio",
      area: "500,000 sq ft",
      units: "200+ retail outlets",
      features: [
        "Multiplex Cinema",
        "Food Court",
        "Entertainment Zone",
        "1000 Car Parking",
        "Metro Connectivity",
        "Central Air Conditioning",
        "Fire Safety Systems",
        "Natural Lighting",
        "Escalators & Elevators",
        "24/7 Security"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&h=300&fit=crop"
      ]
    }
  };

  const project = projectsData[id as keyof typeof projectsData] || projectsData['1'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Planning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return CheckCircle;
      case 'In Progress': return Clock;
      case 'Planning': return AlertCircle;
      default: return Clock;
    }
  };

  const StatusIcon = getStatusIcon(project.status);

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="outline" onClick={() => navigate('/projects')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className={`${getStatusColor(project.status)} text-white`}>
                  <StatusIcon className="w-4 h-4 mr-1" />
                  {project.status}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{project.teamSize} Team Members</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <IndianRupee className="w-5 h-5" />
                <span>₹{(project.budget / 10000000).toFixed(1)}Cr Budget</span>
              </div>
            </div>

            {project.status === 'In Progress' && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Project Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Client</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Architect</h4>
                  <p className="text-gray-600">{project.architect}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Project Area</h4>
                  <p className="text-gray-600">{project.area}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Total Units</h4>
                  <p className="text-gray-600">{project.units}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Timeline</h4>
                  <p className="text-gray-600">{project.startDate} - {project.endDate}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card>
              <CardHeader>
                <CardTitle>Interested in Similar Project?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Get in touch with our team to discuss your construction requirements.
                </p>
                <div className="space-y-2">
                  <Button className="w-full">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}