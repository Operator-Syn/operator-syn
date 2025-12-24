import React, { Suspense } from "react";
import SocialLinksPlaceholder from "./socialLinksComponent/SocialLinksPlaceholder";
import ClockPanelPlaceholder from "../clock/ClockPlaceholder";
import ProfileInfoPlaceholder from "./profileInfoComponent/ProfileInfoPlaceholder";

interface ProfileInfoItem { label: string; value: string; }
interface SocialLink { href: string; img: string; alt: string; }

interface ColumnPanelProps {
    profileInfo?: ProfileInfoItem[];
    socialLinks?: SocialLink[];
    className?: string;
    isLoading?: boolean;
}

// Lazy loaded components
const ProfileInfoComponent = React.lazy(() => import("./profileInfoComponent/ProfileInfoComponent"));
const SocialLinksComponent = React.lazy(() => import("./socialLinksComponent/SocialLinksComponent"));
const Clock = React.lazy(() => import("../clock/Clock"));

export default function ColumnPanels(props: ColumnPanelProps) {
    const { profileInfo, socialLinks, className = "", isLoading = false } = props;

    return (
        <div className={`col-4 d-flex flex-column gap-3 ${className}`}>
            
            {/* Profile Section */}
            {/* Logic: If loading OR no data, show fallback. Else show real component */}
            {isLoading || !profileInfo ? (
                <ProfileInfoPlaceholder />
            ) : (
                <Suspense fallback={<ProfileInfoPlaceholder />}>
                    <ProfileInfoComponent items={profileInfo} />
                </Suspense>
            )}

            {/* Social Links Section */}
            {isLoading || !socialLinks ? (
                <SocialLinksPlaceholder />
            ) : (
                <Suspense fallback={<SocialLinksPlaceholder />}>
                    <SocialLinksComponent badges={socialLinks} />
                </Suspense>
            )}

            {/* Clock Section */}
            {isLoading ? (
                <ClockPanelPlaceholder/>
            ) : (
                <Suspense fallback={<ClockPanelPlaceholder />}>
                    <Clock />
                </Suspense>
            )}
            
        </div>
    );
}
