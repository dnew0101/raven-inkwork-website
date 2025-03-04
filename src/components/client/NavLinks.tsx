"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
    getClicked: boolean,
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

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

const NavLinks = ({ getClicked, setClicked }: NavLinksProps) => {
    const pathname = usePathname();
    console.log(pathname);

    const handleClick = () => {
        setClicked(!getClicked)
    }

    /**
     * This is the mobile menu container. When the button is clicked, the menu will appear.
     * Maps over each link item in the array and returns Next Link component with custom styles/spacing.
     */
    return (
        <div className="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:gap-3 xl:gap-4 lg:items-center">
            {links.map((link) => (
                <div 
                    key={link.href}
                    className="flex flex-col justify-center items-center h-8 py-8
                    lg:flex-row lg:py-0 lg:px-0 lg:gap-4 lg:h-auto">
                        <div>
                            <Link 
                            title={link.label} 
                            href={link.href} 
                            className={`${
                                pathname === link.href ? "border-b-2 border-neutral-400" : ""}
                                hover:opacity-80 transition-opacity duration-300
                                text-3xl lg:text-base`}
                                onClick={handleClick}>
                            {link.label}
                            </Link>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;