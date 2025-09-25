import { Code, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const technicalSkills = [
    { category: "MERN Stack", skills: ["MongoDB", "Express.js", "React.js", "Node.js"], variant: "default" as const },
    { category: "Database & Languages", skills: ["MySQL", "Java", "REST API"], variant: "secondary" as const },
    { category: "Communication", skills: ["WebSocket", "Real-Time Communication"], variant: "outline" as const },
    { category: "Web Development", skills: ["Responsive Web Design", "Authentication"], variant: "secondary" as const }
  ];

  const toolsAndTechnologies = [
    { category: "Development Tools", skills: ["Docker", "Firebase", "Git"], variant: "default" as const },
    { category: "Frontend Frameworks", skills: ["Tailwind CSS", "ShadCN UI", "Vite.js"], variant: "secondary" as const },
    { category: "Platforms & Auth", skills: ["GitHub", "Clerk Auth", "Firebase Auth"], variant: "outline" as const }
  ];

  const languages = [
    { name: "English", level: "Intermediate" },
    { name: "Hindi", level: "Advanced" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="skills-title">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center" data-testid="technical-skills-title">
                <Code className="text-primary mr-3 h-5 w-5" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                {technicalSkills.map((category) => (
                  <div key={category.category} className="flex flex-wrap gap-3" data-testid={`skill-category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant={category.variant}
                        className="px-4 py-2 font-medium"
                        data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center" data-testid="tools-title">
                <Wrench className="text-primary mr-3 h-5 w-5" />
                Tools & Technologies
              </h3>
              
              <div className="space-y-4">
                {toolsAndTechnologies.map((category) => (
                  <div key={category.category} className="flex flex-wrap gap-3" data-testid={`tool-category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant={category.variant}
                        className="px-4 py-2 font-medium"
                        data-testid={`tool-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-medium text-foreground mb-4" data-testid="languages-title">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between" data-testid={`language-${lang.name.toLowerCase()}`}>
                      <span className="text-muted-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
