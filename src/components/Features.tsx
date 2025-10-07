import {
  Cloud,
  Code,
  Boxes,
  Lock,
  Mic,
  Server,
  Shield,
  Sparkles
} from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

const Features = () => {
  const features = [
    {
      icon: Server,
      title: ["Private On-Premise", "Integration"],
      description:
          "Deploy AI agents within your infrastructure with complete data control.",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-600",
      spotlightColor: "bg-purple-600/40 dark:bg-purple-400/40",
    },
    {
      icon: Shield,
      title: ["Secure OAuth", "Integration"],
      description:
          "Connect with your provider or available providers securely.",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      spotlightColor: "bg-emerald-600/40 dark:bg-emerald-400/40",
    },
    {
      icon: Lock,
      title: ["RBAC", "Policies"],
      description: "Role-based access control with granular permissions.",
      bgColor: "bg-amber-500/10",
      iconColor: "text-amber-600",
      spotlightColor: "bg-amber-600/40 dark:bg-amber-400/40",
    },
    {
      icon: Sparkles,
      title: ["Best AI Models", "to Choose From"],
      description: "Access cutting-edge models optimized for your use cases.",
      bgColor: "bg-pink-500/10",
      iconColor: "text-pink-600",
      spotlightColor: "bg-pink-600/40 dark:bg-pink-400/40",
    },
    {
      icon: Code,
      title: ["RESTful", "APIs"],
      description: "Ready-to-use APIs for seamless integration.",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-600",
      spotlightColor: "bg-blue-600/40 dark:bg-blue-400/40",
    },
    {
      icon: Mic,
      title: ["Voice and Chat", "Features"],
      description: "Multi-modal interactions with your AI agents.",
      bgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
      spotlightColor: "bg-indigo-600/40 dark:bg-indigo-400/40",
    },
    {
      icon: Boxes,
      title: ["Open Source", "Tools"],
      description: "Built on trusted technologies for transparency.",
      bgColor: "bg-slate-500/10",
      iconColor: "text-slate-600",
      spotlightColor: "bg-slate-600/40 dark:bg-slate-400/40",
    },
    {
      icon: Cloud,
      title: ["Works on", "Any Cloud"],
      description: "Deploy on AWS, Azure, GCP without vendor lock-in.",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
      spotlightColor: "bg-cyan-600/40 dark:bg-cyan-400/40",
    },
  ];

  return (
      <section className="py-20 md:py-24 lg:py-32 bg-section-secondary">
        <div className="container-width">
          <div className="px-4 md:px-6 lg:px-8">
            <div className="mb-12 md:mb-16 lg:mb-20 space-y-4 max-w-3xl">
              <h1 className="text-left">Enterprise-Grade Features</h1>
              <p className="text-left">
                Use one or all. Best of breed products. Integrated as a platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {features.map((feature) => (
                  <SpotlightCard
                      key={feature.title.join("-")}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      bgColor={feature.bgColor}
                      iconColor={feature.iconColor}
                      spotlightColor={feature.spotlightColor}
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Features;
