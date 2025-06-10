import React from "react";

const TechCraftHomePage = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header Component */}
                {/* <Header /> */}

                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Hero Section Component */}
                        <HeroSection />

                        {/* Featured Projects Section */}
                        <section>
                            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Featured Projects
                            </h2>
                            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                <div className="flex items-stretch p-4 gap-3">
                                    <ProjectCard
                                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBw5WtS2t23fFBO91rsuDYX6FW0f0rz4nTknoogiZ2Kfj54Hip8ql1mt2Dxuyxr2unRMzWZQskCQEDGj5y4V9PfxL9IB5P4HO4WIPKSwAhhMVU4L_nl5vlJK1DMrh65UGjW0TZOm7PAIYF69ehVJWAfeAlE2tFbsKog4pekHZq8-xxr0amHHh9GGeYGweZFerkpt7KKgJFYmmS9YoMcl_xjeXize_zAED7W5Pk8Y7ZOGZ-g5qhw6tqYBI09heBFGcJjBWd2lU7_BW4"
                                        title="E-commerce Platform for Local Artisans"
                                        description="A platform connecting local artisans with a global market."
                                    />
                                    <ProjectCard
                                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8kZx_8AkxrR5TY7D6LnXxmSOfl-zbewTlEqRmhU1zjTjMC-5cIkTKiKpr7Pn4ymI0yJMeSdEhvH-QfJ1_EFfeS9pQRhGfqKgAPRTskIPvzE2VHlHVF50QnZx--_AgToNsPCkpgt05hYdTbCOGVg68mcUhAoJG5CpL393OjvlLTZr0M7HoiH5Sg1MxImnGQ7li13ic890jL7FtvQPkipSPHXvoh6sVKRBPU_TzxMgmPDdqF7gmqoebHzPmMvjBiIihbP3Q0p4ayU"
                                        title="Interactive Portfolio for Creative Professionals"
                                        description="Showcasing creative work with interactive elements."
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Client Testimonials Section */}
                        <section>
                            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Client Testimonials
                            </h2>
                            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                <div className="flex items-stretch p-4 gap-3">
                                    <TestimonialCard
                                        author="Sarah M., Founder of Artisan Goods"
                                        quote="TechCraft transformed our online presence, resulting in a 30% increase in sales."
                                    />
                                    <TestimonialCard
                                        author="David L., Creative Director at Design Studio"
                                        quote="Their innovative approach and attention to detail exceeded our expectations."
                                    />
                                    <TestimonialCard
                                        author="Emily R., CEO of Business Solutions"
                                        quote="The custom application they built has revolutionized our workflow."
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Core Values Section */}
                        <section>
                            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Our Core Values
                            </h2>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                <ValueCard
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                                        </svg>
                                    }
                                    title="Quality Code"
                                    description="We write clean, efficient, and maintainable code."
                                />
                                <ValueCard
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                                        </svg>
                                    }
                                    title="User-Centric Design"
                                    description="We prioritize user experience in every design decision."
                                />
                                <ValueCard
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                        </svg>
                                    }
                                    title="Timely Delivery"
                                    description="We deliver projects on time and within budget."
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-Components ---

const HeroSection = () => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa8BXedPQiZRvtnPVBzHTxxOKLVW1wKrdAfNEoORujPM5AonVpAjX-3AjVZJCQPByDbuloI5z8RnhsdJ6WiHnM2K2dCwHT2UWnZNhD0HHceLXCY7ixMrymGYRiXzZyMI4JmoX0m5fA0LRvOQ7_30l4MXg61kowFwlYc9YsTVGp8lQaUjGczGlpW1uXhEzdlmhMwlxlrh-tDPMNMPUzhJ4ZK9m-PL3hCCDHgkP77vWG1_f92dIL7ly_J3alou5R5oqCi-VznUSZKzw")',
                    }}
                >
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            Crafting Digital Excellence
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            We specialize in full-stack website development,
                            creating robust and scalable solutions tailored to
                            your business needs.
                        </h2>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#b2cbe5] text-[#101418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Get a Quote</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    title,
    description,
}) => {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                style={{ backgroundImage: `url("${image}")` }}
            ></div>
            <div>
                <p className="text-[#101418] text-base font-medium leading-normal">
                    {title}
                </p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

type TestimonialCardProps = {
    author: string;
    quote: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ author, quote }) => {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div>
                <p className="text-[#101418] text-base font-medium leading-normal">
                    {author}
                </p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">
                    &quot;{quote}&quot;
                </p>
            </div>
        </div>
    );
};

type ValueCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dbe2] bg-gray-50 p-4 flex-col">
            <div className="text-[#101418]">{icon}</div>
            <div className="flex flex-col gap-1">
                <h2 className="text-[#101418] text-base font-bold leading-tight">
                    {title}
                </h2>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default TechCraftHomePage;
