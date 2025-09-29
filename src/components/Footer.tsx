import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com", label: "GitHub", icon: Github },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container-width">
        <div className="px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Logo and Tagline */}
            <div className="space-y-3">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                  <img 
                    src={logo} 
                    alt="a6n logo" 
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor) contrast(1.3)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-subtle mix-blend-overlay" />
                </div>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">a6n</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Work smarter with your AI crew.
              </p>
            </div>

            {/* Right - Links */}
            <div className="flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-base"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 a6n. Automation that empowers teams.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;