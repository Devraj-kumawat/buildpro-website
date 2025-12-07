import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Square, MapPin, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Home {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'Rent' | 'Process';
  available: boolean;
}

interface HomeCardProps {
  home: Home;
  onViewDetails: (id: number) => void;
  onInquire: (id: number) => void;
}

export default function HomeCard({ home, onViewDetails, onInquire }: HomeCardProps) {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate(`/payment?homeId=${home.id}&type=${home.type.toLowerCase()}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={home.image} 
          alt={home.title}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${home.type === 'Rent' ? 'bg-blue-500' : 'bg-purple-500'} text-white`}>
          For {home.type}
        </Badge>
        {!home.available && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            Not Available
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg">{home.title}</CardTitle>
        <div className="flex items-center gap-1 text-xl font-bold text-green-600">
          <IndianRupee className="w-5 h-5" />
          <span>{home.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-gray-500">/{home.type === 'Rent' ? 'month' : 'total'}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-2">{home.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{home.location}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{home.bedrooms} Bed</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{home.bathrooms} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{home.area} sq ft</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          onClick={() => onViewDetails(home.id)}
          className="flex-1"
        >
          View Details
        </Button>
        {home.available ? (
          <Button 
            onClick={handlePayment}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            {home.type === 'Rent' ? 'Pay Rent' : 'Buy Now'}
          </Button>
        ) : (
          <Button 
            disabled
            className="flex-1"
          >
            Not Available
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}