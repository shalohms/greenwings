import { Building2, FileText, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Business Incorporation & Registration",
      description: "Complete business registration with Corporate Affairs Commission (CAC) and relevant government agencies.",
      features: [
        "CAC Registration",
        "FIRS Registration", 
        "SCUML Registration",
        "Trademark Registration",
        "Copyright Registration",
        "NAFDAC Registration",
        "Post Incorporation Services"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Document Processing",
      description: "Professional processing of business documents with government agencies for full compliance.",
      features: [
        "Annual Returns Filing",
        "Change of Name",
        "Business Upgrade",
        "Director Changes",
        "Certified True Copy (CTC)",
        "Compliance Documentation"
      ]
    },
    {
      icon: <Printer className="w-12 h-12 text-primary" />,
      title: "Digital Printing & Branding",
      description: "Complete branding solutions and digital printing services for your business identity.",
      features: [
        "Logo Design",
        "Business Cards",
        "Letterheads",
        "Promotional Materials",
        "Brand Identity Development",
        "Corporate Stationery"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive business support services to help you establish, 
            register, and grow your business with full regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full bg-white shadow-elegant hover:shadow-lg transition-smooth border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;