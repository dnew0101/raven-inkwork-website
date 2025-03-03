"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Array of links for "Active Class" styling in the navbar.
 */
const links = [
    { href: "/", label: "Home" },
    { href: "/tattoos", label: "Tattoos" },
    { href: "/digital-art", label: "Digital Art" },
    { href: "/photography", label: "Photography" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
]

const NavLinks = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <>
            {links.map((link) => (
                <Link href={link.href} key={link.href}
                className={`${
                    pathname === link.href ? "border-b border-neutral-100" : ""}
                    hover:opacity-80 transition-opacity duration-300`}>
                {link.label}
                </Link>
            ))}
        </>
    );
};

export default NavLinks;