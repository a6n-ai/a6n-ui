import {Card} from "@/components/ui/card";
import {ArrowRight, Users, TrendingUp, Target, BarChart3, Code2, Wallet, Settings2, MessageCircle} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {caseStudies} from "@/data/caseStudies";

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

    return (
        <section className="py-20 md:py-24 lg:py-32 bg-section-primary">
            <div className="container-width">
                <div className="px-4 md:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-12 md:mb-16 lg:mb-20 space-y-6 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-left mb-4">
                                Let a6n AI handle<br/>the busywork.
                            </h2>
                            <div className="text-base md:text-lg lg:text-xl text-muted-foreground text-left mb-6 min-h-[3.5rem]">
                                Pick a use case to see how a6n AI helps your
                                <br/>
                                <span className="inline-block relative">
                                    <span
                                        key={currentDepartment}
                                        className="text-primary font-semibold animate-fade-in"
                                    >
                                        {departments[currentDepartment]}
                                    </span>
                                </span>
                                {" "}team.
                            </div>
                            <Link 
                                to="/case-studies" 
                                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                                Explore more <ArrowRight className="ml-2 h-4 w-4"/>
                            </Link>
                        </div>
                        
                        {/* Icon Grid */}
                        <div className="flex justify-start lg:justify-end items-center gap-2 lg:flex-shrink-0 flex-wrap lg:flex-nowrap">
                            {[
                                {Icon: Users, color: "from-purple-500/20 to-purple-600/20"},
                                {Icon: TrendingUp, color: "from-pink-500/20 to-pink-600/20"},
                                {Icon: Target, color: "from-emerald-500/20 to-emerald-600/20"},
                                {Icon: BarChart3, color: "from-blue-500/20 to-blue-600/20"},
                                {Icon: Code2, color: "from-indigo-500/20 to-indigo-600/20"},
                                {Icon: Wallet, color: "from-amber-500/20 to-amber-600/20"},
                                {Icon: Settings2, color: "from-cyan-500/20 to-cyan-600/20"},
                                {Icon: MessageCircle, color: "from-rose-500/20 to-rose-600/20"},
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center border border-border/50 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <item.Icon className="h-5 w-5 md:h-6 md:w-6 text-foreground/80"/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                        {caseStudies.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <div
                                    key={useCase.id}
                                    ref={el => cardRefs.current[index] = el}
                                    className="group"
                                >
                                    <Link to={`/case-studies/${useCase.id}`}>
                                        <Card
                                            className={`
                                                h-full min-h-[140px] border border-border/50 bg-card/30 backdrop-blur-sm 
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
                                            <div className="p-4 flex flex-col h-full gap-3">
                                                {/* Icon Box and Title */}
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                                                        <Icon className="h-4 w-4 text-foreground/80"/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-sm font-semibold text-foreground leading-snug">
                                                            {useCase.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Arrow at bottom right */}
                                                <div className="flex justify-end mt-auto">
                                                    <ArrowRight
                                                        className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"/>
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
