import {useMemo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import logo from "@/assets/logo.svg";
import { Navbar01, type Navbar01NavLink } from "@/components/ui/navbar";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks: Navbar01NavLink[] = useMemo(() => [
        { href: "/", label: "Home", active: location.pathname === "/" },
        { href: "/solutions", label: "Solutions", active: location.pathname === "/solutions" },
        { href: "/blog", label: "Blog", active: location.pathname === "/blog" },
        { href: "/about", label: "About", active: location.pathname === "/about" },
        { href: "/contact", label: "Contact", active: location.pathname === "/contact" },
    ], [location.pathname]);

    return (
        <Navbar01
            logo={<img src={logo} alt="a6n logo" className="h-8 w-8" />}
            navigationLinks={navLinks}
            signInText="Sign In"
            onSignInClick={() => navigate('/signin')}
            ctaText="Get Started"
            onCtaClick={() => navigate('/contact')}
        />
    );
};

export default Header;
