import {useParams, Link, Navigate} from "react-router-dom";
import {caseStudies} from "@/data/caseStudies";
import {ArrowLeft, CheckCircle2} from "lucide-react";
import {Card} from "@/components/ui/card";

const CaseStudyDetail = () => {
    const {id} = useParams<{ id: string }>();
    const caseStudy = caseStudies.find(cs => cs.id === id);

    if (!caseStudy) {
        return <Navigate to="/case-studies" replace/>;
    }

    const Icon = caseStudy.icon;

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className={`py-20 md:py-24 lg:py-32 bg-gradient-to-br ${caseStudy.color}`}>
                <div className="container-width">
                    <div className="px-4 md:px-6 lg:px-8">
                        {/* Back Button */}
                        <Link
                            to="/case-studies"
                            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4"/>
                            Back to Case Studies
                        </Link>

                        {/* Header */}
                        <div className="max-w-4xl">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${caseStudy.tagColor} mb-6`}>
                                {caseStudy.department}
                            </span>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground/80"/>
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                                        {caseStudy.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-muted-foreground">
                                        {caseStudy.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 md:py-24 bg-section-secondary">
                <div className="container-width">
                    <div className="px-4 md:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto space-y-12">
                            {/* Overview */}
                            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Overview</h2>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {caseStudy.detailContent.overview}
                                </p>
                            </Card>

                            {/* Challenge */}
                            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The Challenge</h2>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {caseStudy.detailContent.challenge}
                                </p>
                            </Card>

                            {/* Solution */}
                            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Solution</h2>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {caseStudy.detailContent.solution}
                                </p>
                            </Card>

                            {/* Benefits */}
                            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
                                <ul className="space-y-4">
                                    {caseStudy.detailContent.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"/>
                                            <span className="text-base md:text-lg text-muted-foreground">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                        </div>
                    </div>
                </div>
            </section>

            {/* Share Your Use Case Section */}
            <section className="py-20 md:py-24 bg-background">
                <div className="container-width">
                    <div className="px-4 md:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Share your use case
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Have you discovered an amazing way to use a6n AI? Share your use case and help others unlock new possibilities.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
                                    <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4"/>
                                    <h3 className="font-semibold text-foreground mb-2">Get featured</h3>
                                    <p className="text-sm text-muted-foreground">Showcase in our gallery and social channels</p>
                                </Card>
                                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
                                    <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4"/>
                                    <h3 className="font-semibold text-foreground mb-2">Promote your business</h3>
                                    <p className="text-sm text-muted-foreground">Gain visibility for your brand</p>
                                </Card>
                                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
                                    <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4"/>
                                    <h3 className="font-semibold text-foreground mb-2">Earn recognition</h3>
                                    <p className="text-sm text-muted-foreground">Build your reputation in the community</p>
                                </Card>
                            </div>

                            <div className="text-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                                >
                                    Submit Your Use Case
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudyDetail;
