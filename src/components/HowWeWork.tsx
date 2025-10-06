import {Headphones, Lightbulb, Link2, Settings, Users} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Card, CardContent} from "./ui/card";

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
                            setVisibleCards(prev => new Set(prev).add(index));
                            observer.unobserve(ref);
                        }
                    },
                    {threshold: 0.1, rootMargin: "50px"}
                );

                observer.observe(ref);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    const steps = [
        {
            icon: Users,
            color: "from-purple-500/20 to-purple-600/20",
            iconColor: "text-purple-600",
            hoverColor: "hover:from-purple-500/30 hover:to-purple-600/30",
            title: ["Understand", "Your Needs"],
            description: "We start by listening to your team's challenges and pinpointing where automation can make the biggest impact.",
            step: "01",
        },
        {
            icon: Settings,
            color: "from-blue-500/20 to-blue-600/20",
            iconColor: "text-blue-600",
            hoverColor: "hover:from-blue-500/30 hover:to-blue-600/30",
            title: ["Custom AI", "Setup"],
            description: "Our experts tailor our AI platform to your specific tasks, ensuring a seamless fit for your business.",
            step: "02",
        },
        {
            icon: Link2,
            color: "from-emerald-500/20 to-emerald-600/20",
            iconColor: "text-emerald-600",
            hoverColor: "hover:from-emerald-500/30 hover:to-emerald-600/30",
            title: ["Seamless", "Integration"],
            description: "We connect a6n to your existing tools with minimal disruption, reducing manual effort by up to 50%.",
            step: "03",
        },
        {
            icon: Lightbulb,
            color: "from-amber-500/20 to-amber-600/20",
            iconColor: "text-amber-600",
            hoverColor: "hover:from-amber-500/30 hover:to-amber-600/30",
            title: ["Train &", "Optimize"],
            description: "We guide your team with easy training and fine-tune the system based on real-time feedback.",
            step: "04",
        },
        {
            icon: Headphones,
            color: "from-pink-500/20 to-pink-600/20",
            iconColor: "text-pink-600",
            hoverColor: "hover:from-pink-500/30 hover:to-pink-600/30",
            title: ["Ongoing", "Support"],
            description: "Our team provides continuous assistance, ensuring your automation runs smoothly.",
            step: "05",
        },
    ];

    return (
        <section className="py-20 md:py-24 lg:py-32 bg-section-secondary">
            <div className="container-width">
                <div className="px-4 md:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-12 md:mb-16 lg:mb-20 space-y-4 max-w-3xl">
                        <h1 className="text-left">
                            How We Work
                        </h1>
                        <p className="text-left">
                            At a6n, we simplify your journey to smarter automation with a clear, step-by-step process designed to save time and boost efficiency.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className="group"
                            >
                                <Card
                                    className={`
                                        h-full border border-border/50 bg-card/30 backdrop-blur-sm 
                                        hover:bg-card/50 hover:border-border hover:shadow-lg
                                        transition-all duration-500 ease-out
                                        ${visibleCards.has(index)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                        }
                                    `}
                                    style={{
                                        transitionDelay: visibleCards.has(index) ? `${index * 80}ms` : '0ms'
                                    }}
                                >
                                    <CardContent className="p-5 md:p-6 lg:p-7">
                                        <div className="flex flex-col h-full">
                                            {/* Icon Container */}
                                            <div className="relative mb-6 mx-auto">
                                                <div className={`
                                                    w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                                                    rounded-2xl bg-gradient-to-br ${step.color} ${step.hoverColor}
                                                    flex items-center justify-center
                                                    transform transition-all duration-500 ease-out
                                                    group-hover:scale-110 group-hover:rotate-3
                                                `}>
                                                    <step.icon className={`
                                                        h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 
                                                        ${step.iconColor}
                                                        transition-all duration-300
                                                        group-hover:scale-110
                                                    `}/>
                                                </div>
                                                {/* Step Number */}
                                                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                                                    {step.step}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 space-y-2">
                                                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                                                    <span className="block">{step.title[0]}</span>
                                                    <span className="block">{step.title[1]}</span>
                                                </h3>
                                                <p className="text-xs md:text-sm lg:text-sm text-muted-foreground leading-relaxed pt-1">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
