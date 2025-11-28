import React, { Suspense } from "react";

interface ProfileInfoItem {
    label: string;
    value: string;
}

interface SocialLink {
    href: string;
    img: string;
    alt: string;
}

interface ColumnPanelProps {
    profileInfo: ProfileInfoItem[];
    socialLinks: SocialLink[];
    className?: string;
}

const ProfileInfoComponent = React.lazy(() => import("../profileInfoComponent/ProfileInfoComponent"));
const SocialLinksComponent = React.lazy(() => import("../socialLinksComponent/SocialLinksComponent"));
const Clock = React.lazy(() => import("../clock/Clock"));

export default function ColumnPanels(props: ColumnPanelProps) {
    const { profileInfo, socialLinks, className = "" } = props;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={`col-4 d-flex flex-column gap-3 ${className}`}>
                <ProfileInfoComponent items={profileInfo} />
                <SocialLinksComponent badges={socialLinks} />
                <Clock />
            </div>
        </Suspense>
    );
}
