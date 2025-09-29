import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Lock, Sparkles, Code, Mic, Github, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Server,
      title: "Private On-Premise Integration",
      description: "Deploy AI agents securely within your infrastructure, maintaining complete data sovereignty and control.",
    },
    {
      icon: Shield,
      title: "Secure OAuth Integration",
      description: "Connect seamlessly with your provider or choose from available providers with enterprise-grade security.",
    },
    {
      icon: Lock,
      title: "RBAC Policies",
      description: "Granular role-based access control ensures the right people have the right permissions at all times.",
    },
    {
      icon: Sparkles,
      title: "Best Models to Choose From",
      description: "Access cutting-edge AI models from leading providers, optimized for your specific use cases.",
    },
    {
      icon: Code,
      title: "RESTful APIs",
      description: "Instant ready-to-use APIs for seamless integration with your existing tools and workflows.",
    },
    {
      icon: Mic,
      title: "Voice and Chat Features",
      description: "Built-in voice and chat capabilities for natural, multi-modal interactions with your AI agents.",
    },
    {
      icon: Github,
      title: "Open Source Tools",
      description: "Built on trusted open source technologies, giving you transparency and flexibility.",
    },
    {
      icon: Cloud,
      title: "Works on Any Cloud",
      description: "Deploy on AWS, Azure, GCP, or your preferred cloud provider without vendor lock-in.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background/50">
      <div className="container-width">
        <div className="px-6 md:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use one or all. Best of breed products. Integrated as a platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`notion-card border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up opacity-0" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
