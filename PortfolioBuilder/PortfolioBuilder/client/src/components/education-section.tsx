import { GraduationCap, Calendar, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section className="py-20 bg-background" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="education-title">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" data-testid="education-icon">
                  <GraduationCap className="text-primary-foreground h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="degree-title">
                    Bachelor of Science (Computer Science)
                  </h3>
                  <h4 className="text-lg text-primary mb-3" data-testid="college-name">
                    MGM's College of Computer Science & Technology
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground mb-4">
                    <span className="flex items-center" data-testid="education-duration">
                      <Calendar className="mr-2 h-4 w-4" />
                      June 2022 - June 2025
                    </span>
                    <span className="flex items-center mt-2 sm:mt-0" data-testid="education-cgpa">
                      <Star className="mr-2 h-4 w-4" />
                      CGPA: 8.50
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
