import * as React from "react";
import {Link, type LinkProps} from "react-router-dom";
import {cn} from "@/lib/utils";

export type AccentLinkProps = LinkProps & {
    className?: string;
    underlineOnHover?: boolean;
};

export const AccentLink = React.forwardRef<HTMLAnchorElement, AccentLinkProps>(
    ({className, underlineOnHover = true, ...props}, ref) => {
        const base = "inline-flex items-center gap-1 transition-colors outline-none";
        const hover = underlineOnHover ? "hover:underline underline-offset-4" : "";
        const states = [
            // Normal/hover
            "text-primary hover:text-primary/80",
            // Focus-visible and active (mouse down/touch) -> accent color + underline
            "focus-visible:underline focus-visible:text-accent-foreground",
            "active:underline active:text-accent-foreground",
        ].join(" ");

        return (
            <Link ref={ref} {...props} className={cn(base, hover, states, className)}/>
        );
    }
);

AccentLink.displayName = "AccentLink";

export default AccentLink;
