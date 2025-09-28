import { Search, Wrench, Rocket, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HowWeWork = () => {
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

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Analyze your workflows and goals.",
    },
    {
      icon: Wrench,
      title: "Build",
      description: "Create tailored automation solutions.",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Integrate and train your team.",
    },
    {
      icon: RefreshCw,
      title: "Optimize",
      description: "Ongoing support and refinement.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Title and Description */}
            <div className={`space-y-6 ${isVisible ? "animate-fade-in opacity-0" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How We Work
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We partner with businesses to craft custom AI automation workflows, 
                starting with agency services and evolving to a scalable product.
              </p>
            </div>

            {/* Right - Process Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex items-start space-x-4 ${
                    isVisible ? "animate-slide-in opacity-0" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-px bg-border"></div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;