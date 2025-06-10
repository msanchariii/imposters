"use client";
import React, { useState } from "react";

// Assuming you have a CSS file for global styles or are using a CSS-in-JS solution
// If you're using Tailwind CSS directly in your React project, ensure it's configured.

const GetQuotePage = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        projectType: "",
        projectName: "",
        projectDescription: "",
        numberOfPages: "",
        featuresFunctionality: "",
        designPreferences: "",
        technicalRequirements: "",
        budgetRange: "",
        contactName: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend
        console.log("Form submitted:", formData);
        alert("Thank you for your request! We will get back to you shortly.");
        // Optionally reset the form
        setFormData({
            projectType: "",
            projectName: "",
            projectDescription: "",
            numberOfPages: "",
            featuresFunctionality: "",
            designPreferences: "",
            technicalRequirements: "",
            budgetRange: "",
            contactName: "",
            email: "",
            phoneNumber: "",
        });
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
            style={{
                "--select-button-svg":
                    'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(78,114,151)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e")',
            }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">
                                    Request a Quote
                                </p>
                                <p className="text-[#4e7297] text-sm font-normal leading-normal">
                                    Please fill out the form below to help us
                                    understand your project requirements and
                                    provide you with an accurate quote.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <SelectInput
                                label="Project Type"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select project type",
                                    },
                                    {
                                        value: "website_design",
                                        label: "Website Design",
                                    },
                                    {
                                        value: "web_application",
                                        label: "Web Application Development",
                                    },
                                    {
                                        value: "e_commerce",
                                        label: "E-commerce Development",
                                    },
                                    {
                                        value: "mobile_app",
                                        label: "Mobile App Development",
                                    },
                                    {
                                        value: "custom_software",
                                        label: "Custom Software",
                                    },
                                ]}
                            />

                            <TextInput
                                label="Project Name"
                                name="projectName"
                                placeholder="Enter project name"
                                value={formData.projectName}
                                onChange={handleChange}
                            />

                            <TextAreaInput
                                label="Project Description"
                                name="projectDescription"
                                placeholder="Describe your project in detail"
                                value={formData.projectDescription}
                                onChange={handleChange}
                            />

                            <TextInput
                                label="Number of Pages"
                                name="numberOfPages"
                                placeholder="Estimate the number of pages"
                                value={formData.numberOfPages}
                                onChange={handleChange}
                                type="number" // Add type for numerical input
                            />

                            <TextAreaInput
                                label="Features and Functionality"
                                name="featuresFunctionality"
                                placeholder="List the features and functionality required"
                                value={formData.featuresFunctionality}
                                onChange={handleChange}
                            />

                            <TextAreaInput
                                label="Design Preferences"
                                name="designPreferences"
                                placeholder="Describe your design preferences and style"
                                value={formData.designPreferences}
                                onChange={handleChange}
                            />

                            <TextAreaInput
                                label="Technical Requirements"
                                name="technicalRequirements"
                                placeholder="Specify any technical requirements or integrations"
                                value={formData.technicalRequirements}
                                onChange={handleChange}
                            />

                            <SelectInput
                                label="Budget Range"
                                name="budgetRange"
                                value={formData.budgetRange}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "select",
                                        label: "Select budget range",
                                    },
                                    {
                                        value: "under_5k",
                                        label: "Under $5,000",
                                    },
                                    {
                                        value: "5k_10k",
                                        label: "$5,000 - $10,000",
                                    },
                                    {
                                        value: "10k_25k",
                                        label: "$10,000 - $25,000",
                                    },
                                    { value: "25k_plus", label: "$25,000+" },
                                ]}
                            />

                            <TextInput
                                label="Contact Name"
                                name="contactName"
                                placeholder="Enter your name"
                                value={formData.contactName}
                                onChange={handleChange}
                            />

                            <TextInput
                                label="Email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email" // Add type for email input
                            />

                            <TextInput
                                label="Phone Number"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                type="tel" // Add type for telephone input
                            />

                            <div className="flex px-4 py-3">
                                <button
                                    type="submit" // Set type to submit for form submission
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#197ce5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                                >
                                    <span className="truncate">
                                        Submit Request
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-Components ---

const TextInput = ({
    label,
    name,
    placeholder,
    value,
    onChange,
    type = "text",
}: {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string; // Optional type prop, default is "text"
}) => {
    return (
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                    {label}
                </p>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7297] p-[15px] text-base font-normal leading-normal"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

const TextAreaInput = ({
    label,
    name,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                    {label}
                </p>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] min-h-36 placeholder:text-[#4e7297] p-[15px] text-base font-normal leading-normal"
                    value={value}
                    onChange={onChange}
                ></textarea>
            </label>
        </div>
    );
};

const SelectInput = ({
    label,
    name,
    value,
    onChange,
    options,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}) => {
    return (
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                    {label}
                </p>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#4e7297] p-[15px] text-base font-normal leading-normal"
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.value === "select"}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default GetQuotePage;
