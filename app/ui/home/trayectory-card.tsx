'use client'

import { useState } from "react";

interface TrayectoryProps {
    company: string;
    position: string;
    date: string;
    description: string;
}

export default function TrayectoryCard(
    {
        company,
        position,
        date,
        description
    } : TrayectoryProps
) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxDescriptionLength = 200;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="p-4">
            <div className="text-secondary font-inter">
                <h2>{company}</h2>
                <p className="text-xl font-bold pb-2">{position}</p>
                <p className="font-bold">{date}</p>
                <p className="mx-auto py-2">
                    {isExpanded || description.length <= maxDescriptionLength ? description : `${description.substring(0, maxDescriptionLength)}...`}
                </p>
                {description.length > maxDescriptionLength && (
                    <button
                        onClick={toggleExpand}
                        className="mt-2 border-2 border-secondary rounded-xl p-2 transition-colors hover:bg-secondary hover:text-primary"
                    >
                        {isExpanded ? "Leer menos" : "Leer más"}
                    </button>
                )}
            </div>
        </div>
    )
}