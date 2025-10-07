import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Code2,
  MessageCircle,
  Settings2,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AccentLink from "@/components/ui/accent-link";
import { caseStudies } from "@/data/caseStudies";
import DepartmentsRotatingText from "./text/departments-rotating-text";

const AIUseCases = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer for card animations
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

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-section-primary">
      <div className="container-width">
        <div className="px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-6 md:mb-8 lg:mb-10 space-y-6 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="mb-6 md:mb-6 lg:mb-6 space-y-4 max-w-3xl">
              <h1 className="text-left">
                Let a6n AI handle
                <br />
                the busywork.
              </h1>
              <p>
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

            {/* Icon Grid */}
            <div className="flex justify-start lg:justify-end items-center gap-2 lg:flex-shrink-0 flex-wrap lg:flex-nowrap">
              {[
                { Icon: Users, bgColor: "bg-purple-500/10" },
                { Icon: TrendingUp, bgColor: "bg-pink-500/10" },
                { Icon: Target, bgColor: "bg-emerald-500/10" },
                { Icon: BarChart3, bgColor: "bg-blue-500/10" },
                { Icon: Code2, bgColor: "bg-indigo-500/10" },
                { Icon: Wallet, bgColor: "bg-amber-500/10" },
                { Icon: Settings2, bgColor: "bg-cyan-500/10" },
                { Icon: MessageCircle, bgColor: "bg-rose-500/10" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 md:w-14 md:h-14 ${item.bgColor} rounded-xl flex items-center justify-center border border-border/50 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-primary/10`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.Icon className="h-5 w-5 md:h-6 md:w-6 text-foreground/80" />
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {caseStudies.slice(0, 8).map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group"
                >
                  <Link to={`/case-studies/${useCase.id}`}>
                    <Card
                      className={`
                                                h-auto border border-border/50 bg-card/30 backdrop-blur-sm 
                                                hover:bg-card/50 hover:border-border hover:shadow-lg
                                                transition-all duration-500 ease-out cursor-pointer
                                                ${
                                                  visibleCards.has(index)
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-8"
                                                }
                                            `}
                      style={{
                        transitionDelay: visibleCards.has(index)
                          ? `${index * 80}ms`
                          : "0ms",
                      }}
                    >
                      <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
                        {/* Icon Box */}
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                          <Icon className="h-5 w-5 text-foreground/80" />
                        </div>

                        {/* Title with inline arrow */}
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-tight text-left">
                            {useCase.title}
                          </h3>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUseCases;
