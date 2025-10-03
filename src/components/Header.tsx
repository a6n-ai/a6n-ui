import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Menu, Moon, Sun, X} from "lucide-react";
import logo from "@/assets/logo.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        setIsDarkMode(shouldBeDark);
        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navLinks = [
        {href: "/", label: "Home"},
        {href: "/solutions", label: "Solutions"},
        {href: "/blog", label: "Blog"},
        {href: "/about", label: "About"},
        {href: "/contact", label: "Contact"},
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-base bg-background/95 backdrop-blur-sm ${
                isScrolled ? "shadow-md border-b" : ""
            }`}
        >
            <div className="container-width">
                <div className="flex items-center justify-between h-16 px-6 md:px-10">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                            <img
                                src={logo}
                                alt="a6n logo"
                                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                                style={{
                                    filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor) contrast(1.3)',
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-subtle mix-blend-overlay"/>
                        </div>
                        <span
                            className="ml-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">a6n</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-medium transition-colors duration-base ${
                                    isActive(link.href)
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-primary"
                                } relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA and Theme Toggle */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
                        </button>
                        <Button
                            variant="default"
                            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                    >
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t animate-fade-in">
                    <nav className="flex flex-col py-4 px-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`py-3 text-sm font-medium transition-colors ${
                                    isActive(link.href)
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center justify-between mt-4 gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
                            </button>
                            <Button
                                variant="default"
                                className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
                            >
                                Get Started
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
