
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-rk-orange-light text-rk-orange rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why RegisterKaro is the Best Choice for Your Business
            </h2>
            <p className="text-rk-gray text-lg">
              We provide comprehensive company registration services with expert guidance every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-rk-orange-light flex items-center justify-center text-rk-orange mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Legal Team</h3>
              <p className="text-rk-gray">Our team consists of experienced legal professionals who specialize in business registrations and compliance.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-rk-blue-light flex items-center justify-center text-rk-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Turnaround</h3>
              <p className="text-rk-gray">We understand the value of time in business. Our streamlined processes ensure fast registration with minimal delays.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-rk-orange-light flex items-center justify-center text-rk-orange mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
              <p className="text-rk-gray">From initial consultation to post-registration compliance, we provide complete support throughout your business journey.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-rk-blue-light flex items-center justify-center text-rk-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-rk-gray">No hidden costs or surprise fees. We believe in complete transparency in our service pricing and deliverables.</p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-rk-orange-light flex items-center justify-center text-rk-orange mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Documentation</h3>
              <p className="text-rk-gray">Our digital-first approach ensures all your documents are securely stored and easily accessible when needed.</p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-rk-blue-light flex items-center justify-center text-rk-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="12" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-rk-gray">Get personalized attention with a dedicated relationship manager assigned to handle your registration process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-rk-blue-light text-rk-blue rounded-full text-sm font-semibold mb-4">
              Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How RegisterKaro Works
            </h2>
            <p className="text-rk-gray text-lg">
              We've simplified the business registration process into four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-rk-orange flex items-center justify-center text-white font-bold text-lg">1</div>
                <h3 className="text-xl font-semibold mb-4 mt-4">Consultation</h3>
                <p className="text-rk-gray">Schedule a free consultation with our experts to discuss your business needs and goals.</p>
              </div>
              {/* Desktop connector line */}
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-rk-orange to-transparent transform -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-rk-blue flex items-center justify-center text-white font-bold text-lg">2</div>
                <h3 className="text-xl font-semibold mb-4 mt-4">Documentation</h3>
                <p className="text-rk-gray">Submit required documents through our secure portal. We'll guide you on what's needed.</p>
              </div>
              {/* Desktop connector line */}
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-rk-blue to-transparent transform -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-rk-orange flex items-center justify-center text-white font-bold text-lg">3</div>
                <h3 className="text-xl font-semibold mb-4 mt-4">Processing</h3>
                <p className="text-rk-gray">We handle the entire filing process with government authorities on your behalf.</p>
              </div>
              {/* Desktop connector line */}
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-rk-orange to-transparent transform -translate-y-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-rk-blue flex items-center justify-center text-white font-bold text-lg">4</div>
                <h3 className="text-xl font-semibold mb-4 mt-4">Completion</h3>
                <p className="text-rk-gray">Receive your registration documents and begin operations with ongoing support from our team.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary inline-flex items-center gap-2 group">
              Get Started <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rk-blue to-rk-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-200 text-lg">
              The trust of our clients speaks volumes about our dedication to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">10,000+</div>
              <p className="text-gray-200">Businesses Registered</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">98%</div>
              <p className="text-gray-200">Client Satisfaction</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">50+</div>
              <p className="text-gray-200">Expert Consultants</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">15+</div>
              <p className="text-gray-200">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-rk-orange-light text-rk-orange rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-rk-gray text-lg">
              Find answers to common questions about business registration and our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* FAQ Item 1 */}
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">How long does it take to register a private limited company?</h3>
              <p className="text-rk-gray">The entire process typically takes 10-15 working days, depending on government processing times and the completeness of your documentation.</p>
            </div>

            {/* FAQ Item 2 */}
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">What documents are required for company registration?</h3>
              <p className="text-rk-gray">You'll need identity proof, address proof, and photographs of all directors, along with proof of registered office address and digital signatures.</p>
            </div>

            {/* FAQ Item 3 */}
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">What is the cost of registering a company?</h3>
              <p className="text-rk-gray">Our packages start from ₹7,999 for basic registration. The exact cost depends on the type of entity and additional services required.</p>
            </div>

            {/* FAQ Item 4 */}
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">What post-registration compliances are required?</h3>
              <p className="text-rk-gray">Post-registration compliances include GST registration, PF/ESI registration, annual filings, tax returns, and maintaining statutory books.</p>
            </div>

            {/* FAQ Item 5 */}
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">Can I change my company name after registration?</h3>
              <p className="text-rk-gray">Yes, you can change your company name after registration by following a specific procedure that includes board approval and filing forms with the Registrar of Companies.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-rk-gray mb-4">Still have questions? We're here to help.</p>
            <Button className="btn-secondary inline-flex items-center gap-2 group">
              Contact Our Experts <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-rk-orange-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-white text-rk-orange rounded-full text-sm font-semibold mb-4">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-rk-dark">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-lg md:text-xl text-rk-gray mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who trusted RegisterKaro to handle their business formalities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3">
                Register Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-rk-gray text-rk-dark">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-rk-orange h-5 w-5" />
                <span className="text-rk-gray">No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-rk-orange h-5 w-5" />
                <span className="text-rk-gray">Expert guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-rk-orange h-5 w-5" />
                <span className="text-rk-gray">Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-rk-orange h-5 w-5" />
                <span className="text-rk-gray">100% satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
