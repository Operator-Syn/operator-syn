import SocialLinksPlaceholder from "./SocialLinksPlaceholder";
import AsyncImage from "../../asyncImageLoader/AsyncImage"; // Your generic loader
import "./SocialLinks.css";

interface SocialLink {
    href: string;
    img: string;
    alt: string;
}

interface SocialLinksComponentProps {
    badges: SocialLink[];
    isLoading?: boolean;
}

export default function SocialLinksComponent({ badges, isLoading }: SocialLinksComponentProps) {
    if (isLoading) {
        return <SocialLinksPlaceholder />;
    }

    return (
        <div className="light-glass-blue-hue flex-grow-1 p-3 rounded shadow-sm d-flex flex-column justify-content-around">
            <p className="mb-2">Let's Connect!</p>
            {/* The Layout Container */}
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {badges.map((badge, index) => (
                    <SocialBadge key={index} badge={badge} />
                ))}
            </div>
        </div>
    );
}

// --- The Fixed Sub-Component ---
// We keep this separate so we can control the layout wrapper strictly
function SocialBadge({ badge }: { badge: SocialLink }) {
    return (
        <a
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none" // Prevents underline quirks
        >
            <AsyncImage
                src={badge.img}
                alt={badge.alt}
                // CRITICAL FIX: 
                // 1. 'badge-wrapper' applies your original sizing/bg styles.
                // 2. 'd-inline-flex' ensures the wrapper creates physical space (width) even if the image is loading.
                wrapperClassName="badge-wrapper d-inline-flex align-items-center justify-content-center rounded overflow-hidden"

                // Ensure the image itself scales correctly
                className="badge-img d-block"
            />
        </a>
    );
}