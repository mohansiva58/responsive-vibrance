
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Animation for background
  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 20 - 10;
      
      if (heroRef.current) {
        heroRef.current.style.backgroundPosition = `${50 + x * 0.5}% ${50 + y * 0.5}%`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Preload image for optimal performance
  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000";
    
    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      img.onload = () => {
        if (imageRef.current) {
          imageRef.current.src = img.src;
          imageRef.current.style.opacity = "1";
          imageRef.current.style.transition = "opacity 0.5s ease-in-out";
        }
      };
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-r from-white via-rk-orange-light to-rk-blue-light bg-[length:200%_200%] transition-all duration-300"
      style={{ backgroundPosition: '50% 50%' }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]" ref={titleRef}>
            <div className="flex animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="px-4 py-1 bg-rk-orange-light text-rk-orange rounded-full text-sm font-semibold inline-flex items-center">
                #1 Company Registration Platform in India
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Start Your Business Journey with <span className="text-rk-orange">RegisterKaro</span>
            </h1>
            
            <p className="text-lg md:text-xl text-rk-gray max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} ref={subtitleRef}>
              From company registration to trademark protection, we handle all the legal paperwork so you can focus on building your business.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }} ref={ctaRef}>
              <Button className="btn-primary flex items-center gap-2 group">
                Get Started <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Talk to Expert
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-rk-gray-light flex items-center justify-center text-xs font-semibold">TG</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-rk-gray-light flex items-center justify-center text-xs font-semibold">MK</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-rk-gray-light flex items-center justify-center text-xs font-semibold">RS</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-rk-gray-light flex items-center justify-center text-xs font-semibold">+</div>
              </div>
              <div>
                <div className="font-semibold text-rk-dark">1000+ Entrepreneurs</div>
                <div className="text-sm text-rk-gray">Trust RegisterKaro</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rk-orange to-rk-blue rounded-2xl blur opacity-30 animate-pulse-soft"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                <img
                  ref={imageRef}
                  alt="Business professional using RegisterKaro services"
                  className="w-full h-auto rounded-lg object-cover aspect-[4/3] opacity-0"
                  style={{ transform: 'translateZ(0)' }}
                />
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px]">
                  <div className="text-sm font-semibold text-rk-dark mb-1">Fast Turnaround</div>
                  <div className="text-xs text-rk-gray">Get your company registered in as little as 7 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
