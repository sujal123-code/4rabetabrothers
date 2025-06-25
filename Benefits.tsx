import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, CreditCard, BarChart3, Globe, Headphones } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High Conversion Rates",
      description: "Proven affiliate programs with industry-leading conversion rates",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Monitor your performance and earnings with advanced analytics",
      color: "text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Fast Payments",
      description: "Weekly payouts with multiple payment methods available",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reporting tools to optimize your campaigns",
      color: "text-orange-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international markets and diverse audiences",
      color: "text-indigo-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated affiliate managers to help you succeed",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful affiliates who trust our platform for their marketing success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;