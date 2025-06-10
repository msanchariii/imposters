import { navLinks } from "@/lib/constants";

import Link from "next/link";

const NavLink = ({
    href,
    children,
    className = "",
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <Link
            className={`text-[#0e141b] text-sm font-medium leading-normal ${className}`}
            href={href}
        >
            {children}
        </Link>
    );
};

const Header = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#0e141b]">
                <div className="size-4">
                    {/* Logo SVG */}
                    <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <Link
                    href="/"
                    className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]"
                >
                    Innovatech Solutions
                </Link>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href}>
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                <Link
                    href={"/quote"}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#197fe5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Get a Quote</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
