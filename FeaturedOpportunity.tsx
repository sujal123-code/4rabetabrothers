import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, DollarSign, Users, Shield } from "lucide-react";

const FeaturedOpportunity = () => {
  return (
    <section id="opportunities" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium gaming affiliate program with exceptional earning potential
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold mb-2">4rabet</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    Premium Sports Betting & Casino Platform
                  </CardDescription>
                </div>
                <Badge className="bg-yellow-500 text-black font-bold px-4 py-2 text-lg">
                  HOT DEAL
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-bold text-lg">High Commission Rates</h3>
                      <p className="text-gray-600">Up to 45% revenue share</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-bold text-lg">Growing User Base</h3>
                      <p className="text-gray-600">Millions of active users</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-lg">Trusted Platform</h3>
                      <p className="text-gray-600">Licensed & regulated</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Potential Earnings</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Active Users:</span>
                        <span className="font-bold">$2,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Top Affiliates Earn:</span>
                        <span className="font-bold text-green-600">$10,000+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Zap className="h-8 w-8 text-yellow-600" />
                    <div>
                      <h3 className="font-bold text-lg">Quick Setup</h3>
                      <p className="text-gray-600">Start earning in minutes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://4rabet.partner.alanbase.com/registration?ref=259546', '_blank')}
                >
                  Join 4rabet Partnership
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Referral ID: 259546 | Join thousands of successful affiliates
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunity;
