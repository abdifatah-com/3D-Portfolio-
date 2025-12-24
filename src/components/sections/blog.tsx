"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import { config } from "@/data/config";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BlogPost {
    id: number;
    title: string;
    description: string;
    content: string[];
    date: string;
    readTime: string;
    tags: string[];
    category: string;
    gradient: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Web Development: AI-Powered Coding",
        description: "Exploring how artificial intelligence is revolutionizing the way we write code and build applications. From GitHub Copilot to ChatGPT, AI tools are transforming developer workflows.",
        content: [
            "Artificial Intelligence is no longer just a buzzword in the tech industry—it's actively reshaping how we approach software development. AI-powered coding assistants like GitHub Copilot, ChatGPT, and Amazon CodeWhisperer are becoming indispensable tools in modern development workflows.",
            "These tools leverage large language models trained on billions of lines of code to provide intelligent code suggestions, auto-completion, and even generate entire functions based on natural language descriptions. This shift is fundamentally changing the developer experience.",
            "However, AI coding tools aren't replacing developers—they're augmenting their capabilities. Developers still need to understand the code, make architectural decisions, and ensure quality. AI simply accelerates the mundane tasks, allowing developers to focus on solving complex problems.",
            "Looking ahead, we can expect AI to become even more integrated into our development environments. From automated testing to intelligent debugging, the future of web development is undoubtedly AI-powered.",
            "The key is learning to work alongside these tools effectively, understanding their limitations, and using them to enhance—not replace—human creativity and problem-solving skills."
        ],
        date: "Dec 20, 2024",
        readTime: "5 min read",
        tags: ["AI", "Web Dev", "Future Tech"],
        category: "Technology",
        gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
        id: 2,
        title: "Mastering React Server Components",
        description: "Deep dive into React Server Components and how they're changing the game for Next.js applications. Learn best practices and performance optimization techniques.",
        content: [
            "React Server Components (RSC) represent a paradigm shift in how we build React applications. Unlike traditional client-side rendering, RSCs allow components to render on the server, sending only the necessary HTML to the client.",
            "This approach offers significant performance benefits: reduced bundle sizes, faster initial page loads, and improved SEO. Server Components can directly access backend resources like databases and file systems without exposing sensitive data to the client.",
            "Next.js 13+ has fully embraced Server Components as the default rendering strategy. The App Router makes it seamless to mix Server and Client Components, giving developers fine-grained control over where code executes.",
            "Best practices include keeping Server Components as the default, only using 'use client' when necessary for interactivity, and leveraging streaming and suspense for optimal loading experiences.",
            "As the React ecosystem continues to evolve, Server Components are becoming the foundation for building fast, scalable, and maintainable web applications."
        ],
        date: "Dec 18, 2024",
        readTime: "8 min read",
        tags: ["React", "Next.js", "Performance"],
        category: "Frontend",
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
        id: 3,
        title: "Building Scalable Design Systems",
        description: "A comprehensive guide to creating and maintaining design systems that scale with your organization. Learn about component libraries, tokens, and documentation.",
        content: [
            "Design systems are the backbone of consistent, scalable user interfaces. They provide a single source of truth for design decisions, components, and patterns across an entire organization.",
            "A well-crafted design system includes design tokens (colors, spacing, typography), reusable components, clear documentation, and accessibility guidelines. Tools like Figma, Storybook, and Chromatic make building and maintaining design systems more manageable.",
            "The key to a successful design system is collaboration between designers and developers. Regular sync meetings, shared component libraries, and automated visual regression testing ensure consistency across teams.",
            "Documentation is crucial—without clear guidelines on when and how to use components, adoption suffers. Include code examples, accessibility notes, and visual demonstrations for every component.",
            "Remember, a design system is never 'done.' It evolves with your product, requiring ongoing maintenance, versioning, and community contribution to remain effective."
        ],
        date: "Dec 15, 2024",
        readTime: "10 min read",
        tags: ["Design Systems", "UI/UX", "Components"],
        category: "Design",
        gradient: "from-green-500 via-teal-500 to-cyan-500",
    },
    {
        id: 4,
        title: "TypeScript Best Practices in 2024",
        description: "Essential TypeScript patterns and practices every developer should know. From advanced types to performance optimization and type safety.",
        content: [
            "TypeScript has become the de facto standard for building robust JavaScript applications. Its static typing catches errors at compile time, improves code quality, and enhances developer experience with intelligent autocomplete.",
            "Modern TypeScript best practices emphasize strict mode, proper type inference, and avoiding 'any' types. Use utility types like Partial, Pick, and Omit to create flexible, reusable type definitions.",
            "Advanced patterns include discriminated unions for type-safe state management, conditional types for complex type transformations, and template literal types for string manipulation at the type level.",
            "Performance matters too—excessive type complexity can slow down the TypeScript compiler. Keep types simple when possible, use type aliases for readability, and leverage incremental compilation for large projects.",
            "The TypeScript ecosystem continues to grow with better tooling, faster compilation, and new language features. Staying current with best practices ensures your codebase remains maintainable and performant."
        ],
        date: "Dec 12, 2024",
        readTime: "6 min read",
        tags: ["TypeScript", "Best Practices", "Code Quality"],
        category: "Programming",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
        id: 5,
        title: "Web Performance Optimization Techniques",
        description: "Boost your website's speed with these proven optimization techniques. Learn about lazy loading, code splitting, and modern performance APIs.",
        content: [
            "Web performance directly impacts user experience, conversion rates, and SEO rankings. Even a 100ms delay can significantly affect user engagement and business metrics.",
            "Core Web Vitals—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—are now critical ranking factors. Optimizing these metrics requires a holistic approach to performance.",
            "Techniques like code splitting, lazy loading images, and using modern image formats (WebP, AVIF) can dramatically reduce initial load times. Implement resource hints (preload, prefetch) to prioritize critical assets.",
            "Leverage browser caching, CDNs, and compression (Brotli, Gzip) to minimize data transfer. Use performance monitoring tools like Lighthouse, WebPageTest, and Chrome DevTools to identify bottlenecks.",
            "Remember: performance is a feature, not an afterthought. Build performance budgets into your development process and continuously monitor real-user metrics to maintain fast, responsive experiences."
        ],
        date: "Dec 10, 2024",
        readTime: "7 min read",
        tags: ["Performance", "Optimization", "Web Vitals"],
        category: "Performance",
        gradient: "from-pink-500 via-rose-500 to-red-500",
    },
    {
        id: 6,
        title: "The Rise of Edge Computing",
        description: "Understanding edge computing and its impact on modern web applications. Explore edge functions, CDNs, and distributed architectures.",
        content: [
            "Edge computing brings computation and data storage closer to users, reducing latency and improving performance. Instead of routing every request to a centralized server, edge networks process requests at geographically distributed locations.",
            "Platforms like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge enable developers to run code at the edge. This architecture is perfect for personalization, A/B testing, authentication, and dynamic content generation.",
            "Edge computing shines in scenarios requiring low latency—real-time applications, gaming, IoT devices, and global SaaS platforms. By processing data closer to the source, edge computing reduces round-trip times significantly.",
            "However, edge computing comes with trade-offs: limited execution time, restricted runtime environments, and higher complexity in debugging and monitoring. Choose edge computing when latency is critical, not as a default.",
            "As 5G networks expand and edge infrastructure matures, we'll see edge computing become increasingly important for delivering fast, responsive web experiences worldwide."
        ],
        date: "Dec 8, 2024",
        readTime: "9 min read",
        tags: ["Edge Computing", "Cloud", "Architecture"],
        category: "Infrastructure",
        gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    },
];

const BlogSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const categories = Array.from(new Set(blogPosts.map(post => post.category)));

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = !selectedCategory || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
        setIsDialogOpen(true);
    };

    return (
        <section id="blog" className="min-h-screen max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <Link href={"#blog"}>
                <h2
                    className={cn(
                        "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 pb-8",
                        "bg-gradient-to-b from-black/80 to-black/50",
                        "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
                    )}
                >
                    TECH INSIGHTS <br />
                    & ARTICLES
                </h2>
            </Link>

            <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                Exploring the latest in web development, design, and technology.
                Stay updated with cutting-edge insights and best practices.
            </p>

            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <Input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/70 dark:bg-black/70 backdrop-blur-sm border-slate-300 dark:border-slate-700"
                    />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    <Button
                        variant={selectedCategory === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(null)}
                        className="rounded-full"
                    >
                        All
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className="rounded-full"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                    <Card
                        key={post.id}
                        onClick={() => handlePostClick(post)}
                        className={cn(
                            "group relative overflow-hidden",
                            "bg-white/70 dark:bg-black/70 backdrop-blur-sm",
                            "border-slate-200 dark:border-slate-800",
                            "hover:shadow-2xl hover:scale-[1.02] transition-all duration-300",
                            "cursor-pointer"
                        )}
                        style={{
                            animationDelay: `${index * 100}ms`,
                        }}
                    >
                        {/* Gradient Header */}
                        <div className={cn(
                            "h-2 bg-gradient-to-r",
                            post.gradient,
                            "group-hover:h-3 transition-all duration-300"
                        )} />

                        <CardHeader className="space-y-3">
                            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                                {post.title}
                            </CardTitle>

                            <CardDescription className="line-clamp-3">
                                {post.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Read More Button */}
                            <Button
                                variant="ghost"
                                className="w-full group/btn justify-between"
                            >
                                <span>Read Article</span>
                                <ArrowRight
                                    size={16}
                                    className="group-hover/btn:translate-x-1 transition-transform"
                                />
                            </Button>
                        </CardContent>

                        {/* Animated Background Gradient */}
                        <div
                            className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                                "bg-gradient-to-br",
                                post.gradient,
                                "pointer-events-none"
                            )}
                        />
                    </Card>
                ))}
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        No articles found matching your search.
                    </p>
                </div>
            )}

            {/* View All Button */}
            <div className="mt-12 text-center">
                <Button
                    size="lg"
                    className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                    View All Articles
                    <ArrowRight
                        size={20}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                </Button>
            </div>

            {/* Blog Post Modal */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] bg-white/95 dark:bg-black/95 backdrop-blur-md">
                    {selectedPost && (
                        <>
                            <DialogHeader>
                                <div className={cn("h-1 bg-gradient-to-r mb-4 rounded-full", selectedPost.gradient)} />
                                <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                                    {selectedPost.title}
                                </DialogTitle>
                                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 pt-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{selectedPost.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{selectedPost.readTime}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-3">
                                    {selectedPost.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </DialogHeader>

                            <ScrollArea className="h-[50vh] pr-4">
                                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                                    {selectedPost.content.map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed text-base">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Social Media Links */}
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                                    <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
                                        Connect with me
                                    </h3>
                                    <div className="flex gap-4">
                                        <Link
                                            href={config.social.github}
                                            target="_blank"
                                            className="group"
                                        >
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="gap-2 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                            >
                                                <SiGithub size={20} />
                                                <span>GitHub</span>
                                            </Button>
                                        </Link>
                                        <Link
                                            href={config.social.linkedin}
                                            target="_blank"
                                            className="group"
                                        >
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="gap-2 hover:bg-blue-600 hover:text-white transition-all"
                                            >
                                                <SiLinkedin size={20} />
                                                <span>LinkedIn</span>
                                            </Button>
                                        </Link>
                                        <Link
                                            href={config.social.facebook}
                                            target="_blank"
                                            className="group"
                                        >
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="gap-2 hover:bg-blue-500 hover:text-white transition-all"
                                            >
                                                <SiFacebook size={20} />
                                                <span>Facebook</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollArea>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default BlogSection;
