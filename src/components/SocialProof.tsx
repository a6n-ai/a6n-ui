import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const SocialProof = () => {
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

  // Placeholder logos - in production, these would be actual client logos
  const clientLogos = [
    { name: "Client 1", placeholder: true },
    { name: "Client 2", placeholder: true },
    { name: "Client 3", placeholder: true },
    { name: "Client 4", placeholder: true },
    { name: "Client 5", placeholder: true },
    { name: "Client 6", placeholder: true },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-section-primary">
      <div className="container-width">
        <div className="px-6 md:px-10">
          <div className="text-center space-y-8">
            {/* Title */}
            <h3 className={`text-2xl font-bold text-foreground ${
              isVisible ? "animate-fade-in opacity-0" : ""
            }`}>
              Built by Experts
            </h3>

            {/* Description */}
            <p className={`text-sm md:text-base text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in opacity-0 stagger-1" : ""
            }`}>
              Crafted by automation specialists with expertise in SaaS, AI, and cloud-scale systems.
            </p>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {clientLogos.map((logo, index) => (
                <Card
                  key={logo.name}
                  className={`h-24 flex items-center justify-center bg-card/50 border-border/50 ${
                    isVisible ? "animate-fade-in opacity-0" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-xs text-muted-foreground/40 font-medium">
                    {logo.name}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;