import React from "react";

// --- Data Arrays ---

const teamMembers = [
    {
        id: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS6EvpvDqL2UL5fq0JIfbwRB1ShX3PlV2IwjyERGTR54Inwevo4llS3p5LN7k0nSDmaAjoOnQtLl3gXukS4JspIH6lNhQQLtbvdG1xb4rhr5Ol05OvmbWU_uk9sD_ciZFBL5XqyUk2_lBEzAn83215H1vovTyiYL1wXGQ4nW9abLPBz5ndrxWaAY2xU5Co_dyu2g5VJtRceYDcvcinfinGgHf-s_xtQqFGnyvVNDsTpxdMxUCP8hkgDIdlhhv12rmQugXbgqCQzdU",
        name: "Ethan Carter",
        title: "CEO",
        description: "Visionary leader with a passion for innovation.",
    },
    {
        id: 2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATCkkkUXvx0jDBOGXrNcsQ3UZw2c7c6_BspipVnncW3vEWst52m6iY4_6BFdgTVTxBB9tc7D2de_H-vlLnUWTR16vuERwY8bJ2sZGuxE12eZhfmloznjW49ClqETsq3YgTi3To1y78O0HddOZ-HJgftyD8iID1eVOF7UYFw-66eww0fiBK9yuHBjcO93cz6TJbYhhIRbX_mk67Vp-qeKVKxDSc2uy8Kgk4BYRt6lZ68-PNucqHpMxJjXj-IwPhYUM0bhRArkJTEk4",
        name: "Olivia Bennett",
        title: "Lead Developer",
        description:
            "Expert in full-stack development with a focus on performance.",
    },
    {
        id: 3,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwA-sPF4NXZVSB6hIcywkECDCypsq5FFk2lbqEmM89_9XSg7B966i09BjIgD0VyfwRvA7wDTlfeHRROeVgv6Tw13Y8vwC6C9ROHBm1_pibnyAvfeZv90BCCIuuhMalpn8myVg2zbEjPx5ryclKu5pcm1ZObdlPxgvqlSFPM5fL72VdQA_odZHhhBxl-lJUEtV3n1F-QfLxW7F3XBTyOiTLBJYTY8mbR9EVB37pYu-JByGG55GCTDRb-RxShUJDB4EvzaUbJ7iWiYg",
        name: "Noah Thompson",
        title: "UX/UI Designer",
        description: "Crafts intuitive and visually appealing user interfaces.",
    },
    {
        id: 4,
        image: "https://via.placeholder.com/150/d0d0d0/333333?text=Sophia+Lee", // Placeholder for additional member
        name: "Sophia Lee",
        title: "Marketing Specialist",
        description: "Drives strategic marketing initiatives and brand growth.",
    },
];

const coreValues = [
    {
        id: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
            </svg>
        ),
        title: "Client-Centric Approach",
        description:
            "We prioritize our clients' needs and goals, ensuring their vision is realized.",
    },
    {
        id: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
            </svg>
        ),
        title: "Technical Excellence",
        description:
            "We leverage the latest technologies and best practices to deliver high-quality solutions.",
    },
    {
        id: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path>
            </svg>
        ),
        title: "Results-Driven",
        description:
            "We are committed to achieving measurable results and exceeding client expectations.",
    },
    {
        id: 4,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-104,88A88.1,88.1,0,0,0,216,128Zm-29.66,48a8,8,0,0,0-11.32-11.32l-56-56a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,11.32,11.32L128,116.69l44.66,44.67A8,8,0,0,0,186.34,176Z"></path>
            </svg>
        ),
        title: "Continuous Improvement",
        description:
            "We constantly learn, adapt, and innovate to stay ahead in a dynamic industry.",
    },
];

const processes = [
    {
        id: 1,
        title: "Discovery & Planning",
        description: "Understanding your business goals and requirements.",
    },
    {
        id: 2,
        title: "Design & Development",
        description: "Creating a custom design and building a robust website.",
    },
    {
        id: 3,
        title: "Testing & Refinement",
        description: "Ensuring quality and making necessary adjustments.",
    },
    {
        id: 4,
        title: "Launch & Support",
        description: "Deploying the website and providing ongoing support.",
    },
];

// --- Main AboutUsPage Component ---

const AboutUsPage = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* About Innovatech Solutions Section */}
                        <section className="flex flex-wrap justify-between gap-3 p-4">
                            <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                About Innovatech Solutions
                            </h1>
                        </section>
                        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            Innovatech Solutions is a leading web development
                            agency specializing in creating innovative and
                            effective full-stack websites. Our mission is to
                            empower businesses with cutting-edge digital
                            solutions that drive growth and enhance user
                            experience. We are committed to delivering
                            exceptional results through collaboration,
                            creativity, and technical excellence.
                        </p>

                        {/* Our Team Section */}
                        <section>
                            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Our Team
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                                {teamMembers.map((member) => (
                                    <TeamMemberCard
                                        key={member.id}
                                        image={member.image}
                                        name={member.name}
                                        title={member.title}
                                        description={member.description}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Our Values Section */}
                        <section>
                            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Our Values
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                                {coreValues.map((value) => (
                                    <ValueCard
                                        key={value.id}
                                        icon={value.icon}
                                        title={value.title}
                                        description={value.description}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Our Process Section */}
                        <section>
                            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Our Process
                            </h2>
                            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                                {processes.map((process, index) => (
                                    <ProcessStep
                                        key={process.id}
                                        title={process.title}
                                        description={process.description}
                                        isLast={index === processes.length - 1}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Client Satisfaction Section */}
                        <section>
                            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                Client Satisfaction
                            </h2>
                            <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                                At Innovatech Solutions, client satisfaction is
                                our top priority. We strive to build long-term
                                relationships based on trust, transparency, and
                                exceptional service. Our commitment to quality
                                and client success sets us apart in the
                                industry.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamMemberCard = ({
    image,
    name,
    title,
    description,
}: {
    image: string;
    name: string;
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-col gap-3 text-center pb-3">
            <div className="px-4">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
            </div>
            <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                    {name}, {title}
                </p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

const ValueCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
            <div className="text-[#0e141b]">{icon}</div>
            <div className="flex flex-col gap-1">
                <h3 className="text-[#0e141b] text-base font-bold leading-tight">
                    {title}
                </h3>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

const ProcessStep = ({
    title,
    description,
    isLast,
}: {
    title: string;
    description: string;
    isLast?: boolean;
}) => {
    return (
        <>
            <div className="flex flex-col items-center gap-1 pt-5">
                <div className="size-2 rounded-full bg-[#0e141b]"></div>
                {!isLast && (
                    <div className="w-[1.5px] bg-[#d0dbe7] h-4 grow"></div>
                )}
            </div>
            <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                    {title}
                </p>
                <p className="text-[#4e7397] text-base font-normal leading-normal">
                    {description}
                </p>
            </div>
        </>
    );
};

export default AboutUsPage;
