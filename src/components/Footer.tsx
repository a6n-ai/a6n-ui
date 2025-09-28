import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

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
              <Link to="/" className="inline-block">
                <span className="text-xl font-bold text-foreground">a6n</span>
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