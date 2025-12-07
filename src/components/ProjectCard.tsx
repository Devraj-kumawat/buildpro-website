import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  location: string;
  duration: string;
  teamSize: number;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (id: number) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Planning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getStatusColor(project.status)} text-white`}>
          {project.status}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <Badge variant="outline" className="w-fit">{project.category}</Badge>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{project.teamSize} Team Members</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={() => onViewDetails(project.id)}
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}