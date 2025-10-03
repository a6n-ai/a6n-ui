import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const Contact = () => {
    return (
        <main className="pt-16 min-h-screen bg-background">
            <section className="section-padding">
                <div className="container-width">
                    <div className="px-6 md:px-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                            Let's Talk Automation
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in stagger-1">
                            Ready to transform your workflows? Schedule a free consultation to explore how a6n can help.
                        </p>
                        <Button
                            className="bg-primary hover:bg-primary-hover text-primary-foreground animate-fade-in-up stagger-2">
                            Book Consultation
                            <ArrowRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
