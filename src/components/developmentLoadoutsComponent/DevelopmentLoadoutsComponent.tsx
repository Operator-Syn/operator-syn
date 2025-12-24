import { useState, useEffect } from "react";
import MobileComponent from "./DevelopmentLoadoutsComponentForMobile";
import DesktopComponent from "./DevelopmentLoadoutsComponentForDesktop";
import DevelopmentLoadoutsPlaceholder from "./DevelopmentLoadoutsPlaceholder";

interface DevLoadoutSection {
    category: string;
    badges: string[];
}

interface DevLoadoutsContent {
    header: string;
    sections: DevLoadoutSection[];
}

interface DevLoadoutsProps {
    content?: DevLoadoutsContent;
    isLoading?: boolean; 
}

export default function DevelopmentLoadoutsComponent({ content, isLoading }: DevLoadoutsProps) {
    // initialize with a check to avoid SSR errors if window is undefined
    const [isSmall, setIsSmall] = useState<boolean>(() => 
        typeof window !== "undefined" ? window.innerWidth <= 1400 : false
    );

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 1400);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 2. Check if loading OR if content is missing
    if (isLoading || !content) {
        // FIXED: Pass the 'isSmall' state to the placeholder prop 'isMobile'
        return <DevelopmentLoadoutsPlaceholder isMobile={isSmall} />;
    }

    // 3. Otherwise show the actual component
    return isSmall ? (
        <MobileComponent content={content} />
    ) : (
        <DesktopComponent content={content} />
    );
}