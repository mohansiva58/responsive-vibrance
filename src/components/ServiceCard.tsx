
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, link, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl p-6 shadow-md overflow-hidden relative transition-all duration-300",
        isHovered ? "shadow-xl transform -translate-y-2" : "",
        "opacity-0"
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rk-orange to-rk-blue transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
      
      <div className="flex flex-col h-full">
        <div className={cn(
          "w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6 transition-all duration-300",
          isHovered ? "bg-rk-orange" : "bg-rk-blue"
        )}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <p className="text-rk-gray mb-6 flex-grow">{description}</p>
        
        <a 
          href={link}
          className={cn(
            "flex items-center gap-2 font-medium group transition-colors duration-300",
            isHovered ? "text-rk-orange" : "text-rk-blue"
          )}
        >
          Learn More 
          <ArrowRight className={cn(
            "h-4 w-4 transition-transform duration-300",
            isHovered ? "transform translate-x-1" : ""
          )} />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
