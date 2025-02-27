
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  active: boolean;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  image, 
  rating, 
  active 
}: TestimonialCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={cn(
      "bg-white rounded-xl p-8 shadow-lg transition-all duration-500 flex flex-col h-full",
      active ? "opacity-100 translate-y-0 scale-100" : "opacity-50 scale-95"
    )}>
      <div className="flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                "w-5 h-5 mr-1",
                i < rating ? "text-yellow-400" : "text-gray-300"
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          ))}
        </div>
        
        <blockquote className="text-rk-dark text-lg mb-6 italic">
          "{quote}"
        </blockquote>
      </div>
      
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
          <div className={cn("absolute inset-0 bg-rk-gray-light animate-pulse", loaded && "hidden")}></div>
          <img
            ref={imgRef}
            src={image}
            alt={author}
            className={cn("w-full h-full object-cover rounded-full", !loaded && "opacity-0")}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div>
          <div className="font-semibold text-rk-dark">{author}</div>
          <div className="text-sm text-rk-gray">{position}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
