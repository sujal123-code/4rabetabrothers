import { Button } from "@/components/ui/button";
import { ExternalLink, Star, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-12 w-12 mr-3 text-yellow-300" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Affiliate Ventures Hub
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Unlock premium earning opportunities with our curated affiliate partnerships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-yellow-300">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-2 text-white">Trusted by 10K+ affiliates</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Opportunities
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
