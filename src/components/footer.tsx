import React from "react";
import Link from "next/link";
import { footerLinks, navLinks } from "@/lib/constants";
// import { navLinks, footerLinks} from ''; // Import navigation data

const Footer = () => {
    return (
        <footer className="bg-[#0e141b] text-slate-300 py-8 px-10 mt-auto">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Company Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Link
                        href="/"
                        className="text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em] mb-2"
                    >
                        Innovatech Solutions
                    </Link>
                    <p className="text-sm">
                        Innovation Drive, Techville, CA 90210
                    </p>
                    <p className="text-sm">contact@innovatech.com</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                </div>

                {/* Main Navigation (reusing navLinks) */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-slate-50 font-semibold mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-center md:text-left">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <NavLinkFooter href={link.href}>
                                    {link.name}
                                </NavLinkFooter>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Specific Links */}
                {footerLinks.length > 0 && (
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-slate-50 font-semibold mb-3">
                            Legal
                        </h3>
                        <ul className="space-y-2 text-center md:text-left">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <NavLinkFooter href={link.href}>
                                        {link.name}
                                    </NavLinkFooter>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Social Media (Placeholder) */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-slate-50 font-semibold mb-3">
                        Connect With Us
                    </h3>
                    <div className="flex gap-4">
                        {/* Replace with actual social media icons/links */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-[#197fe5] transition-colors"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.45h-1.264c-1.24 0-1.625.772-1.625 1.563V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12z"></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="hover:text-[#197fe5] transition-colors"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.13 1.195 4.92 4.92 0 0 0-8.384 4.498c-3.25-.164-6.13-1.72-8.067-4.137a4.92 4.92 0 0 0-.663 2.477c0 1.71.87 3.21 2.19 4.097A4.878 4.878 0 0 1 .9 10.84v.06c0 2.68 1.905 4.9 4.428 5.437a4.92 4.92 0 0 1-2.223.084 4.925 4.925 0 0 0 4.6 3.42A9.846 9.846 0 0 1 0 19.54c1.6.974 3.498 1.545 5.565 1.545 6.677 0 10.316-5.52 10.316-10.315 0-.157-.003-.312-.01-.466A7.447 7.447 0 0 0 24 4.557z"></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="hover:text-[#197fe5] transition-colors"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.37H3.84V9.69h3.28v10.68zM5.48 8.3c-1.12 0-2.02-.91-2.02-2.04 0-1.12.9-2.04 2.02-2.04 1.13 0 2.04.92 2.02 2.04 0 1.13-.91 2.04-2.02 2.04zm14.73 12.07h-3.27v-5.46c0-1.3-.02-2.98-1.82-2.98-1.83 0-2.11-1.42-2.11-2.88v-2.52h-3.28v10.68h3.27v-4.9c0-.12.03-.23.06-.32.09-.27.29-.58.63-.78.33-.2.78-.32 1.25-.32 1.34 0 2.22 1.05 2.22 2.58v5.74z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-slate-400 mt-8 border-t border-slate-700 pt-4">
                &copy; {new Date().getFullYear()} Innovatech Solutions. All
                rights reserved.
            </div>
        </footer>
    );
};

// Reusable NavLink specifically for the footer if its styling differs
const NavLinkFooter = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link
            className="text-slate-300 hover:text-[#197fe5] transition-colors text-sm font-normal leading-normal"
            href={href}
        >
            {children}
        </Link>
    );
};

export default Footer;
