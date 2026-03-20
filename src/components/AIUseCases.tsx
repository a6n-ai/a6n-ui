import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AccentLink from "@/components/ui/accent-link";
import { caseStudies } from "@/data/caseStudies";
import DepartmentsRotatingText from "./text/departments-rotating-text";
import { SpotlightCard } from "./ui/spotlight-card";

// Map case study color gradients to SpotlightCard-compatible colors
const colorMap: Record<string, { bgColor: string; iconColor: string; spotlightColor: string }> = {
  "from-purple-500/20 to-purple-600/20": {
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600",
    spotlightColor: "bg-purple-600/40 dark:bg-purple-400/40",
  },
  "from-pink-500/20 to-pink-600/20": {
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-600",
    spotlightColor: "bg-pink-600/40 dark:bg-pink-400/40",
  },
  "from-emerald-500/20 to-emerald-600/20": {
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    spotlightColor: "bg-emerald-600/40 dark:bg-emerald-400/40",
  },
  "from-blue-500/20 to-blue-600/20": {
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
    spotlightColor: "bg-blue-600/40 dark:bg-blue-400/40",
  },
  "from-indigo-500/20 to-indigo-600/20": {
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
    spotlightColor: "bg-indigo-600/40 dark:bg-indigo-400/40",
  },
  "from-amber-500/20 to-amber-600/20": {
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-600",
    spotlightColor: "bg-amber-600/40 dark:bg-amber-400/40",
  },
  "from-cyan-500/20 to-cyan-600/20": {
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
    spotlightColor: "bg-cyan-600/40 dark:bg-cyan-400/40",
  },
  "from-rose-500/20 to-rose-600/20": {
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-600",
    spotlightColor: "bg-rose-600/40 dark:bg-rose-400/40",
  },
};

const AIUseCases = () => {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-section-primary">
      <div className="container-width">
        <div className="px-4 md:px-6 lg:px-8">
          {/* Section Header - matching other sections */}
          <div className="mb-12 md:mb-16 lg:mb-20 space-y-4 max-w-3xl">
            <h1 className="text-left">
              Let a6n AI handle
              <br />
              the busywork.
            </h1>
            <p className="text-left">
              Pick a use case to see how a6n AI helps your{" "}
              <DepartmentsRotatingText
                duration={3000}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-primary font-semibold inline-block align-baseline"
                containerClassName="inline-block align-baseline py-0 overflow-visible"
              />{" "}
              team.
            </p>
            <AccentLink to="/case-studies" className="font-medium">
              Explore more <ArrowRight className="ml-2 h-4 w-4" />
            </AccentLink>
          </div>

          {/* Use Cases Grid - matching Features section layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {caseStudies.slice(0, 8).map((useCase) => {
              const colors = colorMap[useCase.color] || {
                bgColor: "bg-slate-500/10",
                iconColor: "text-slate-600",
                spotlightColor: "bg-slate-600/40 dark:bg-slate-400/40",
              };
              return (
                <Link key={useCase.id} to={`/case-studies/${useCase.id}`} className="no-underline">
                  <SpotlightCard
                    icon={useCase.icon}
                    title={useCase.title}
                    description={useCase.description}
                    bgColor={colors.bgColor}
                    iconColor={colors.iconColor}
                    spotlightColor={colors.spotlightColor}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUseCases;
