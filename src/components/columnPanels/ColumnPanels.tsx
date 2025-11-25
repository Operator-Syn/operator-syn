import ProfileInfoComponent from "../profileInfoComponent/ProfileInfoComponent";
import SocialLinksComponent from "../socialLinksComponent/SocialLinksComponent";
import Clock from "../clock/Clock";

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

export default function ColumnPanels(props: ColumnPanelProps) {
    
    const { profileInfo, socialLinks, className = "" } = props;

    return (
        <div className={`col-4 d-flex flex-column gap-3 ${className}`}>
            <ProfileInfoComponent items={profileInfo} />
            <SocialLinksComponent badges={socialLinks} />
            <Clock />
        </div>
    );
}
