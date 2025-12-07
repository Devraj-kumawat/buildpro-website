import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Building2, CreditCard, Smartphone, Wallet, Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const homeId = searchParams.get('homeId');
  const type = searchParams.get('type') || 'rent';
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentForm, setPaymentForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mock home data (in real app, fetch from API)
  const homeData = {
    id: homeId || '1',
    title: "Luxury 3BHK Apartment",
    location: "jaipur rajasthan",
    price: type === 'rent' ? 45000 : 8500000,
    type: type,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
  };

  const handleInputChange = (field: string, value: string) => {
    setPaymentForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 3000);
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

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your payment for {homeData.title} has been processed successfully.
            </p>
            <div className="space-y-3">
              <Button onClick={() => navigate('/builder')} className="w-full">
                Back to Homes
              </Button>
              <Button variant="outline" onClick={() => navigate('/')} className="w-full">
                Go to Homepage
              </Button>
            </div>
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
              <h1 className="text-2xl font-bold text-gray-900">Laduram</h1>
            </div>
            <Button variant="outline" onClick={() => navigate('/builder')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homes
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Payment</h1>
            <p className="text-gray-600">Complete your payment securely with our encrypted payment system</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={paymentForm.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={paymentForm.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={paymentForm.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address *</Label>
                          <Input
                            id="address"
                            value={paymentForm.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="Enter your address"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Payment Method Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Payment Method</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <Button
                          type="button"
                          variant={paymentMethod === 'card' ? 'default' : 'outline'}
                          onClick={() => setPaymentMethod('card')}
                          className="flex flex-col items-center p-4 h-auto"
                        >
                          <CreditCard className="w-6 h-6 mb-2" />
                          <span>Card</span>
                        </Button>
                        <Button
                          type="button"
                          variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                          onClick={() => setPaymentMethod('upi')}
                          className="flex flex-col items-center p-4 h-auto"
                        >
                          <Smartphone className="w-6 h-6 mb-2" />
                          <span>UPI</span>
                        </Button>
                        <Button
                          type="button"
                          variant={paymentMethod === 'wallet' ? 'default' : 'outline'}
                          onClick={() => setPaymentMethod('wallet')}
                          className="flex flex-col items-center p-4 h-auto"
                        >
                          <Wallet className="w-6 h-6 mb-2" />
                          <span>Wallet</span>
                        </Button>
                      </div>
                    </div>

                    {/* Payment Method Forms */}
                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold">Card Details</h4>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            value={paymentForm.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={paymentForm.expiryDate}
                              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={paymentForm.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value)}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold">UPI Details</h4>
                        <div className="space-y-2">
                          <Label htmlFor="upiId">UPI ID *</Label>
                          <Input
                            id="upiId"
                            value={paymentForm.upiId}
                            onChange={(e) => handleInputChange('upiId', e.target.value)}
                            placeholder="yourname@paytm"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'wallet' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold">Select Wallet</h4>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose wallet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paytm">Paytm</SelectItem>
                            <SelectItem value="phonepe">PhonePe</SelectItem>
                            <SelectItem value="googlepay">Google Pay</SelectItem>
                            <SelectItem value="amazonpay">Amazon Pay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-blue-800">
                        Your payment information is encrypted and secure
                      </span>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing Payment...' : `Pay ${formatPrice(homeData.price)}`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <img 
                      src={homeData.image} 
                      alt={homeData.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{homeData.title}</h4>
                      <p className="text-sm text-gray-600">{homeData.location}</p>
                      <Badge className={homeData.type === 'rent' ? 'bg-blue-500' : 'bg-purple-500'}>
                        For {homeData.type === 'rent' ? 'Rent' : 'Sale'}
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Property {homeData.type === 'rent' ? 'Rent' : 'Price'}</span>
                      <span>{formatPrice(homeData.price)}</span>
                    </div>
                    {homeData.type === 'rent' && (
                      <div className="flex justify-between">
                        <span>Security Deposit</span>
                        <span>₹{(homeData.price * 2).toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span>₹{Math.round(homeData.price * 0.02).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (18%)</span>
                      <span>₹{Math.round(homeData.price * 0.18).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>
                      {formatPrice(
                        homeData.price + 
                        (homeData.type === 'rent' ? homeData.price * 2 : 0) + 
                        Math.round(homeData.price * 0.02) + 
                        Math.round(homeData.price * 0.18)
                      )}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Secure payment processing</p>
                    <p>• 100% refund guarantee</p>
                    <p>• 24/7 customer support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}