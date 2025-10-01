import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Lock, Sparkles, Code, Mic, Github, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
      hoverColor: "hover:from-purple-500/30 hover:to-purple-600/30",
      title: ["Private On-Premise", "Integration"],
      description: "Deploy AI agents within your infrastructure with complete data control.",
    },
    {
      icon: Shield,
      color: "from-emerald-500/20 to-emerald-600/20",
      iconColor: "text-emerald-600",
      hoverColor: "hover:from-emerald-500/30 hover:to-emerald-600/30",
      title: ["Secure OAuth", "Integration"],
      description: "Connect with your provider or available providers securely.",
    },
    {
      icon: Lock,
      color: "from-amber-500/20 to-amber-600/20",
      iconColor: "text-amber-600",
      hoverColor: "hover:from-amber-500/30 hover:to-amber-600/30",
      title: ["RBAC", "Policies"],
      description: "Role-based access control with granular permissions.",
    },
    {
      icon: Sparkles,
      color: "from-pink-500/20 to-pink-600/20",
      iconColor: "text-pink-600",
      hoverColor: "hover:from-pink-500/30 hover:to-pink-600/30",
      title: ["Best AI Models", "to Choose From"],
      description: "Access cutting-edge models optimized for your use cases.",
    },
    {
      icon: Code,
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      hoverColor: "hover:from-blue-500/30 hover:to-blue-600/30",
      title: ["RESTful", "APIs"],
      description: "Ready-to-use APIs for seamless integration.",
    },
    {
      icon: Mic,
      color: "from-indigo-500/20 to-indigo-600/20",
      iconColor: "text-indigo-600",
      hoverColor: "hover:from-indigo-500/30 hover:to-indigo-600/30",
      title: ["Voice and Chat", "Features"],
      description: "Multi-modal interactions with your AI agents.",
    },
    {
      icon: Github,
      color: "from-slate-500/20 to-slate-600/20",
      iconColor: "text-slate-600",
      hoverColor: "hover:from-slate-500/30 hover:to-slate-600/30",
      title: ["Open Source", "Tools"],
      description: "Built on trusted technologies for transparency.",
    },
    {
      icon: Cloud,
      color: "from-cyan-500/20 to-cyan-600/20",
      iconColor: "text-cyan-600",
      hoverColor: "hover:from-cyan-500/30 hover:to-cyan-600/30",
      title: ["Works on", "Any Cloud"],
      description: "Deploy on AWS, Azure, GCP without vendor lock-in.",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-section-secondary">
      <div className="container-width">
        <div className="px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 lg:mb-20 space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-left">
              Enterprise-Grade Features
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-left">
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
                      {/* Icon Container */}
                      <div className="relative mb-6 mx-auto">
                        <div className={`
                          w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                          rounded-2xl bg-gradient-to-br ${feature.color} ${feature.hoverColor}
                          flex items-center justify-center
                          transform transition-all duration-500 ease-out
                          group-hover:scale-110 group-hover:rotate-3
                        `}>
                          <feature.icon className={`
                            h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 
                            ${feature.iconColor}
                            transition-all duration-300
                            group-hover:scale-110
                          `} />
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