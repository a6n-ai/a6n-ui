import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="section-padding bg-section-secondary">
            <div className="container-width">
                <div className="px-6 md:px-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
                            Ready to transform your workflows?
                        </h2>

                        {/* CTA Button */}
                        <div className="animate-fade-in-up stagger-1">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium animate-pulse-subtle group"
                            >
                                Book a Free Consultation
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
