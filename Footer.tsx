import { ExternalLink, Mail, MessageCircle, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Affiliate Hub
            </h3>
            <p className="text-gray-300 mb-4">
              Your gateway to premium affiliate opportunities and sustainable online income.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#opportunities" className="hover:text-blue-400 transition-colors">Opportunities</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <p className="text-gray-300 mb-4">
              Ready to start earning? Join our top-performing affiliate program today.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full"
              onClick={() => window.open('https://4rabet.partner.alanbase.com/registration?ref=259546', '_blank')}
            >
              Join Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Affiliate Ventures Hub. All rights reserved. | Referral Partner ID: 259546
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;