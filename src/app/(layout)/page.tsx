import Link from "next/link";
import React from "react";

const TechCraftHomePage = () => {
    return (
        <div className="px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
            <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
                {/* Hero Section Component */}
                <HeroSection />

                {/* Featured Projects Section */}
                <section className="py-8">
                    <h2 className="text-[#101418] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
                        Featured Projects
                    </h2>
                    <div className="flex overflow-x-auto -mx-4 pb-4">
                        <div className="flex items-stretch p-4 gap-6 min-w-full md:min-w-0">
                            <ProjectCard
                                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                title="E-commerce Platform for Local Artisans"
                                description="A vibrant platform connecting skilled local artisans with a global marketplace, featuring secure transactions and personalized storefronts."
                            />
                            <ProjectCard
                                image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3NwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60](https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3NwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)"
                                title="Interactive Portfolio for Creative Professionals"
                                description="A dynamic and visually engaging portfolio website showcasing creative work with interactive galleries and seamless navigation."
                            />
                            <ProjectCard
                                image="https://images.pexels.com/photos/7679642/pexels-photo-7679642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                title="Custom Software Solution for Business Operations"
                                description="A tailored software solution designed to streamline business operations, enhance productivity, and provide real-time analytics."
                            />
                        </div>
                    </div>
                </section>

                {/* Client Testimonials Section */}
                <section className="py-8 rounded-lg">
                    <h2 className="text-[#101418] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
                        Client Testimonials
                    </h2>
                    <div className="flex overflow-x-auto -mx-4 pb-4">
                        <div className="flex items-stretch p-4 gap-6 min-w-full md:min-w-0">
                            <TestimonialCard
                                author="Sarah M., Founder of Artisan Goods"
                                quote="TechCraft's expertise in e-commerce development was invaluable. Our new platform is beautiful, user-friendly, and has significantly boosted our sales. Their team was communicative and truly understood our vision."
                            />
                            <TestimonialCard
                                author="David L., Creative Director at Design Studio"
                                quote="Working with TechCraft on our portfolio website was a fantastic experience. They brought our creative ideas to life with stunning design and seamless functionality. Highly recommended!"
                            />
                            <TestimonialCard
                                author="Emily R., CEO of Business Solutions"
                                quote="The custom software solution TechCraft developed has streamlined our operations and improved efficiency across the board. Their technical skills and problem-solving abilities are exceptional."
                            />
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-8">
                    <h2 className="text-[#101418] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                        <ValueCard
                            icon={
                                <svg
                                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                                    width="24px"
                                    height="24px"
                                    fill="#197fe5"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                                </svg>
                            }
                            title="Quality Code"
                            description="We are committed to writing clean, efficient, and well-documented code that forms the foundation of robust and scalable solutions."
                        />
                        <ValueCard
                            icon={
                                <svg
                                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                                    width="24px"
                                    height="24px"
                                    fill="#197fe5"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                                </svg>
                            }
                            title="User-Centric Design"
                            description="We believe that exceptional digital experiences are built with the user at the forefront, focusing on intuitive design and seamless interactions."
                        />
                        <ValueCard
                            icon={
                                <svg
                                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                                    width="24px"
                                    height="24px"
                                    fill="#197fe5"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                </svg>
                            }
                            title="Timely Delivery"
                            description="We understand the importance of deadlines and are dedicated to delivering high-quality projects on time and within the agreed-upon budget."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

// --- Sub-Components ---
const HeroSection = () => {
    return (
        <div className="@container">
            <div className="rounded-xl overflow-hidden">
                <div
                    className="relative flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 md:p-16"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                    }}
                >
                    <div className="flex flex-col gap-3 text-center">
                        <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                            Crafting Digital Excellence
                        </h1>
                        <h2 className="text-white text-lg md:text-xl font-normal leading-relaxed">
                            We build innovative and scalable web solutions,
                            empowering businesses to thrive in the digital
                            landscape.
                        </h2>
                    </div>
                    <Link
                        href={"/quote"}
                        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-[#101418] bg-[#b2cbe5] rounded-md hover:bg-[#a3b7cf] transition-colors duration-300 cursor-pointer"
                    >
                        <span className="truncate">Get a Quote</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({
    image,
    title,
    description,
}: {
    image: string;
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-col gap-3 p-3 hover:ring-2 hover:ring-[#197fe56a] transition-shadow duration-300 rounded-lg bg-white cursor-pointer">
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url("${image}")` }}
            ></div>
            <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                    {title}
                </p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
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
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-white shadow-sm p-6">
            <svg
                className="text-gray-400 mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                width="24"
                height="24"
            >
                <path
                    fillRule="evenodd"
                    d="M10.028 5.972a.75.75 0 011.056 0l3.972 3.972a.75.75 0 11-1.06 1.06L11.5 7.56l-.47.47a.75.75 0 01-1.06 0l-.47-.47-3.972 3.972a.75.75 0 01-1.06-1.06L8.972 5.972a.75.75 0 011.056 0zm0 8.056a.75.75 0 011.056 0l3.972 3.972a.75.75 0 11-1.06 1.06L11.5 15.56l-.47.47a.75.75 0 01-1.06 0l-.47-.47-3.972 3.972a.75.75 0 01-1.06-1.06L8.972 13.028a.75.75 0 011.056 0z"
                    clipRule="evenodd"
                />
            </svg>
            <p className="text-[#101418] text-lg italic leading-relaxed mb-2">
                {quote}
            </p>
            <p className="text-[#5c728a] text-sm font-medium leading-normal">
                - {author}
            </p>
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
        <div className="flex flex-1 gap-4 rounded-lg border border-[#d4dbe2] bg-white p-6 flex-col shadow-sm">
            <div className="text-[#197fe5]">{icon}</div>
            <div className="flex flex-col gap-2">
                <h2 className="text-[#101418] text-lg font-semibold leading-tight">
                    {title}
                </h2>
                <p className="text-[#5c728a] text-sm font-normal leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default TechCraftHomePage;
