
import { useRef } from 'react';
import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: "Company Registration",
      description: "Register your business as Private Limited, LLP, OPC, or Partnership firm with our hassle-free service.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M13 13h4"/><path d="M13 17h4"/></svg>,
      link: "#"
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand identity and intellectual property with our comprehensive trademark registration services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>,
      link: "#"
    },
    {
      title: "GST Registration",
      description: "Navigate the complexities of GST with our expert guidance and quick registration service.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>,
      link: "#"
    },
    {
      title: "Copyright Registration",
      description: "Secure your creative works with legal protection through our streamlined copyright registration process.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M13.9 9.5a3 3 0 1 0-1.1 5"/><path d="M9 12h6"/></svg>,
      link: "#"
    },
    {
      title: "Patent Registration",
      description: "Safeguard your inventions and innovative ideas with our comprehensive patent filing services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>,
      link: "#"
    },
    {
      title: "FSSAI Registration",
      description: "Obtain food business licenses and certifications with our specialized FSSAI registration services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>,
      link: "#"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-rk-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-rk-blue-light text-rk-blue rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Business Registration Services
          </h2>
          <p className="text-rk-gray text-lg">
            From startups to established businesses, we provide a range of legal services to protect and formalize your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <Button className="btn-primary inline-flex items-center gap-2 group">
            View All Services <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
