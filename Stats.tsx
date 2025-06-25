import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Award, TrendingUp } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.5M+",
      label: "Total Payouts",
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "15K+",
      label: "Active Affiliates",
      color: "text-blue-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "Avg. Commission",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Statistics
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that speak for our success and your potential
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="text-center p-8">
                <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
