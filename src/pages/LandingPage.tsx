import React, { createContext, useState, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Archive from "../components/Archive";
import SharedLayout from "../components/SharedLayout";

// Define the types for the context state
interface ExperienceTabContextType {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

// Initialize context with proper types
export const ExperienceTabContext = createContext<ExperienceTabContextType | null>(null);

const LandingPage: React.FC = () => {
    const [value, setValue] = useState<string>("1");

    const experienceContextState: ExperienceTabContextType = {
        value,
        setValue,
    };

    return (
        <ExperienceTabContext.Provider value={experienceContextState}>
            <Routes>
                <Route path="/" element={<SharedLayout />} />
                <Route path="/archive" element={<Archive />} />
            </Routes>
        </ExperienceTabContext.Provider>
    );
};

export default LandingPage;
