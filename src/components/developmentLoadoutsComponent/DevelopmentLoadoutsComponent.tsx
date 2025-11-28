import { useState, useEffect, Suspense, lazy } from "react";

interface DevLoadoutSection {
    category: string;
    badges: string[];
}

interface DevLoadoutsContent {
    header: string;
    sections: DevLoadoutSection[];
}

interface DevLoadoutsProps {
    content: DevLoadoutsContent;
}

export default function DevelopmentLoadoutsComponent({ content }: DevLoadoutsProps) {
    const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth <= 1400);

    const MobileComponent = lazy(() => import("./DevelopmentLoadoutsComponentForMobile"));
    const DesktopComponent = lazy(() => import("./DevelopmentLoadoutsComponentForDesktop"));

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 1400);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Suspense fallback={<div>Loading Component...</div>}>
            {isSmall ? (
                <MobileComponent content={content} />
            ) : (
                <DesktopComponent content={content} />
            )}
        </Suspense>
    );
}
