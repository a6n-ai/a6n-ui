import {
  Cloud,
  Code,
  Boxes,
  Lock,
  Mic,
  Server,
  Shield,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FeatureCard } from "@/components/ui/feature-card";

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

  const features = [
    {
      icon: Server,
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-600",
      title: ["Private On-Premise", "Integration"],
      description:
        "Deploy AI agents within your infrastructure with complete data control.",
    },
    {
      icon: Shield,
      iconBgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      title: ["Secure OAuth", "Integration"],
      description:
        "Connect with your provider or available providers securely.",
    },
    {
      icon: Lock,
      iconBgColor: "bg-amber-500/10",
      iconColor: "text-amber-600",
      title: ["RBAC", "Policies"],
      description: "Role-based access control with granular permissions.",
    },
    {
      icon: Sparkles,
      iconBgColor: "bg-pink-500/10",
      iconColor: "text-pink-600",
      title: ["Best AI Models", "to Choose From"],
      description: "Access cutting-edge models optimized for your use cases.",
    },
    {
      icon: Code,
      iconBgColor: "bg-blue-500/10",
      iconColor: "text-blue-600",
      title: ["RESTful", "APIs"],
      description: "Ready-to-use APIs for seamless integration.",
    },
    {
      icon: Mic,
      iconBgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
      title: ["Voice and Chat", "Features"],
      description: "Multi-modal interactions with your AI agents.",
    },
    {
      icon: Boxes,
      iconBgColor: "bg-slate-500/10",
      iconColor: "text-slate-600",
      title: ["Open Source", "Tools"],
      description: "Built on trusted technologies for transparency.",
    },
    {
      icon: Cloud,
      iconBgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
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
            <h1 className="text-left">Enterprise-Grade Features</h1>
            <p className="text-left">
              Use one or all. Best of breed products. Integrated as a platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group"
              >
                <FeatureCard
                  icon={feature.icon}
                  iconColor={feature.iconColor}
                  iconBgColor={feature.iconBgColor}
                  title={feature.title}
                  description={feature.description}
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

export default Features;
