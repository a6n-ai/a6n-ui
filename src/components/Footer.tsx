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
        <div className="px-6 md:px-10 py-16">
          {/* Large a6n branding */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <img
                src={logo}
                alt="a6n logo"
                className="h-16 w-16 transition-all duration-300"
                style={{
                  filter: "brightness(0) saturate(100%)",
                }}
              />
              <style>{`
                                .group:hover img {
                                    filter: brightness(0) saturate(100%) invert(56%) sepia(91%) saturate(3684%) hue-rotate(181deg) brightness(94%) contrast(95%) !important;
                                }
                            `}</style>
              <h2 className="text-6xl md:text-7xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                a6n
              </h2>
            </Link>
            <p className="text-lg text-muted-foreground mt-4">
              Work smarter with your AI crew.
            </p>
          </div>

          {/* Links and Social */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={24}
                    className="transition-all duration-300"
                    style={{
                      filter: "brightness(0) saturate(100%)",
                    }}
                  />
                  <style>{`
                                        .group:hover svg {
                                            filter: brightness(0) saturate(100%) invert(56%) sepia(91%) saturate(3684%) hue-rotate(181deg) brightness(94%) contrast(95%) !important;
                                        }
                                    `}</style>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 a6n. Automation that empowers teams.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
