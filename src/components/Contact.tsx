import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["08085516053", "08052304522", "08100444284"],
      action: "tel:08085516053"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["08085516053"],
      action: "https://wa.me/2348085516053"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["greenwingsultimatelimited@gmail.com"],
      action: "mailto:greenwingsultimatelimited@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: ["Upwealth Carwash", "1b, Ali Balogun Street off Obalambe Street", "Ojokoro, Lagos"],
      action: null
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your business incorporation journey? Contact us today and let's help 
            you achieve your entrepreneurial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white border-0 shadow-elegant hover:shadow-lg transition-smooth text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                  {method.icon}
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </div>
                  ))}
                </div>
                {method.action && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      if (method.action?.startsWith('http')) {
                        window.open(method.action, '_blank');
                      } else {
                        window.location.href = method.action;
                      }
                    }}
                  >
                    Contact
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Business Today
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We look forward to helping you incorporate your business, with our branding and printing services, 
            and achieve your entrepreneurial goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/2348085516053', '_blank')}
            >
              Get Started on WhatsApp
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = 'tel:08085516053'}
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;