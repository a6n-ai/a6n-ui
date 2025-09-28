import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-16 min-h-screen bg-background">
        <div className="section-padding">
          <div className="container-width">
            <div className="px-6 md:px-10 text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Post not found</h1>
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <main className="pt-16 min-h-screen bg-background">
      <article className="section-padding">
        <div className="container-width">
          <div className="px-6 md:px-10">
            {/* Back Navigation */}
            <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="space-y-6 mb-12 animate-fade-in">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="text-sm bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none animate-fade-in-up stagger-1">
                <ReactMarkdown 
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold text-foreground mt-8 mb-4">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>,
                    p: ({children}) => <p className="text-base text-muted-foreground leading-relaxed mb-4">{children}</p>,
                    ul: ({children}) => <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">{children}</ol>,
                    li: ({children}) => <li className="text-base leading-relaxed">{children}</li>,
                    code: ({children}) => <code className="px-2 py-1 bg-muted text-sm rounded">{children}</code>,
                    pre: ({children}) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4"><code className="text-sm">{children}</code></pre>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">{children}</blockquote>,
                    a: ({href, children}) => <Link to={href || '#'} className="text-primary hover:text-primary-hover underline">{children}</Link>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground flex items-center">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share this article:
                    </span>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                  
                  <Link to="/blog">
                    <Button variant="outline">
                      More Articles
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;