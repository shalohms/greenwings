import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-lg mr-3">
                G
              </div>
              <div>
                <div className="font-bold text-lg">Greenwings Ultimate Limited</div>
                <div className="text-sm text-white/80">Your Trusted Business Partner</div>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed max-w-md">
              Professional business incorporation, registration and digital printing services. 
              Established in 2021, we've successfully incorporated over 817 businesses across various sectors.
            </p>
            <div className="text-sm text-white/60">
              <div>CAC Registered • SCUML Compliant</div>
              <div>RC Number: Available upon request</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <div className="text-sm">
                  <div>08085516053</div>
                  <div>08052304522</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-3 flex-shrink-0" />
                <div className="text-sm">08085516053</div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                <div className="text-sm break-all">greenwingsultimatelimited@gmail.com</div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  Upwealth Carwash<br />
                  1b, Ali Balogun Street<br />
                  off Obalambe Street<br />
                  Ojokoro, Lagos
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Greenwings Ultimate Limited. All rights reserved.
            </div>
            <div className="text-white/60 text-sm">
              Empowering businesses since 2021
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;