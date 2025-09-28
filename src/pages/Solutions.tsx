import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Solutions = () => {
  return (
    <main className="pt-16 min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-width">
          <div className="px-6 md:px-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              AI Automation Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in stagger-1">
              Custom workflows designed for your business needs.
            </p>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground animate-fade-in-up stagger-2">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;