import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Lock, Sparkles, Code, Mic, Github, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Import feature illustrations
import featureServer from "@/assets/feature-server.png";
import featureOAuth from "@/assets/feature-oauth.png";
import featureRBAC from "@/assets/feature-rbac.png";
import featureModels from "@/assets/feature-models.png";
import featureAPI from "@/assets/feature-api.png";
import featureVoice from "@/assets/feature-voice.png";
import featureOpenSource from "@/assets/feature-opensource.png";
import featureCloud from "@/assets/feature-cloud.png";

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => new Set(prev).add(index));
              observer.unobserve(ref);
            }
          },
          { threshold: 0.1, rootMargin: "50px" }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const features = [
    {
      icon: Server,
      illustration: featureServer,
      title: ["Private On-Premise", "Integration"],
      description: "Deploy AI agents within your infrastructure with complete data control.",
    },
    {
      icon: Shield,
      illustration: featureOAuth,
      title: ["Secure OAuth", "Integration"],
      description: "Connect with your provider or available providers securely.",
    },
    {
      icon: Lock,
      illustration: featureRBAC,
      title: ["RBAC", "Policies"],
      description: "Role-based access control with granular permissions.",
    },
    {
      icon: Sparkles,
      illustration: featureModels,
      title: ["Best AI Models", "to Choose From"],
      description: "Access cutting-edge models optimized for your use cases.",
    },
    {
      icon: Code,
      illustration: featureAPI,
      title: ["RESTful", "APIs"],
      description: "Ready-to-use APIs for seamless integration.",
    },
    {
      icon: Mic,
      illustration: featureVoice,
      title: ["Voice and Chat", "Features"],
      description: "Multi-modal interactions with your AI agents.",
    },
    {
      icon: Github,
      illustration: featureOpenSource,
      title: ["Open Source", "Tools"],
      description: "Built on trusted technologies for transparency.",
    },
    {
      icon: Cloud,
      illustration: featureCloud,
      title: ["Works on", "Any Cloud"],
      description: "Deploy on AWS, Azure, GCP without vendor lock-in.",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/50">
      <div className="container-width">
        <div className="px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Enterprise-Grade Features
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Use one or all. Best of breed products. Integrated as a platform.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="group"
              >
                <Card
                  className={`
                    h-full border border-border/50 bg-card/30 backdrop-blur-sm 
                    hover:bg-card/50 hover:border-border hover:shadow-lg
                    transition-all duration-500 ease-out
                    ${visibleCards.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                    }
                  `}
                  style={{ 
                    transitionDelay: visibleCards.has(index) ? `${index * 80}ms` : '0ms'
                  }}
                >
                  <CardContent className="p-5 md:p-6 lg:p-7">
                    <div className="flex flex-col h-full">
                      {/* Illustration Container */}
                      <div className="relative mb-6 mx-auto">
                        <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-4">
                          <img 
                            src={feature.illustration}
                            alt={`${Array.isArray(feature.title) ? feature.title.join(' ') : feature.title} illustration`}
                            className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          {/* Subtle glow effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Floating icon badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl bg-primary shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <feature.icon className="h-5 w-5 md:h-5.5 md:w-5.5 lg:h-6 lg:w-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                          <span className="block">{(feature.title as string[])[0]}</span>
                          <span className="block">{(feature.title as string[])[1]}</span>
                        </h3>
                        <p className="text-xs md:text-sm lg:text-sm text-muted-foreground leading-relaxed pt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
