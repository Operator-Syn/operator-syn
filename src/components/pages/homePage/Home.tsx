import { Fragment, useEffect, useState, lazy, Suspense } from "react";
import "./Home.css";

// Lazy-load components
const CookingArea = lazy(() => import("../../cookingArea/CookingArea"));
const HeaderComponent = lazy(() => import("../../headerComponent/HeaderComponent"));
const ProfileImageComponent = lazy(() => import("../../profileImageComponent/ProfileImageComponent"));
const ElevatorPitchComponent = lazy(() => import("../../elevatorPitch/ElevatorPitch"));
const DevLoadoutsComponent = lazy(() => import("../../developmentLoadoutsComponent/DevelopmentLoadoutsComponent"));
const ColumnPanels = lazy(() => import("../../columnPanels/ColumnPanels"));

export default function Home() {
    interface DevLoadoutSection {
        category: string;
        badges: string[];
    }

    interface DevLoadoutsContent {
        header: string;
        sections: DevLoadoutSection[];
    }

    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        import("../../../data/Homepage.types").then((module) => {
            setContent(module);
        });
    }, []);

    if (!content) return null;

    const { homeContent, devLoadoutsContent: rawDevLoadoutsContent } = content;
    const devLoadoutsContent: DevLoadoutsContent = rawDevLoadoutsContent;

    return (
        <Suspense fallback={<div>Loading sections...</div>}>
            <Fragment>
                <CookingArea>
                    <div className="container-fluid py-3">

                        <div className="row g-3 mb-3 d-flex align-items-stretch stack-on-mobile">
                            <Suspense fallback={<div>Loading header...</div>}>
                                <HeaderComponent
                                    headerPhrase={homeContent.headerPhrase}
                                    mobileHeaderPhrase={homeContent.mobileHeaderPhrase}
                                />
                            </Suspense>

                            <Suspense fallback={<div>Loading profile image...</div>}>
                                <ProfileImageComponent 
                                src={homeContent.profileImage}
                                className="order-first-on-mobile" 
                                />
                            </Suspense>
                        </div>

                        <div className="row g-3 stack-on-mobile">
                            <Suspense fallback={<div>Loading elevator pitch...</div>}>
                                <ElevatorPitchComponent items={homeContent.elevatorPitch} />
                            </Suspense>

                            <Suspense fallback={<div>Loading development loadouts...</div>}>
                                <DevLoadoutsComponent content={devLoadoutsContent} />
                            </Suspense>

                            <Suspense fallback={<div>Loading column panels...</div>}>
                                <ColumnPanels
                                    profileInfo={content.profileInfo}
                                    socialLinks={content.socialLinksContent.badges}
                                    className="order-first-on-mobile"
                                />
                            </Suspense>
                        </div>
                    </div>
                </CookingArea>
            </Fragment>
        </Suspense>
    );
}
