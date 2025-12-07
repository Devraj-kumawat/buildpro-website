import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Home, MapPin, Bed, Bath, Square, IndianRupee, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Builder() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Bandra",
      type: "Villa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop",
      price: "₹5.5 Cr",
      location: "Bandra West, Mumbai",
      bedrooms: 4,
      bathrooms: 4,
      area: "3500 sq.ft",
      status: "Ready to Move"
    },
    {
      id: 2,
      title: "Modern Apartment",
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      price: "₹1.8 Cr",
      location: "Powai, Mumbai",
      bedrooms: 3,
      bathrooms: 2,
      area: "1800 sq.ft",
      status: "Under Construction"
    },
    {
      id: 3,
      title: "Penthouse Suite",
      type: "Penthouse",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop",
      price: "₹8.2 Cr",
      location: "Worli, Mumbai",
      bedrooms: 5,
      bathrooms: 5,
      area: "5000 sq.ft",
      status: "Ready to Move"
    },
    {
      id: 4,
      title: "Cozy Studio",
      type: "Studio",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
      price: "₹75 L",
      location: "Andheri East, Mumbai",
      bedrooms: 1,
      bathrooms: 1,
      area: "600 sq.ft",
      status: "Ready to Move"
    },
    {
      id: 5,
      title: "Family Duplex",
      type: "Duplex",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
      price: "₹3.2 Cr",
      location: "Juhu, Mumbai",
      bedrooms: 4,
      bathrooms: 3,
      area: "2800 sq.ft",
      status: "Under Construction"
    },
    {
      id: 6,
      title: "Spacious Flat",
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
      price: "₹2.5 Cr",
      location: "Lower Parel, Mumbai",
      bedrooms: 3,
      bathrooms: 3,
      area: "2200 sq.ft",
      status: "Ready to Move"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Laduram kumawat</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => navigate('/projects')} className="text-gray-700 hover:text-blue-600">Projects</button>
              <button onClick={() => navigate('/builder')} className="text-blue-600 font-semibold">Builder</button>
              <Button>Contact Us</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
            <p className="text-xl text-blue-100">
              Explore premium properties across Mumbai with BuildPro's curated collection
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-2xl p-6 mt-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search by location, property name..."
                      className="pl-10 h-12"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-1">Under ₹1 Cr</SelectItem>
                    <SelectItem value="1-3">₹1 - 3 Cr</SelectItem>
                    <SelectItem value="3-5">₹3 - 5 Cr</SelectItem>
                    <SelectItem value="5+">Above ₹5 Cr</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Properties</h2>
              <p className="text-gray-600 mt-2">{properties.length} properties found</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => navigate(`/home/${property.id}`)}>
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${
                    property.status === 'Ready to Move' ? 'bg-green-500' : 'bg-yellow-500'
                  } text-white`}>
                    {property.status}
                  </Badge>
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                    {property.type}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{property.title}</CardTitle>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-5 h-5 text-blue-600" />
                      <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-blue-100">
              Our team can help you find the perfect property that matches your requirements.
            </p>
            <Button size="lg" variant="secondary">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">BuildPro</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home.
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
              <h4 className="text-lg font-semibold">Property Types</h4>
              <div className="space-y-2 text-gray-400">
                <div>Apartments</div>
                <div>Villas</div>
                <div>Penthouses</div>
                <div>Duplexes</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>+91 98765 43210</div>
                <div>info@buildpro.com</div>
                <div>Mumbai, Maharashtra</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}