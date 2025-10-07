import { Headphones, Lightbulb, Link2, Settings, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FeatureCard } from "./ui/feature-card";

const HowWeWork = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
              observer.unobserve(ref);
            }
          },
          { threshold: 0.1, rootMargin: "50px" },
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const steps = [
    {
      icon: Users,
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-600",
      title: ["Understand", "Your Needs"],
      description:
        "We start by listening to your team's challenges and pinpointing where automation can make the biggest impact.",
      step: "01",
    },
    {
      icon: Settings,
      iconBgColor: "bg-blue-500/10",
      iconColor: "text-blue-600",
      title: ["Custom AI", "Setup"],
      description:
        "Our experts tailor our AI platform to your specific tasks, ensuring a seamless fit for your business.",
      step: "02",
    },
    {
      icon: Link2,
      iconBgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      title: ["Seamless", "Integration"],
      description:
        "We connect a6n to your existing tools with minimal disruption, reducing manual effort by up to 50%.",
      step: "03",
    },
    {
      icon: Lightbulb,
      iconBgColor: "bg-amber-500/10",
      iconColor: "text-amber-600",
      title: ["Train &", "Optimize"],
      description:
        "We guide your team with easy training and fine-tune the system based on real-time feedback.",
      step: "04",
    },
    {
      icon: Headphones,
      iconBgColor: "bg-pink-500/10",
      iconColor: "text-pink-600",
      title: ["Ongoing", "Support"],
      description:
        "Our team provides continuous assistance, ensuring your automation runs smoothly.",
      step: "05",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-section-secondary">
      <div className="container-width">
        <div className="px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 lg:mb-20 space-y-4 max-w-3xl">
            <h1 className="text-left">How We Work</h1>
            <p className="text-left">
              At a6n, we simplify your journey to smarter automation with a
              clear, step-by-step process designed to save time and boost
              efficiency.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group"
              >
                <FeatureCard
                  icon={step.icon}
                  iconColor={step.iconColor}
                  iconBgColor={step.iconBgColor}
                  title={step.title}
                  description={step.description}
                  badge={
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                  }
                  delay={index * 80}
                  isVisible={visibleCards.has(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
