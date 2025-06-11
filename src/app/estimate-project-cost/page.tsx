"use client";
import React, { useState } from "react";

const websiteTypes = [
    { value: "one", label: "Brochure Website" },
    { value: "two", label: "E-commerce Store" },
    { value: "three", label: "Web Application" },
    { value: "four", label: "Portfolio Site" },
];

const features = [
    { id: "auth", label: "User Authentication", defaultChecked: true },
    {
        id: "payment",
        label: "Payment Gateway Integration",
        defaultChecked: false,
    },
    {
        id: "search",
        label: "Advanced Search Functionality",
        defaultChecked: false,
    },
    { id: "blog", label: "Blog/CMS Integration", defaultChecked: false },
    { id: "admin", label: "Admin Panel", defaultChecked: false },
];

const designComplexities = [
    { id: "basic", label: "Basic" },
    { id: "standard", label: "Standard" },
    { id: "advanced", label: "Advanced" },
];

// --- Main ProjectCostEstimatorPage Component ---

const ProjectCostEstimatorPage = () => {
    const [numPages, setNumPages] = useState(5);
    const [websiteType, setWebsiteType] = useState("one");
    const [selectedFeatures, setSelectedFeatures] = useState(
        new Set(features.filter((f) => f.defaultChecked).map((f) => f.id))
    );
    const [designComplexity, setDesignComplexity] = useState("standard"); // Default to standard

    // Simple cost estimation logic (can be expanded)
    const calculateEstimate = () => {
        let baseCost = 0;
        let maxCost = 0;

        // Base cost per page
        baseCost += numPages * 500;
        maxCost += numPages * 1000;

        // Website type influence
        if (websiteType === "two") {
            // E-commerce
            baseCost += 3000;
            maxCost += 7000;
        } else if (websiteType === "three") {
            // Web Application
            baseCost += 5000;
            maxCost += 10000;
        }

        // Features influence
        if (selectedFeatures.has("auth")) {
            baseCost += 500;
            maxCost += 1000;
        }
        if (selectedFeatures.has("payment")) {
            baseCost += 1500;
            maxCost += 3000;
        }
        if (selectedFeatures.has("search")) {
            baseCost += 800;
            maxCost += 1500;
        }
        if (selectedFeatures.has("blog")) {
            baseCost += 700;
            maxCost += 1200;
        }
        if (selectedFeatures.has("admin")) {
            baseCost += 1000;
            maxCost += 2000;
        }

        // Design complexity influence
        if (designComplexity === "standard") {
            baseCost *= 1.2;
            maxCost *= 1.2;
        } else if (designComplexity === "advanced") {
            baseCost *= 1.5;
            maxCost *= 1.8;
        }

        return {
            min: Math.round(baseCost / 100) * 100,
            max: Math.round(maxCost / 100) * 100,
        };
    };

    const { min, max } = calculateEstimate();

    const handleFeatureChange = (featureId: string) => {
        setSelectedFeatures((prev) => {
            const newFeatures = new Set(prev);
            if (newFeatures.has(featureId)) {
                newFeatures.delete(featureId);
            } else {
                newFeatures.add(featureId);
            }
            return newFeatures;
        });
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header Component */}
                {/* <Header /> */}

                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-5 flex-1">
                        {/* Project Cost Estimator Intro */}
                        <section className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-72 flex-col gap-3">
                                <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">
                                    Project Cost Estimator
                                </h1>
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    Get a preliminary estimate for your web
                                    development project. Adjust the sliders and
                                    options below to reflect your project
                                    requirements.
                                </p>
                            </div>
                        </section>

                        {/* Project Scope - Number of Pages */}
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Project Scope
                        </h3>
                        <div className="@container">
                            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
                                <div className="flex w-full shrink-[3] items-center justify-between">
                                    <p className="text-[#0e141b] text-base font-medium leading-normal">
                                        Number of Pages
                                    </p>
                                    <p className="text-[#0e141b] text-sm font-normal leading-normal @[480px]:hidden">
                                        {numPages}
                                    </p>
                                </div>
                                <div className="flex h-4 w-full items-center gap-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="20"
                                        value={numPages}
                                        onChange={(e) =>
                                            setNumPages(Number(e.target.value))
                                        }
                                        className="flex-1 h-1 appearance-none rounded-sm bg-[#d0dbe7] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#197fe5] [&::-webkit-slider-runnable-track]:h-full [&::-webkit-slider-runnable-track]:rounded-sm [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#197fe5] [&::-moz-range-track]:h-full [&::-moz-range-track]:rounded-sm"
                                        style={{
                                            background: `linear-gradient(to right, #197fe5 0%, #197fe5 ${
                                                ((numPages - 1) / 19) * 100
                                            }%, #d0dbe7 ${
                                                ((numPages - 1) / 19) * 100
                                            }%, #d0dbe7 100%)`,
                                        }}
                                    />
                                    <p className="text-[#0e141b] text-sm font-normal leading-normal hidden @[480px]:block">
                                        {numPages}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Website Type Dropdown */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label
                                htmlFor="website-type-select"
                                className="flex flex-col min-w-40 flex-1"
                            >
                                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">
                                    Website Type
                                </p>
                                <select
                                    id="website-type-select"
                                    value={websiteType}
                                    onChange={(e) =>
                                        setWebsiteType(e.target.value)
                                    }
                                    className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 bg-[image:var(--select-button-svg)] bg-right bg-no-repeat bg-origin-content pr-10 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal select-btn"
                                >
                                    {websiteTypes.map((type) => (
                                        <option
                                            key={type.value}
                                            value={type.value}
                                        >
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {/* Features Checkboxes */}
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Features
                        </h3>
                        <div className="px-4">
                            {features.map((feature) => (
                                <FeatureCheckbox
                                    key={feature.id}
                                    id={feature.id}
                                    label={feature.label}
                                    checked={selectedFeatures.has(feature.id)}
                                    onChange={() =>
                                        handleFeatureChange(feature.id)
                                    }
                                />
                            ))}
                        </div>

                        {/* Design Complexity Radios */}
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Design Complexity
                        </h3>
                        <div className="flex flex-wrap gap-3 p-4">
                            {designComplexities.map((complexity) => (
                                <DesignComplexityRadio
                                    key={complexity.id}
                                    id={complexity.id}
                                    label={complexity.label}
                                    name="design-complexity"
                                    checked={designComplexity === complexity.id}
                                    onChange={() =>
                                        setDesignComplexity(complexity.id)
                                    }
                                />
                            ))}
                        </div>

                        {/* Estimated Cost */}
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Estimated Cost
                        </h3>
                        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            Based on your selections, the estimated cost for
                            your project is between ${min.toLocaleString()} and
                            ${max.toLocaleString()}.
                        </p>
                        <p className="text-[#4e7397] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                            Disclaimer: This is a preliminary estimate. A
                            detailed quote will be provided after a
                            consultation.
                        </p>
                        <div className="flex px-4 py-3 justify-center">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#197fe5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">
                                    Get a Detailed Quote
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureCheckbox = ({
    id,
    label,
    checked,
    onChange,
}: {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <label
            htmlFor={id}
            className="flex gap-x-3 py-3 flex-row cursor-pointer"
        >
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className="h-5 w-5 rounded border-[#d0dbe7] border-2 bg-transparent text-[#197fe5] checked:bg-[#197fe5] checked:border-[#197fe5] focus:ring-0 focus:ring-offset-0 focus:border-[#d0dbe7] focus:outline-none"
                style={{
                    backgroundImage: checked
                        ? "var(--checkbox-tick-svg)"
                        : "none",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <p className="text-[#0e141b] text-base font-normal leading-normal">
                {label}
            </p>
        </label>
    );
};

const DesignComplexityRadio = ({
    id,
    label,
    name,
    checked,
    onChange,
}: {
    id: string;
    label: string;
    name: string;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <label
            htmlFor={id}
            className={`text-sm font-medium leading-normal flex items-center justify-center rounded-lg border px-4 h-11 text-[#0e141b] relative cursor-pointer ${
                checked
                    ? "border-[3px] px-3.5 border-[#197fe5]"
                    : "border-[#d0dbe7]"
            }`}
        >
            {label}
            <input
                type="radio"
                id={id}
                name={name}
                value={id}
                checked={checked}
                onChange={onChange}
                className="invisible absolute"
            />
        </label>
    );
};

export default ProjectCostEstimatorPage;
