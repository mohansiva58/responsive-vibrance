
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-4 bg-white shadow-md" : "py-6 bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rk-dark">RegisterKaro</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-rk-dark hover:text-rk-orange transition-colors duration-200"
                onClick={() => handleDropdown('company')}
              >
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={cn(
                "absolute top-full left-0 mt-2 min-w-[220px] bg-white rounded-lg shadow-lg p-4 transform origin-top transition-all duration-200 opacity-0 invisible",
                activeDropdown === 'company' && "opacity-100 visible"
              )}>
                <div className="grid gap-2">
                  <a href="#" className="block p-2 text-rk-dark hover:text-rk-orange hover:bg-rk-gray-light rounded-md transition-colors">
                    About Us
                  </a>
                  <a href="#" className="block p-2 text-rk-dark hover:text-rk-orange hover:bg-rk-gray-light rounded-md transition-colors">
                    Team
                  </a>
                  <a href="#" className="block p-2 text-rk-dark hover:text-rk-orange hover:bg-rk-gray-light rounded-md transition-colors">
                    Careers
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button 
                className="flex items-center text-rk-dark hover:text-rk-orange transition-colors duration-200"
                onClick={() => handleDropdown('services')}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={cn(
                "absolute top-full left-0 mt-2 min-w-[220px] bg-white rounded-lg shadow-lg p-4 transform origin-top transition-all duration-200 opacity-0 invisible",
                activeDropdown === 'services' && "opacity-100 visible"
              )}>
                <div className="grid gap-2">
                  <a href="#" className="block p-2 text-rk-dark hover:text-rk-orange hover:bg-rk-gray-light rounded-md transition-colors">
                    Company Registration
                  </a>
                  <a href="#" className="block p-2 text-rk-dark hover:text-rk-orange hover:bg-rk-gray-light rounded-md transition-colors">
                    Trademark Registration
                  </a>
                  <a href="#" className="block p-2 text-rk-dark hover:text-rk-orange hover:bg-rk-gray-light rounded-md transition-colors">
                    Copyright Registration
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="text-rk-dark hover:text-rk-orange transition-colors duration-200">
              Knowledge Center
            </a>
            <a href="#" className="text-rk-dark hover:text-rk-orange transition-colors duration-200">
              Blogs
            </a>
            <a href="#contact" className="text-rk-dark hover:text-rk-orange transition-colors duration-200">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-rk-dark hover:text-rk-orange transition-colors duration-200">
              Login
            </a>
            <a href="#" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-rk-dark p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-rk-dark">RegisterKaro</span>
            </a>
            <button 
              className="text-rk-dark p-2"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 text-lg text-rk-dark border-b border-gray-100"
                onClick={() => handleDropdown('mobile-company')}
              >
                Company <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", activeDropdown === 'mobile-company' && "rotate-180")} />
              </button>
              <div className={cn(
                "mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-200 max-h-0",
                activeDropdown === 'mobile-company' && "max-h-96"
              )}>
                <a href="#" className="block py-2 text-rk-dark">About Us</a>
                <a href="#" className="block py-2 text-rk-dark">Team</a>
                <a href="#" className="block py-2 text-rk-dark">Careers</a>
              </div>
            </div>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 text-lg text-rk-dark border-b border-gray-100"
                onClick={() => handleDropdown('mobile-services')}
              >
                Services <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", activeDropdown === 'mobile-services' && "rotate-180")} />
              </button>
              <div className={cn(
                "mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-200 max-h-0",
                activeDropdown === 'mobile-services' && "max-h-96"
              )}>
                <a href="#" className="block py-2 text-rk-dark">Company Registration</a>
                <a href="#" className="block py-2 text-rk-dark">Trademark Registration</a>
                <a href="#" className="block py-2 text-rk-dark">Copyright Registration</a>
              </div>
            </div>
            <a href="#" className="py-2 text-lg text-rk-dark border-b border-gray-100">
              Knowledge Center
            </a>
            <a href="#" className="py-2 text-lg text-rk-dark border-b border-gray-100">
              Blogs
            </a>
            <a href="#contact" className="py-2 text-lg text-rk-dark border-b border-gray-100">
              Contact
            </a>
            
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-center py-2 text-rk-dark border border-rk-gray rounded-lg">
                Login
              </a>
              <a href="#" className="btn-primary text-center">
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
