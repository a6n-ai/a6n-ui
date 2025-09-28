import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Vision = () => {
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

  const roadmap = [
    { label: "Agency Services", status: "current" },
    { label: "Hybrid Solutions", status: "next" },
    { label: "SaaS Platform", status: "future" },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-width">
        <div className="px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Title */}
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground ${
              isVisible ? "animate-fade-in opacity-0" : ""
            }`}>
              The Future of Automation
            </h2>

            {/* Subtext */}
            <p className={`text-base md:text-lg text-muted-foreground italic leading-relaxed ${
              isVisible ? "animate-fade-in opacity-0 stagger-1" : ""
            }`}>
              From agency services to a self-serve platform, we begin as your AI partner 
              and evolve to empower all businesses.
            </p>

            {/* Roadmap Timeline */}
            <div className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-12 ${
              isVisible ? "animate-fade-in-up opacity-0 stagger-2" : ""
            }`}>
              {roadmap.map((item, index) => (
                <div key={item.label} className="flex items-center">
                  <Badge
                    variant={item.status === "current" ? "default" : "outline"}
                    className={`px-6 py-2 text-sm font-medium ${
                      item.status === "current" 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "border-muted-foreground/30 text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Badge>
                  {index < roadmap.length - 1 && (
                    <ArrowRight className="hidden md:block ml-8 h-5 w-5 text-primary/40" />
                  )}
                </div>
              ))}
            </div>

            {/* Gradient Divider */}
            <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gradient-start to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;