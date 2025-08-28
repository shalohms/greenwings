import { GraduationCap, Award, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Founder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by experienced professionals dedicated to your business success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  OO
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-2">Omokunle Oluwaseun</h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Founder & Managing Director
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A dynamic and ambitious Nigerian youth who has made a significant impact in the business world. 
                    As the Founder and Managing Director of Greenwings Ultimate Limited, he has demonstrated 
                    exceptional leadership and entrepreneurial skills.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">Bachelor's Degree</div>
                      <div className="text-xs text-muted-foreground">Accounting</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">7+ Years</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">817+</div>
                      <div className="text-xs text-muted-foreground">Incorporations</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">Trusted</div>
                      <div className="text-xs text-muted-foreground">Expert</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="text-xl font-semibold mb-4">Expertise & Leadership</h4>
                <p className="text-muted-foreground leading-relaxed">
                  With over 7 years of experience in providing support and consultancy services on incorporation matters, 
                  Oluwaseun has established himself as a trusted expert in this field. His extensive experience in business 
                  incorporation and consultancy has empowered start-ups and existing businesses to navigate complexities of 
                  incorporation and registration, ensuring seamless compliance with regulatory bodies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;