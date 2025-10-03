import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import {ArrowUpRight, Calendar, Clock} from "lucide-react";
import {blogPosts} from "@/data/blogPosts";

const Blog = () => {
    return (
        <main className="pt-16 min-h-screen bg-background">
            <section className="section-padding">
                <div className="container-width">
                    <div className="px-6 md:px-10">
                        {/* Page Header */}
                        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
                                Automation Insights
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-in stagger-1">
                                Explore tips, trends, and stories on AI-driven automation
                            </p>
                        </div>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    to={`/blog/${post.slug}`}
                                    className="group animate-fade-in-up"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <Card
                                        className="h-full notion-card hover:border-primary/30 transition-all duration-base">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1"/>
                              {post.date}
                          </span>
                                                    <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1"/>
                                                        {post.readTime}
                          </span>
                                                </div>
                                                <ArrowUpRight
                                                    className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"/>
                                            </div>
                                            <CardTitle
                                                className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {post.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription
                                                className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                                {post.excerpt}
                                            </CardDescription>
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.slice(0, 2).map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="secondary"
                                                            className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                          by {post.author}
                        </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
