import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const achievements = [
    "Developed full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js) for various in-house and client projects",
    "Built and maintained the front end of the LinkKiwi platform using React and Tailwind CSS with a focus on responsive, user-friendly design",
    "Created Meetify, a Zoom-replica web app using React, Tailwind CSS, ShadCN, Stream, and Clerk for real-time video communication",
    "Integrated Firebase and RESTful APIs for real-time updates and secure user management",
    "Collaborated with international clients and remote teams to deliver scalable, performant solutions"
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="experience-title">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          {/* Experience Item */}
          <div className="relative mb-12">
            <div className="flex items-center mb-4">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <span className="text-sm text-muted-foreground" data-testid="experience-duration">Jun 2023 - Present</span>
              </div>
            </div>
            
            <div className="ml-12 md:ml-0 md:flex md:justify-end">
              <Card className="md:w-1/2 md:mr-8 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="job-title">Software Engineer</h3>
                  <h4 className="text-lg text-primary mb-4" data-testid="company-name">LINKKIWI PVT. LTD</h4>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2" data-testid={`achievement-${index}`}>
                        <Check className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
