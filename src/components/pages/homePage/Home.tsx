import { Fragment, useEffect, useState } from "react";
import "./Home.css";
import LeftSection from "../../leftSection/LeftSection";
import RightSection from "../../rightSection/RightSection";
;

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
        <Fragment>
            <div className="d-flex flex-xxl-row flex-column">
                <LeftSection homeContent={homeContent} devLoadoutsContent={devLoadoutsContent} />
                <RightSection profileInfo={profileInfo} socialLinksContent={socialLinksContent} profileImage={homeContent.profileImage} />
            </div>
        </Fragment>
    );
}