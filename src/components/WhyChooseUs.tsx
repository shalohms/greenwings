import { Shield, Clock, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Limited Liability Protection",
      description: "Protect your personal assets from business-related liabilities through proper incorporation."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Enhanced Credibility",
      description: "Build trust with customers, suppliers and investors through official business registration."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast 3-Day Process",
      description: "Get your business registered in as little as 3 days with our streamlined process."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Access to Funding",
      description: "Unlock loans, grants, and investment opportunities available only to registered businesses."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Greenwings Ultimate Limited?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to delivering high-quality business support services that meet the needs 
            of our clients across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-lg transition-smooth bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Incorporate Your Business?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Join 817+ successful businesses that trust us with their incorporation needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-lg">Excellence</div>
              <div className="text-sm text-white/80">We strive for excellence in all our services and client interactions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-lg">Integrity</div>
              <div className="text-sm text-white/80">We operate with transparency and honesty in all business dealings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold text-lg">Customer Satisfaction</div>
              <div className="text-sm text-white/80">We ensure exceptional service and complete client satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;