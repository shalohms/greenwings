import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Twitha Pos and Enterprise",
      feedback: "Wow, thanks so much, God bless you richly",
      rating: 5
    },
    {
      name: "Royal Bliss Farms",
      feedback: "Reliable and Fast",
      rating: 5
    },
    {
      name: "Kaypam Global Limited",
      feedback: "101% authentic! No scam zone",
      rating: 5
    },
    {
      name: "Leji Pee Enterprises",
      feedback: "Can't imagine I could get my brand registered just within 3 days",
      rating: 5
    },
    {
      name: "Association of Ekiti Radio and Television Presenters Lagos",
      feedback: "We appreciate the professional advice and assistant getting us registered",
      rating: 5
    },
    {
      name: "Amar Integrated Services",
      feedback: "Very impressive and excellent service delivery",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about our professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-elegant hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-elegant max-w-2xl mx-auto">
            <div className="text-4xl font-bold text-primary mb-2">817+</div>
            <div className="text-lg font-semibold mb-2">Successful Business Incorporations</div>
            <div className="text-muted-foreground">
              Join hundreds of satisfied clients who chose Greenwings Ultimate Limited 
              for their business registration needs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;