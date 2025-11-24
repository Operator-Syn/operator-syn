import { Fragment, useEffect, useState, lazy, Suspense } from "react";
import "./Home.css";

// Lazy-load the sections
const LeftSection = lazy(() => import("../../leftSection/LeftSection"));
const RightSection = lazy(() => import("../../rightSection/RightSection"));

export default function Home() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        import("../../../data/Homepage.types").then((module) => {
            setContent(module);
        });
    }, []);

    if (!content) return null;

    const { homeContent, devLoadoutsContent, profileInfo, socialLinksContent } = content;

    return (
        <Suspense fallback={<div>Loading sections...</div>}>
            <Fragment>
                <div className="d-flex flex-xxl-row flex-column">
                    <LeftSection homeContent={homeContent} devLoadoutsContent={devLoadoutsContent} />
                    <RightSection
                        profileInfo={profileInfo}
                        socialLinksContent={socialLinksContent}
                        profileImage={homeContent.profileImage}
                    />
                </div>
            </Fragment>
        </Suspense>
    );
}
