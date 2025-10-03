import {Card} from "@/components/ui/card";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import {caseStudies} from "@/data/caseStudies";

const CaseStudies = () => {
    return (
        <main className="pt-16">
            <section className="py-20 md:py-24 lg:py-32 bg-section-primary">
                <div className="container-width">
                    <div className="px-4 md:px-6 lg:px-8">
                        {/* Header */}
                        <div className="mb-12 md:mb-16 space-y-4 max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-left">
                                Explore All Case Studies
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground text-left">
                                Discover how a6n AI transforms workflows across every department in your organization.
                            </p>
                        </div>

                        {/* Case Studies Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {caseStudies.map((caseStudy) => {
                                const Icon = caseStudy.icon;
                                return (
                                    <Link
                                        key={caseStudy.id}
                                        to={`/case-studies/${caseStudy.id}`}
                                        className="group"
                                    >
                                        <Card
                                            className={`
                                                h-full min-h-[200px] border border-border/50 bg-card/30 backdrop-blur-sm 
                                                hover:bg-card/50 hover:border-border hover:shadow-lg
                                                transition-all duration-300 ease-out cursor-pointer
                                                bg-gradient-to-br ${caseStudy.color} ${caseStudy.hoverColor}
                                            `}
                                        >
                                            <div className="p-6 md:p-8 flex flex-col h-full gap-4">
                                                {/* Department Tag */}
                                                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold ${caseStudy.tagColor}`}>
                                                    {caseStudy.department}
                                                </span>

                                                {/* Icon and Title */}
                                                <div className="flex items-start gap-4 flex-1">
                                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                                                        <Icon className="h-6 w-6 text-foreground/80"/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-2">
                                                            {caseStudy.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {caseStudy.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Arrow */}
                                                <div className="flex justify-end">
                                                    <ArrowRight
                                                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"/>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudies;
