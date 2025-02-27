
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Branch {
  city: string;
  address: string;
  phone: string;
  email: string;
}

const BranchesMap = () => {
  const [activeCity, setActiveCity] = useState("Delhi");
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (mapRef.current) observer.observe(mapRef.current);
    
    return () => observer.disconnect();
  }, []);

  const branches: Record<string, Branch> = {
    "Delhi": {
      city: "Delhi",
      address: "A-167, Sector 63, Noida, Delhi NCR",
      phone: "+91 9876543210",
      email: "delhi@registerkaro.in"
    },
    "Mumbai": {
      city: "Mumbai",
      address: "Unit 42, Andheri East, Mumbai, Maharashtra",
      phone: "+91 9876543211",
      email: "mumbai@registerkaro.in"
    },
    "Bangalore": {
      city: "Bangalore",
      address: "5th Floor, Tech Park, Koramangala, Bangalore",
      phone: "+91 9876543212",
      email: "bangalore@registerkaro.in"
    },
    "Chennai": {
      city: "Chennai",
      address: "Plot 123, Anna Salai, Chennai, Tamil Nadu",
      phone: "+91 9876543213",
      email: "chennai@registerkaro.in"
    },
    "Hyderabad": {
      city: "Hyderabad",
      address: "Building 7, HITEC City, Hyderabad, Telangana",
      phone: "+91 9876543214",
      email: "hyderabad@registerkaro.in"
    }
  };

  return (
    <section id="branches" className="py-16 md:py-24 bg-rk-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-rk-blue-light text-rk-blue rounded-full text-sm font-semibold mb-4">
            Our Offices
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Us Across India
          </h2>
          <p className="text-rk-gray text-lg">
            With offices in major cities, we're always close to help with your business registration needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            {Object.keys(branches).map((city) => (
              <div
                key={city}
                className={cn(
                  "bg-white p-6 rounded-xl cursor-pointer transition-all duration-300",
                  activeCity === city
                    ? "shadow-lg border-l-4 border-rk-orange"
                    : "shadow hover:shadow-md"
                )}
                onClick={() => setActiveCity(city)}
              >
                <h3 className="text-xl font-semibold mb-4">{city}</h3>
                {activeCity === city && (
                  <div className="space-y-2 animate-fade-in">
                    <p className="text-rk-gray">{branches[city].address}</p>
                    <p className="text-rk-dark font-medium">{branches[city].phone}</p>
                    <p className="text-rk-blue">{branches[city].email}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div ref={mapRef} className="lg:col-span-8 rounded-xl overflow-hidden h-[400px] md:h-[500px] relative bg-white shadow-lg order-1 lg:order-2 opacity-0">
            <div className="absolute inset-0 bg-rk-gray-light opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl text-rk-gray font-medium text-center p-4">
                Interactive Map<br/>
                <span className="text-sm">(Map integration would be here in the actual implementation)</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">RegisterKaro {activeCity} Office</h3>
              <p className="text-rk-gray">{branches[activeCity].address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesMap;
