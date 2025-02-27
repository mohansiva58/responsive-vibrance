
import { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "RegisterKaro made setting up my private limited company a breeze. Their team guided me through every step, and I was impressed by their knowledge and professionalism.",
      author: "Rahul Sharma",
      position: "Founder & CEO",
      company: "TechSprint Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "The trademark registration process was quick and hassle-free with RegisterKaro. What could have been a complex legal procedure was handled efficiently by their expert team.",
      author: "Priya Malhotra",
      position: "Creative Director",
      company: "DesignHub Studios",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },
    {
      quote: "As a first-time entrepreneur, I was confused about GST registration. RegisterKaro not only helped me register but also provided valuable insights on tax compliance for my business.",
      author: "Vikram Reddy",
      position: "Managing Partner",
      company: "Organic Earth Foods",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      rating: 4
    },
    {
      quote: "I've used RegisterKaro for multiple services including company and FSSAI registration. Their consistent quality of service and attention to detail has made them my go-to for all legal requirements.",
      author: "Ananya Desai",
      position: "Chief Operations Officer",
      company: "QuickServe Logistics",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) observer.observe(titleRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      setAutoplay(false);
    }
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      setAutoplay(false);
    }
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <div className="inline-block px-4 py-1 bg-rk-orange-light text-rk-orange rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-rk-gray text-lg">
            Discover why businesses across India trust RegisterKaro for their registration and compliance needs.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-500",
                  Math.floor(index / 2) === Math.floor(activeIndex / 2) ? "block" : "hidden"
                )}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  active={index === activeIndex}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white border border-rk-gray-light flex items-center justify-center text-rk-dark hover:bg-rk-gray-light transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index * 2);
                    if (autoplayRef.current) {
                      clearInterval(autoplayRef.current);
                      setAutoplay(false);
                    }
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    Math.floor(activeIndex / 2) === index
                      ? "bg-rk-orange w-6"
                      : "bg-rk-gray-light hover:bg-rk-gray"
                  )}
                  aria-label={`Go to testimonial group ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-rk-gray-light flex items-center justify-center text-rk-dark hover:bg-rk-gray-light transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
