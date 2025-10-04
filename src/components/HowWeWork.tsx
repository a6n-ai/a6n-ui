import {ArrowDown, ArrowRight, Headphones, Lightbulb, Link2, RefreshCw, Settings, Users} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Card, CardContent} from "./ui/card";

const HowWeWork = () => {
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

    const mainSteps = [
        {
            icon: Users,
            title: "Understand Your Needs",
            description: "We start by listening to your team's challenges, analyzing workflows across sales, HR, healthcare, or other departments to pinpoint where automation can make the biggest impact.",
            step: 1,
        },
        {
            icon: Settings,
            title: "Custom AI Setup",
            description: "Our experts tailor our AI platform to your specific tasks—whether it's logging calls, screening candidates, or managing patient intake—ensuring a seamless fit for your business.",
            step: 2,
        },
        {
            icon: Link2,
            title: "Seamless Integration",
            description: "We connect a6n to your existing tools (like CRM or calendars) with minimal disruption, setting up automated processes that reduce manual effort by up to 50%.",
            step: 3,
        },
    ];

    const continuousSupport = [
        {
            icon: Lightbulb,
            title: "Train & Optimize",
            description: "We guide your team with easy training and fine-tune the system based on real-time feedback, keeping it aligned with your evolving needs.",
        },
        {
            icon: Headphones,
            title: "Ongoing Support",
            description: "Our team provides continuous assistance, ensuring your automation runs smoothly and helps you focus on growth every step of the way.",
        },
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-section-primary">
            <div className="container-width">
                <div className="px-6 md:px-10">
                    {/* Header */}
                    <div
                        className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? "animate-fade-in opacity-0" : ""}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            How We Work
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            At a6n, we simplify your journey to smarter automation with a clear, step-by-step process
                            designed to save time and boost efficiency.
                        </p>
                    </div>

                    {/* Main Process Flow */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                            {mainSteps.map((step, index) => (
                                <div key={step.title} className="relative">
                                    <Card
                                        className={`h-full border-2 hover:border-primary/50 transition-all duration-300 ${
                                            isVisible ? "animate-fade-in opacity-0" : ""
                                        }`}
                                        style={{animationDelay: `${index * 0.15}s`}}
                                    >
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <div
                                                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                                    <step.icon className="h-7 w-7 text-primary"/>
                                                </div>
                                                <span className="text-4xl font-bold text-primary/20">
                                                    {step.step}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-foreground">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Arrow connector - hidden on mobile, last one hidden */}
                                    {index < mainSteps.length - 1 && (
                                        <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                            <ArrowRight className="h-6 w-6 text-primary"/>
                                        </div>
                                    )}

                                    {/* Arrow down on mobile */}
                                    {index < mainSteps.length - 1 && (
                                        <div className="flex md:hidden justify-center my-4">
                                            <ArrowDown className="h-6 w-6 text-primary"/>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Continuous Support Section */}
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
                                <RefreshCw className="h-4 w-4"/>
                                <span>Continuous Throughout Process</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {continuousSupport.map((item, index) => (
                                <Card
                                    key={item.title}
                                    className={`border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:border-primary/40 transition-all duration-300 ${
                                        isVisible ? "animate-fade-in opacity-0" : ""
                                    }`}
                                    style={{animationDelay: `${0.45 + index * 0.15}s`}}
                                >
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-6 w-6 text-primary"/>
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <h3 className="font-bold text-lg text-foreground">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
