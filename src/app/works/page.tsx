"use client";
import React, { useState } from "react";
const projectsData = [
    {
        id: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFNj6hJsGIEanXL9gqBmQkp7uwk7Zb-H9RDIbw4EmJKxw_q2u1JWCauG0SrbCSzPbM-DE5pbo-E1RdV7oQuPkg_K_7n2JMymJuF3WacX5mvqkPHtggswGM9_c63LcA5qdp_oI5LeV3ZsHWTBitA1sCWvZ1BbkPp-P2ue8P78wlTKCZ7-cnr1Nh-Bg38YGrUW7BRqKixnieuYop_maek5nC1vV5tKreCtaoTTZDn5MupUANMx3hPIylmgnknadFgJbBdayW0xk6B20",
        title: "Online Retail Platform",
        description:
            "A robust e-commerce platform with advanced features and seamless user experience.",
        category: "E-commerce",
    },
    {
        id: 2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCme2VH-Ridvwxd_L1mbc5d8ODe3VGMlGAK4K2_BTmvOWNQ2GEqMub3NpqTA4LfVhMvT_TmxtRc5PWVwloJu6bGjLevzRr7y8MEvZXQ5VgqpSQwVl09jxdohTl8beqqyWLShFY9AsXu9RYI7xDofX-K2B5jZ3PCHWzWnjQvLJS04O0n3JEHEEobQwJe2Vbw11JWKypVfKMEyY4FvGGQt1UMvz8FKAIaXQDSmVBuCmrW48xNZd12NBSIrf1PoS9ha7c4zm4IaoeU_qs",
        title: "Healthcare Management System",
        description:
            "A comprehensive system for managing patient data and streamlining healthcare operations.",
        category: "Healthcare",
    },
    {
        id: 3,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCIfNIAfLBcnCxCetPWlXoPMivAPMAjd94Kt3JyL_0b7J_yMSmKoIJeVDTtRFFG2ZEfYI4OgPz22h1CjQBh1aUYnI703YIZY-FLqjILmHh7yXxYavT49AEUN6hWjKfWt7yZkidm6Bt1eP1zJsTPxlM3AT4rxDI9eZsQf451WL8cqy-2JuDZbZMlfyitTj4EpooQkUVtv3zs8PFXW5nklfXj1rQ_5LXsA6_ny0niDtHpnxM8ytcLWxRKLa7DFTnry6Y-gnYiNHyUEE",
        title: "Financial Analytics Dashboard",
        description:
            "An interactive dashboard providing real-time financial insights and analytics.",
        category: "Finance",
    },
    {
        id: 4,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJCr4y7HtYauyl8DLnVaM8hf-5IBARq7o1NZP97jptNAPzCmkN86mmNWqEvjCoJ1IoQlknSUgFh3ZgnW0KxEUQpV6SJpRvAsWZ69m6g7mBQNCTzbz_gwH2Puv-7rJpx-OrvLUFHeMS-ebhldRl5riQWsrqWFL_PObyvPRWjRtDFuuNtzsjDAQEhOC_O7p4t-YQaTMt4XBLNgBzT7duFCPZs7fNYw1z-S2J7w0ZSWIMsE-uzrQfPjPv28IXjnXajwtMy5kviFg3dR4",
        title: "E-Learning Portal",
        description:
            "An engaging e-learning portal with interactive courses and progress tracking.",
        category: "Education",
    },
    {
        id: 5,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2L6Xaa-4nXCzao8Sbv5AZsjqmfzDcCO6CLHtXSZMHecWVjQpOxR7Sfr0-HhQ_5EP7xzZFHrieKZqJpfGatBipbl81ItkdtAoTVHz6ZgcHBxxH-F5cjWlWupqtVO6qt9zjoLWXNc5LSLaa8fbywRelRevya9-Lbfrutv_-GS33bCcIldBR-26jyTgktwfru_EusKV7762MLmHV9iLMT5v-mQbTjYtHPSviwG_7nHx1VjtFmzWU8-LPeayjIBZkx3Shi9LSjajJhUM",
        title: "Custom CRM Solution",
        description:
            "A tailored CRM solution to enhance customer relationship management.",
        category: "E-commerce", // Example: CRM could fit multiple categories or a new 'Software' category
    },
    {
        id: 6,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzcFkMu6pL753mKN0NKizMwEL7dzZjDjLJEMWbMrGS1Ihlp4MRRqkTxC2bux3ljU8yFXljRLec-wvQQZ4QZgFQloNqwGWXJMtjtgtUhuC_maMmuvHJye_7Dp_1FrzTt-6gz-5k83GfkGh-ircUyWGa3yb48WwxHrBLqo7lhWH8NyT3iPNkjaPAyKA9vOk0QRDAHmsrc4p0zYRFSoqruB9ye--ggYjEG2ubaj88QmhahUa1wiu2_wVuLOVbgJk7CsNWOfbdskCNaIg",
        title: "Mobile Banking App",
        description:
            "A secure and user-friendly mobile application for managing banking transactions.",
        category: "Finance",
    },
    {
        id: 7,
        image: "https://via.placeholder.com/400x225/e0e0e0/000000?text=Project+7",
        title: "Real Estate Portal",
        description:
            "Connecting buyers and sellers with comprehensive property listings and tools.",
        category: "Other",
    },
    {
        id: 8,
        image: "https://via.placeholder.com/400x225/d0d0d0/333333?text=Project+8",
        title: "Logistics Tracking System",
        description:
            "Efficiently track and manage shipments with real-time updates and analytics.",
        category: "Other",
    },
];

const categories = [
    "All",
    "E-commerce",
    "Healthcare",
    "Finance",
    "Education",
    "Other",
];

const OurWorkPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter(
                  (project) => project.category === activeCategory
              );

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">
                                    Our Work
                                </p>
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    Explore our portfolio of successful web
                                    development projects, showcasing our
                                    expertise in creating innovative and
                                    effective digital solutions for diverse
                                    industries.
                                </p>
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex gap-3 p-3 flex-wrap pr-4">
                            {categories.map((category) => (
                                <FilterButton
                                    key={category}
                                    category={category}
                                    isActive={activeCategory === category}
                                    onClick={() => setActiveCategory(category)}
                                />
                            ))}
                        </div>

                        {/* Project Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FilterButton = ({
    category,
    isActive,
    onClick,
}: {
    category: string;
    isActive: boolean;
    onClick: () => void;
}) => {
    const activeClasses = "bg-[#197fe5] text-slate-50"; // Active state styling
    const inactiveClasses = "bg-[#e7edf3] text-[#0e141b]"; // Inactive state styling

    return (
        <button
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 cursor-pointer ${
                isActive ? activeClasses : inactiveClasses
            }`}
            onClick={onClick}
        >
            <p className="text-sm font-medium leading-normal">{category}</p>
        </button>
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
        <div className="flex flex-col gap-3 pb-3">
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

export default OurWorkPage;
