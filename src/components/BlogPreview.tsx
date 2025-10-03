import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import {ArrowUpRight, Calendar} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {blogPosts} from "@/data/blogPosts";

const BlogPreview = () => {
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

    // Get latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section ref={sectionRef} className="section-padding bg-section-secondary">
            <div className="container-width">
                <div className="px-6 md:px-10">
                    {/* Header */}
                    <div className="space-y-4 mb-12 max-w-3xl">
                        <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-left ${
                            isVisible ? "animate-fade-in opacity-0" : ""
                        }`}>
                            Automation Insights
                        </h2>
                        <p className={`text-base md:text-lg text-muted-foreground text-left ${
                            isVisible ? "animate-fade-in opacity-0 stagger-1" : ""
                        }`}>
                            Explore tips, trends, and stories on AI-driven automation.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestPosts.map((post, index) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="group"
                            >
                                <Card
                                    className={`h-full notion-card hover:border-primary/30 transition-all duration-base ${
                                        isVisible ? "animate-fade-in-up opacity-0" : ""
                                    }`}
                                    style={{animationDelay: `${index * 0.2}s`}}
                                >
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center text-xs text-muted-foreground">
                                                <Calendar className="h-3 w-3 mr-1"/>
                                                {post.date}
                                            </div>
                                            <ArrowUpRight
                                                className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"/>
                                        </div>
                                        <CardTitle
                                            className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                            {post.excerpt}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* View All Link */}
                    <div className="text-center mt-12">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors group"
                        >
                            View all posts
                            <ArrowUpRight
                                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
