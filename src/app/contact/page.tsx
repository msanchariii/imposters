"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        company: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend or an API
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        // Optionally clear the form
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            company: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
            />
            <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
            />
            <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            <InputField
                label="Company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
            />
            <TextAreaField
                label="Message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
            />
            <div className="flex px-4 py-3 justify-start">
                <button
                    type="submit"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#197fe5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Submit</span>
                </button>
            </div>
        </form>
    );
};

const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}) => {
    return (
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label htmlFor={name} className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                    {label}
                </p>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

const TextAreaField = ({
    label,
    name,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label htmlFor={name} className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                    {label}
                </p>
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] min-h-36 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
                    value={value}
                    onChange={onChange}
                ></textarea>
            </label>
        </div>
    );
};

// --- Main ContactUsPage Component ---

const ContactUsPage = () => {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Page Title and Description */}
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">
                                    Contact Us
                                </p>
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    We&apos;re excited to hear from you. Please
                                    fill out the form below, or reach out
                                    directly using the contact information
                                    provided.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />

                        {/* Direct Contact Information */}
                        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Direct Contact
                        </h2>
                        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                            <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dbe7] py-5">
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    Email
                                </p>
                                <p className="text-[#0e141b] text-sm font-normal leading-normal">
                                    contact@innovatech.com
                                </p>
                            </div>
                            <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dbe7] py-5">
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    Phone
                                </p>
                                <p className="text-[#0e141b] text-sm font-normal leading-normal">
                                    +1 (555) 123-4567
                                </p>
                            </div>
                            <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dbe7] py-5">
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    Address
                                </p>
                                <p className="text-[#0e141b] text-sm font-normal leading-normal">
                                    123 Innovation Drive, Techville, CA 90210
                                </p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="flex px-4 py-3">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
                                style={{
                                    backgroundImage:
                                        'url("https://maps.googleapis.com/maps/api/staticmap?center=Techville,CA&zoom=14&size=600x300&markers=color:red%7C123+Innovation+Drive,Techville,CA&key=YOUR_Maps_API_KEY")',
                                }} // Replace with actual map image or embed
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
