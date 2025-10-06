import {useMemo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import logo from "@/assets/logo.svg";
import { Navbar01, type Navbar01NavLink } from "@/components/ui/navbar";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks: Navbar01NavLink[] = useMemo(() => [
        { href: "/", label: "Home", active: location.pathname === "/" },
        { href: "/use-cases", label: "Use Cases", active: location.pathname === "/use-cases" },
        { href: "/blog", label: "Blog", active: location.pathname === "/blog" },
        { href: "/about", label: "About", active: location.pathname === "/about" },
        { href: "/contact", label: "Contact", active: location.pathname === "/contact" },
    ], [location.pathname]);

    return (
        <Navbar01
            logo={
                <div className="flex items-center gap-2 group">
                    <img 
                        src={logo} 
                        alt="a6n logo" 
                        className="h-8 w-8 font-bold transition-all duration-300"
                        style={{
                            filter: 'brightness(0) saturate(100%)',
                        }}
                    />
                    <style>{`
                        .group:hover img {
                            filter: brightness(0) saturate(100%) invert(56%) sepia(91%) saturate(3684%) hue-rotate(181deg) brightness(94%) contrast(95%) !important;
                        }
                    `}</style>
                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        a6n
                    </span>
                </div>
            }
            navigationLinks={navLinks}
            signInText="Sign In"
            onSignInClick={() => navigate('/signin')}
            ctaText="Get Started"
            onCtaClick={() => navigate('/contact')}
        />
    );
};

export default Header;
