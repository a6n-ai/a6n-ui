import {Card, CardContent} from "@/components/ui/card";
import {Clock, TrendingUp, Zap} from "lucide-react";
import {useEffect, useRef, useState} from "react";

const Benefits = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.1}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const benefits = [
        {
            icon: Zap,
            title: "Cut Repetition",
            description: "Automate routine tasks effortlessly.",
            color: "text-primary",
        },
        {
            icon: Clock,
            title: "Save Time",
            description: "Free your team for high-impact work.",
            color: "text-primary",
        },
        {
            icon: TrendingUp,
            title: "Scale Smart",
            description: "Grow operations without extra costs.",
            color: "text-primary",
        },
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-section-secondary">
            <div className="container-width">
                <div className="px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={benefit.title}
                                className={`notion-card border bg-card shadow-sm ${
                                    isVisible ? "animate-fade-in-up opacity-0" : ""
                                }`}
                                style={{animationDelay: `${index * 0.2}s`}}
                            >
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <benefit.icon className={`h-8 w-8 ${benefit.color}`}/>
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
