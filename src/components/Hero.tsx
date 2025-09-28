import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AbstractVisual from "./AbstractVisual";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Abstract Background Visual */}
      <div className="absolute inset-0 pointer-events-none">
        <AbstractVisual />
      </div>

      {/* Content */}
      <div className="container-width relative z-10">
        <div className="px-6 md:px-10 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Tagline */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in opacity-0 stagger-1">
              Work smarter with your AI crew.
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 stagger-2">
              a6n is the AI automation platform where teams and agents achieve more together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 stagger-3">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium group"
              >
                Talk to Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium group"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;