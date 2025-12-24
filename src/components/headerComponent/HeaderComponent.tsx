/* HeaderComponent.tsx */
import { useEffect, useState } from "react";
import HeaderPlaceholder from "./HeaderComponentPlaceholder";
import "./HeaderComponent.css"; // Don't forget to import the CSS

interface HeaderComponentProps {
    headerPhrase?: string; 
    mobileHeaderPhrase?: string;
    isLoading?: boolean;   
}

export default function HeaderComponent(props: HeaderComponentProps) {
    const { headerPhrase, mobileHeaderPhrase, isLoading } = props;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => window.innerWidth <= 576;
        const handleResize = () => setIsMobile(checkMobile());
        
        handleResize();
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isLoading) {
        return <HeaderPlaceholder />;
    }

    if (isMobile && !mobileHeaderPhrase) {
        return null;
    }

    return (
        <div className="col-8">
            <div className="p-0 rounded">
                {/* Applied the new class here */}
                <h1 className="m-0">
                    {isMobile && mobileHeaderPhrase 
                        ? mobileHeaderPhrase 
                        : (headerPhrase || "")}
                </h1>
            </div>
        </div>
    );
}