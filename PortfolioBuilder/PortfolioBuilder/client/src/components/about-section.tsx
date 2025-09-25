import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="about-expertise-title">MERN Stack Expert</h3>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="about-description-1">
              Currently working as a Software Engineer at LinkKiwi Pvt. Ltd, where I develop full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js) for various in-house and client projects.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="about-description-2">
              I specialize in building responsive, user-friendly web applications with a focus on clean code practices and maintainability. My experience includes working with international clients and remote teams to deliver scalable, performant solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="text-center p-4">
                  <div className="text-2xl font-bold text-primary" data-testid="years-experience">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center p-4">
                  <div className="text-2xl font-bold text-primary" data-testid="projects-completed">10+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Developer workspace with code on multiple screens" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="about-image"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground" data-testid="availability-status">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
