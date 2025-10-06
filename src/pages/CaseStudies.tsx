import {Card} from "@/components/ui/card";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import {caseStudies} from "@/data/caseStudies";
import {useState} from "react";

const CaseStudies = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    const departments = ["All", ...Array.from(new Set(caseStudies.map(cs => cs.department)))];

    const filteredCaseStudies = selectedFilter === "All"
        ? caseStudies
        : caseStudies.filter(cs => cs.department === selectedFilter);

    return (
        <main className="pt-16">
            <section className="py-20 md:py-24 lg:py-32 bg-section-primary">
                <div className="container-width">
                    <div className="px-4 md:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12 md:mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
                                Explore All Case Studies
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Discover how a6n AI transforms workflows across every department in your organization.
                            </p>

                            {/* Filter Tabs */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {departments.map((dept) => (
                                    <button
                                        key={dept}
                                        onClick={() => setSelectedFilter(dept)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            selectedFilter === dept
                                                ? "bg-primary text-primary-foreground shadow-lg"
                                                : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                                        }`}
                                    >
                                        {dept}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Case Studies Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredCaseStudies.map((caseStudy) => {
                                const Icon = caseStudy.icon;
                                return (
                                    <Link
                                        key={caseStudy.id}
                                        to={`/case-studies/${caseStudy.id}`}
                                        className="group"
                                    >
                                        <Card
                                            className={`
                                                h-[320px] border border-border/50 bg-card/30 backdrop-blur-sm 
                                                hover:bg-card/50 hover:border-border hover:shadow-lg
                                                transition-all duration-300 ease-out cursor-pointer
                                                bg-gradient-to-br ${caseStudy.color} ${caseStudy.hoverColor}
                                                overflow-hidden flex flex-col
                                            `}
                                        >
                                            {/* Image placeholder with gradient */}
                                            <div
                                                className={`h-40 bg-gradient-to-br ${caseStudy.color} border-b border-border/30 flex items-center justify-center`}>
                                                <Icon className="h-16 w-16 text-foreground/40"/>
                                            </div>

                                            <div className="p-5 flex flex-col flex-1 relative">
                                                {/* Arrow in top right */}
                                                <div className="absolute top-4 right-4">
                                                    <ArrowRight
                                                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"/>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-base font-semibold text-foreground leading-tight mb-2 pr-8">
                                                    {caseStudy.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    {caseStudy.description}
                                                </p>

                                                {/* Department Tag at bottom */}
                                                <div className="mt-auto">
                                                    <span
                                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${caseStudy.tagColor}`}>
                                                        {caseStudy.department}
                                                    </span>
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

            {/* Share Your Use Case Section */}
            <section className="py-20 md:py-24 bg-section-secondary">
                <div className="container-width">
                    <div className="px-4 md:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Share your use case
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Have you discovered an amazing way to use a6n AI? Share your use case and help others unlock
                            new possibilities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                            <Card className="p-6 text-left border-border/50 bg-card/50">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="h-5 w-5 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Get featured</h3>
                                        <p className="text-sm text-muted-foreground">Showcase your use case in our
                                            library</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 text-left border-border/50 bg-card/50">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="h-5 w-5 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Help others</h3>
                                        <p className="text-sm text-muted-foreground">Inspire teams to unlock new
                                            possibilities</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 text-left border-border/50 bg-card/50">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="h-5 w-5 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Earn recognition</h3>
                                        <p className="text-sm text-muted-foreground">Join our community of
                                            innovators</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Link to="/contact">
                            <button
                                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                                Submit Your Use Case
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudies;
