import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';



export default function Projects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      description: "A premium residential complex with modern amenities, swimming pool, gym, and landscaped gardens. Features 200 apartments with 2-4 BHK configurations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      status: "Completed" as const,
      location: "Jaipur, Rajasthan",
      duration: "24 months",
      teamSize: 45,
      category: "Residential"
    },
    {
      id: 2,
      title: "Commercial Shopping Mall",
      description: "Multi-story shopping mall with retail spaces, food court, cinema, and parking facilities. Total built-up area of 500,000 sq ft.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      status: "In Progress" as const,
      location: "jaipur, Rajasthan",
      duration: "30 months",
      teamSize: 60,
      category: "Commercial"
    },
    {
      id: 3,
      title: "Modern Office Building",
      description: "State-of-the-art office building with smart building technology, energy-efficient systems, and modern workspace design.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      status: "Planning" as const,
      location: "jaipur, Rajasthan",
      duration: "18 months",
      teamSize: 35,
      category: "Commercial"
    },
    {
      id: 4,
      title: "Affordable Housing Project",
      description: "Government-approved affordable housing project with 500 units, community center, and green spaces for middle-income families.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      status: "Completed" as const,
      location: "jaipur, Rajasthan",
      duration: "36 months",
      teamSize: 80,
      category: "Residential"
    },
    {
      id: 5,
      title: "Industrial Warehouse Complex",
      description: "Large-scale industrial warehouse complex with loading docks, office spaces, and modern logistics facilities.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      status: "In Progress" as const,
      location: "jaipur, Rajasthan",
      duration: "12 months",
      teamSize: 25,
      category: "Industrial"
    },
    {
      id: 6,
      title: "Luxury Villa Development",
      description: "Exclusive villa development with 50 independent villas, private gardens, clubhouse, and premium amenities.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      status: "Planning" as const,
      location: "jaipur, Rajasthan",
      duration: "42 months",
      teamSize: 55,
      category: "Residential"
    },
    {
      id: 7,
      title: "Metro Station Construction",
      description: "Underground metro station with modern architecture, passenger amenities, and integrated commercial spaces.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      status: "In Progress" as const,
      location: "jaipur, Rajasthan",
      duration: "28 months",
      teamSize: 120,
      category: "Infrastructure"
    },
    {
      id: 8,
      title: "Hospital Complex",
      description: "Multi-specialty hospital with 300 beds, advanced medical equipment, emergency services, and parking facilities.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=300&fit=crop",
      status: "Completed" as const,
      location: "Hyderabad, Telangana",
      duration: "32 months",
      teamSize: 90,
      category: "Healthcare"
    },
    {
      id: 9,
      title: "Educational Institute Campus",
      description: "Modern educational campus with classrooms, laboratories, library, sports facilities, and student hostels.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop",
      status: "In Progress" as const,
      location: "Jaipur, Rajasthan",
      duration: "26 months",
      teamSize: 70,
      category: "Educational"
    },
    {
      id: 10,
      title: "Luxury Hotel Resort",
      description: "5-star hotel resort with 150 rooms, conference halls, spa, restaurants, and recreational facilities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
      status: "Planning" as const,
      location: "Udaipur, Rajasthan",
      duration: "38 months",
      teamSize: 85,
      category: "Hospitality"
    },
    {
      id: 11,
      title: "Smart City Infrastructure",
      description: "Comprehensive smart city project including roads, utilities, digital infrastructure, and public amenities.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=500&h=300&fit=crop",
      status: "In Progress" as const,
      location: "Ahmedabad, Gujarat",
      duration: "48 months",
      teamSize: 200,
      category: "Infrastructure"
    },
    {
      id: 12,
      title: "Sports Complex Stadium",
      description: "Multi-purpose sports stadium with seating for 25,000 spectators, athletic tracks, and training facilities.",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop",
      status: "Planning" as const,
      location: "Lucknow, Uttar Pradesh",
      duration: "40 months",
      teamSize: 150,
      category: "Sports"
    },
    {
      id: 13,
      title: "Green Building Office Complex",
      description: "Eco-friendly office complex with LEED certification, solar panels, rainwater harvesting, and energy-efficient systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      status: "Completed" as const,
      location: "Pune, Maharashtra",
      duration: "22 months",
      teamSize: 65,
      category: "Commercial"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleViewDetails = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Laudram</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => navigate('/projects')} className="text-blue-600 font-medium">Projects</button>
              <button onClick={() => navigate('/builder')} className="text-gray-700 hover:text-blue-600">Builder</button>
              <Button>Contact Us</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our portfolio of successful construction projects across residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter Projects:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Planning">Planning</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Industrial">Industrial</SelectItem>
                  <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Educational">Educational</SelectItem>
                  <SelectItem value="Hospitality">Hospitality</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredProjects.length} Projects Found
            </h2>
            <p className="text-gray-600">
              Showing {statusFilter !== 'all' ? statusFilter.toLowerCase() : 'all'} projects
              {categoryFilter !== 'all' && ` in ${categoryFilter.toLowerCase()} category`}
            </p>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Building2 className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and create something amazing together.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
