import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Building2, ArrowLeft, MapPin, Bed, Bath, Square, IndianRupee, CheckCircle, Phone, Mail, Calendar, Car, Wifi, Zap, Droplets, Shield } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function HomeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock home data (in real app, fetch from API based on id)
  const homesData = {
    '1': {
      id: 1,
      title: "Luxury 3BHK Apartment",
      description: "Spacious 3BHK apartment with modern amenities, balcony, and parking. Located in prime area with easy access to schools and hospitals.",
      fullDescription: "This luxury 3BHK apartment is located in the heart of Bandra, one of Mumbai's most prestigious neighborhoods. The apartment features contemporary design with premium finishes, spacious rooms with ample natural light, and a large balcony with city views. The building offers 24/7 security, power backup, and elevator access. The location provides easy access to shopping centers, restaurants, schools, and hospitals. Public transportation is readily available with bus stops and railway station within walking distance.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=400&fit=crop",
      price: 45000,
      location: "jaipur, Rajasthan",
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      type: "Rent",
      available: true,
      furnished: "Semi-Furnished",
      parking: "1 Covered",
      floor: "8th Floor",
      facing: "North-East",
      age: "5 years",
      deposit: 90000,
      maintenance: 3500,
      features: [
        "Modular Kitchen",
        "Air Conditioning",
        "Balcony with City View",
        "24/7 Security",
        "Power Backup",
        "Elevator Access",
        "Gym & Swimming Pool",
        "Children's Play Area",
        "Visitor Parking",
        "Water Supply 24/7"
      ],
      nearbyPlaces: [
        "Bandra Railway Station - 0.5 km",
        "Linking Road Shopping - 0.8 km",
        "Lilavati Hospital - 1.2 km",
        "St. Andrews School - 0.6 km",
        "Bandra-Kurla Complex - 3.5 km"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
      ],
      owner: {
        name: "Devraj kumawat",
        phone: "+91 9024722912",
        email: "Devraj@email.com"
      }
    },
    '2': {
      id: 2,
      title: "Modern 2BHK Villa",
      description: "Beautiful 2BHK independent villa with garden, parking, and modern kitchen. Perfect for small families looking for privacy.",
      fullDescription: "This modern 2BHK independent villa in Whitefield, Bangalore offers the perfect blend of comfort and privacy. Set in a quiet residential area, the villa features a private garden, covered parking, and contemporary interiors. The open-plan living area connects seamlessly with the modern kitchen, while both bedrooms are spacious with attached bathrooms. The property includes a small garden perfect for children to play and outdoor dining. Located in one of Bangalore's prime IT corridors, it offers excellent connectivity to major tech parks and shopping centers.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop",
      price: 8500000,
      location: "Whitefield, Bangalore",
      bedrooms: 2,
      bathrooms: 2,
      area: 1000,
      type: "Process",
      available: true,
      furnished: "Unfurnished",
      parking: "2 Covered",
      floor: "Ground Floor",
      facing: "East",
      age: "New Construction",
      deposit: 0,
      maintenance: 0,
      features: [
        "Private Garden",
        "Independent Villa",
        "Modern Kitchen",
        "Covered Parking",
        "Gated Community",
        "24/7 Security",
        "Power Backup",
        "Bore Well Water",
        "Solar Water Heater",
        "Intercom Facility"
      ],
      nearbyPlaces: [
        "ITPL Tech Park - 2.5 km",
        "Phoenix MarketCity - 3.2 km",
        "Columbia Asia Hospital - 1.8 km",
        "Ryan International School - 1.5 km",
        "Whitefield Railway Station - 4.0 km"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
      ],
      owner: {
        name: "Priya Reddy",
        phone: "+91 98765 43211",
        email: "priya.reddy@email.com"
      }
    }
  };

  const home = homesData[id as keyof typeof homesData] || homesData['1'];

  const handlePayment = () => {
    navigate(`/payment?homeId=${home.id}&type=${home.type.toLowerCase()}`);
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else {
      return `₹${price.toLocaleString('en-IN')}`;
    }
  };

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
              <button onClick={() => navigate('/builder')} className="text-gray-700 hover:text-blue-600">Builder</button>
              <Button>Contact Us</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="outline" onClick={() => navigate('/builder')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Homes
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <img 
              src={home.image} 
              alt={home.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className={`${home.type === 'Rent' ? 'bg-blue-500' : 'bg-purple-500'} text-white`}>
                  For {home.type}
                </Badge>
                <Badge className={home.available ? 'bg-green-500' : 'bg-red-500'}>
                  {home.available ? 'Available' : 'Not Available'}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{home.title}</h1>
              <div className="flex items-center gap-2 text-xl text-gray-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{home.location}</span>
              </div>
              <div className="flex items-center gap-1 text-3xl font-bold text-green-600 mb-4">
                <IndianRupee className="w-6 h-6" />
                <span>{formatPrice(home.price)}</span>
                <span className="text-lg text-gray-500">/{home.type === 'Rent' ? 'month' : 'total'}</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{home.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Bed className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{home.bedrooms}</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Bath className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{home.bathrooms}</div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Square className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{home.area}</div>
                <div className="text-sm text-gray-600">Sq Ft</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Car className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{home.parking}</div>
                <div className="text-sm text-gray-600">Parking</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handlePayment}
                className="flex-1 bg-green-600 hover:bg-green-700"
                disabled={!home.available}
              >
                {home.type === 'Rent' ? 'Pay Rent' : 'Buy Now'}
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Phone className="w-4 h-4 mr-2" />
                Contact Owner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Home Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Property Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{home.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Features & Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {home.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Places */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Places</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {home.nearbyPlaces.map((place, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">{place}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Property Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {home.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${home.title} - Image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property Info */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Furnished Status</h4>
                  <p className="text-gray-600">{home.furnished}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Floor</h4>
                  <p className="text-gray-600">{home.floor}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Facing</h4>
                  <p className="text-gray-600">{home.facing}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Property Age</h4>
                  <p className="text-gray-600">{home.age}</p>
                </div>
                {home.type === 'Rent' && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-gray-900">Security Deposit</h4>
                      <p className="text-gray-600">₹{home.deposit.toLocaleString('en-IN')}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-gray-900">Maintenance</h4>
                      <p className="text-gray-600">₹{home.maintenance.toLocaleString('en-IN')}/month</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Owner Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Owner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{home.owner.name}</h4>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{home.owner.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{home.owner.email}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Report Property
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Save to Favorites
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Share Property
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}