import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string | string[];
  description: string;
  badge?: ReactNode;
  delay?: number;
  isVisible?: boolean;
}

export const FeatureCard = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  badge,
  delay = 0,
  isVisible = true,
}: FeatureCardProps) => {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <Card
      className={`
        h-full border border-border/50 bg-card/30 backdrop-blur-sm 
        hover:bg-card/50 hover:border-border hover:shadow-lg
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      <CardContent className="p-5 md:p-6 lg:p-7">
        <div className="flex flex-col h-full">
          {/* Icon Container */}
          <div className="relative mb-6 mx-auto">
            <div
              className={`
                w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                rounded-2xl ${iconBgColor}
                flex items-center justify-center
                transform transition-all duration-500 ease-out
                group-hover:scale-110 group-hover:rotate-3
              `}
            >
              <Icon
                className={`
                  h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 
                  ${iconColor}
                  transition-all duration-300
                  group-hover:scale-110
                `}
              />
            </div>
            {badge && (
              <div className="absolute -top-2 -right-2">
                {badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
              {titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="text-xs md:text-sm lg:text-sm text-muted-foreground leading-relaxed pt-1">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
