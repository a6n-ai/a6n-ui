import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, MessageSquare, BarChart, Code, DollarSign, Settings, Headphones, Package } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AIUseCases = () => {
  const [currentDepartment, setCurrentDepartment] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const departments = [
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

  const useCases = [
    {
      department: "HR AI",
      action: "Onboard a new hire",
      icon: Brain,
      color: "from-purple-500/10 to-purple-600/10",
      hoverColor: "hover:from-purple-500/20 hover:to-purple-600/20",
      tagColor: "bg-purple-100 text-purple-700",
    },
    {
      department: "Marketing AI",
      action: "Turn briefs into campaigns",
      icon: MessageSquare,
      color: "from-pink-500/10 to-pink-600/10",
      hoverColor: "hover:from-pink-500/20 hover:to-pink-600/20",
      tagColor: "bg-pink-100 text-pink-700",
    },
    {
      department: "Sales AI",
      action: "Close deals with smart follow-ups",
      icon: DollarSign,
      color: "from-emerald-500/10 to-emerald-600/10",
      hoverColor: "hover:from-emerald-500/20 hover:to-emerald-600/20",
      tagColor: "bg-emerald-100 text-emerald-700",
    },
    {
      department: "Analytics AI",
      action: "Turn raw data into reports",
      icon: BarChart,
      color: "from-blue-500/10 to-blue-600/10",
      hoverColor: "hover:from-blue-500/20 hover:to-blue-600/20",
      tagColor: "bg-blue-100 text-blue-700",
    },
    {
      department: "Software AI",
      action: "Generate docs from code",
      icon: Code,
      color: "from-indigo-500/10 to-indigo-600/10",
      hoverColor: "hover:from-indigo-500/20 hover:to-indigo-600/20",
      tagColor: "bg-indigo-100 text-indigo-700",
    },
    {
      department: "Finance AI",
      action: "Match expenses in seconds",
      icon: DollarSign,
      color: "from-amber-500/10 to-amber-600/10",
      hoverColor: "hover:from-amber-500/20 hover:to-amber-600/20",
      tagColor: "bg-amber-100 text-amber-700",
    },
    {
      department: "Operations AI",
      action: "Automate approval flows",
      icon: Settings,
      color: "from-cyan-500/10 to-cyan-600/10",
      hoverColor: "hover:from-cyan-500/20 hover:to-cyan-600/20",
      tagColor: "bg-cyan-100 text-cyan-700",
    },
    {
      department: "Support AI",
      action: "Summarize tickets instantly",
      icon: Headphones,
      color: "from-rose-500/10 to-rose-600/10",
      hoverColor: "hover:from-rose-500/20 hover:to-rose-600/20",
      tagColor: "bg-rose-100 text-rose-700",
    },
  ];

  // Rotate departments
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDepartment((prev) => (prev + 1) % departments.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [departments.length]);

  // Intersection observer for card animations
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

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-background/50">
      <div className="container-width">
        <div className="px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Let a6n AI handle<br />the busywork.
            </h2>
            <div className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Pick a use case to see how a6n AI helps your{" "}
              <span className="inline-block relative">
                <span 
                  key={currentDepartment}
                  className="text-primary font-semibold animate-fade-in"
                >
                  {departments[currentDepartment]}
                </span>
              </span>
              .
            </div>
          </div>

          {/* Illustration Row */}
          <div className="flex justify-center items-center gap-3 mb-12 md:mb-16">
            {[
              { bg: "bg-yellow-400", icon: "📋" },
              { bg: "bg-white", icon: "✏️" },
              { bg: "bg-blue-400", icon: "😊" },
              { bg: "bg-white", icon: "🎯" },
              { bg: "bg-white", icon: "📚" },
              { bg: "bg-red-400", icon: "🎩" },
            ].map((char, index) => (
              <div
                key={index}
                className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${char.bg} rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-sm transform transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {char.icon}
              </div>
            ))}
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="group"
              >
                <Card
                  className={`
                    h-full min-h-[120px] border border-border/50 bg-card/30 backdrop-blur-sm 
                    hover:bg-card/50 hover:border-border hover:shadow-lg
                    transition-all duration-500 ease-out cursor-pointer
                    bg-gradient-to-br ${useCase.color} ${useCase.hoverColor}
                    ${visibleCards.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                    }
                  `}
                  style={{ 
                    transitionDelay: visibleCards.has(index) ? `${index * 80}ms` : '0ms'
                  }}
                >
                  <div className="p-5 md:p-6 flex flex-col justify-between h-full">
                    {/* Department Tag */}
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${useCase.tagColor}`}>
                        {useCase.department}
                      </span>
                    </div>
                    
                    {/* Action Text with Arrow */}
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm md:text-base font-medium text-foreground leading-tight">
                        {useCase.action}
                      </p>
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUseCases;