import { useEffect, useState } from "react";

interface HeaderComponentProps {
    headerPhrase: string;
    mobileHeaderPhrase?: string;
}

export default function HeaderComponent(props: HeaderComponentProps) {
    const { headerPhrase, mobileHeaderPhrase } = props;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 576);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile && !mobileHeaderPhrase) {
        return null;
    }

    return (
        <div className="col-8">
            <div className="p-0 rounded h-100">
                <h1 className="m-0">
                    {isMobile && mobileHeaderPhrase ? mobileHeaderPhrase : headerPhrase}
                </h1>
            </div>
        </div>
    );
}
