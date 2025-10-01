import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Hero = () => {
  const rotatingTexts = [
    "Organization",
    "HR",
    "Marketing",
    "Sales",
    "Analytics",
    "Software",
    "Finance",
    "Operations",
    "Customer Support",
    "Product",
    "Legal"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-primary">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container-width relative z-10">
        <div className="px-6 md:px-10 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Announcement Badge */}
            <div className="flex justify-center animate-fade-in opacity-0 stagger-1">
              <Badge variant="outline" className="px-4 py-2 border-primary/20 bg-primary/5 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 text-primary animate-pulse" />
                <span className="text-sm font-medium">🎉 We're officially launching! Join the future of AI automation</span>
              </Badge>
            </div>
            
            {/* Tagline */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in opacity-0 stagger-2">
              Work smarter with your AI crew.
            </h1>

            {/* Subheading with rotating text */}
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto animate-fade-in opacity-0 stagger-3">
              At a6n, we supercharge your team with private AI agents built for{" "}
              <span className="inline-block min-w-[200px] text-left align-bottom">
                <span 
                  key={currentTextIndex}
                  className="font-semibold text-primary inline-block animate-[fade-in_0.5s_ease-out,spin-in_0.5s_ease-out] origin-center"
                  style={{
                    animation: 'fadeRotateIn 0.6s ease-out forwards'
                  }}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
              </span>
            </p>

            {/* Subtext */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 stagger-4">
              The AI automation platform where teams and agents achieve more together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 stagger-5">
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
    </section>
  );
};

export default Hero;