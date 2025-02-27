
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Clients = () => {
  const clientsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (clientsRef.current) observer.observe(clientsRef.current);
    
    return () => observer.disconnect();
  }, []);

  // This would typically be images of client logos
  const clientLogos = [
    { name: "TechCorp", letter: "T" },
    { name: "GlobalFirm", letter: "G" },
    { name: "InnovateSolutions", letter: "I" },
    { name: "VenturePartners", letter: "V" },
    { name: "NextLevel", letter: "N" },
    { name: "FutureTech", letter: "F" }
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={clientsRef} className="opacity-0">
          <div className="text-center mb-8">
            <p className="text-rk-gray font-medium">
              Trusted by businesses across India
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full bg-rk-gray-light rounded-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-rk-gray">{client.letter}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
