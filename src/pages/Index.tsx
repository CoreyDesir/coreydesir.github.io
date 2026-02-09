import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Accomplishments from "@/components/Accomplishments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Corey F. Stedman | Full Stack Product Designer & Systems Engineer</title>
        <meta 
          name="description" 
          content="Experienced professional specializing in Full Spectrum Product Design, Web3, Blockchain, IT Administration, and Systems Management. Patent holder and published author." 
        />
        <meta name="keywords" content="Corey Stedman, Systems Engineer, Web3, Blockchain, CTO, Product Design, Linux, DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <Hero />
        <Skills />
        <Experience />
        <Accomplishments />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
