mport Header from "@/components/Header";
import FeaturedOpportunity from "@/components/FeaturedOpportunity";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FeaturedOpportunity />
      <Benefits />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;