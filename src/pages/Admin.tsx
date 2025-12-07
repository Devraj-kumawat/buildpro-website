import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, IndianRupee, Plus, Edit, Trash2, Eye, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  // Mock data for admin dashboard
  const [projects, setProjects] = useState([
    { id: 1, title: "Luxury Residential Complex", status: "Completed", budget: 50000000, progress: 100 },
    { id: 2, title: "Commercial Shopping Mall", status: "In Progress", budget: 80000000, progress: 65 },
    { id: 3, title: "Modern Office Building", status: "Planning", budget: 60000000, progress: 15 }
  ]);

  const [homes, setHomes] = useState([
    { id: 1, title: "Luxury 3BHK Apartment", type: "Rent", price: 45000, status: "Available" },
    { id: 2, title: "Modern 2BHK Villa", type: "Process", price: 8500000, status: "Available" },
    { id: 3, title: "Premium 4BHK Penthouse", type: "Rent", price: 85000, status: "Rented" }
  ]);

  const [payments, setPayments] = useState([
    { id: 1, homeTitle: "Luxury 3BHK Apartment", amount: 45000, date: "2024-11-01", status: "Paid", type: "Rent" },
    { id: 2, homeTitle: "Modern 2BHK Villa", amount: 850000, date: "2024-10-28", status: "Pending", type: "Booking" },
    { id: 3, homeTitle: "Premium 4BHK Penthouse", amount: 85000, date: "2024-10-25", status: "Paid", type: "Rent" }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication (in real app, use proper authentication)
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials! Use username: admin, password: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginForm({ username: '', password: '' });
  };

  const stats = [
    { title: "Total Projects", value: projects.length, icon: Building2, color: "text-blue-600" },
    { title: "Active Homes", value: homes.filter(h => h.status === 'Available').length, icon: Users, color: "text-green-600" },
    { title: "Monthly Revenue", value: "₹12.5L", icon: IndianRupee, color: "text-purple-600" },
    { title: "Pending Payments", value: payments.filter(p => p.status === 'Pending').length, icon: IndianRupee, color: "text-red-600" }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold">Laduram Admin</h1>
            </div>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-sm text-gray-500 text-center">
                Demo credentials: admin / admin123
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Laduram Admin</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                <Eye className="w-4 h-4 mr-2" />
                View Site
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-6">
                <div className={`p-2 rounded-lg bg-gray-100 mr-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="homes">Homes</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="add-new">Add New</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className={
                            project.status === 'Completed' ? 'bg-green-500' :
                            project.status === 'In Progress' ? 'bg-blue-500' : 'bg-yellow-500'
                          }>
                            {project.status}
                          </Badge>
                          <span className="text-sm text-gray-600">
                            Budget: ₹{(project.budget / 10000000).toFixed(1)}Cr
                          </span>
                          <span className="text-sm text-gray-600">
                            Progress: {project.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Homes Tab */}
          <TabsContent value="homes">
            <Card>
              <CardHeader>
                <CardTitle>Manage Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {homes.map((home) => (
                    <div key={home.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{home.title}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className={home.type === 'Rent' ? 'bg-blue-500' : 'bg-purple-500'}>
                            For {home.type}
                          </Badge>
                          <Badge className={home.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}>
                            {home.status}
                          </Badge>
                          <span className="text-sm text-gray-600">
                            ₹{home.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{payment.homeTitle}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className={payment.type === 'Rent' ? 'bg-blue-500' : 'bg-purple-500'}>
                            {payment.type}
                          </Badge>
                          <Badge className={payment.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'}>
                            {payment.status}
                          </Badge>
                          <span className="text-sm text-gray-600">
                            ₹{payment.amount.toLocaleString('en-IN')}
                          </span>
                          <span className="text-sm text-gray-600">
                            {payment.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {payment.status === 'Pending' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Mark Paid
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add New Tab */}
          <TabsContent value="add-new">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Project */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Project Title</Label>
                    <Input placeholder="Enter project title" />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Enter project description" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="planning">Planning</SelectItem>
                          <SelectItem value="progress">In Progress</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget (₹)</Label>
                      <Input type="number" placeholder="Enter budget" />
                    </div>
                  </div>
                  <Button className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </CardContent>
              </Card>

              {/* Add Home */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Home</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Home Title</Label>
                    <Input placeholder="Enter home title" />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Enter home description" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rent">For Rent</SelectItem>
                          <SelectItem value="process">For Sale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Price (₹)</Label>
                      <Input type="number" placeholder="Enter price" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Bedrooms</Label>
                      <Input type="number" placeholder="BHK" />
                    </div>
                    <div className="space-y-2">
                      <Label>Bathrooms</Label>
                      <Input type="number" placeholder="Bath" />
                    </div>
                    <div className="space-y-2">
                      <Label>Area (sq ft)</Label>
                      <Input type="number" placeholder="Area" />
                    </div>
                  </div>
                  <Button className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Home
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}