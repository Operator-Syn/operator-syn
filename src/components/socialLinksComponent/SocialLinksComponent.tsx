interface SocialLink {
    href: string;
    img: string;
    alt: string;
}

interface SocialLinksComponentProps {
    badges: SocialLink[];
}

export default function SocialLinksComponent(props: SocialLinksComponentProps) {
    const { badges } = props;

    return (
        <div className="light-glass-blue-hue flex-grow-1 p-3 rounded shadow-sm d-flex flex-column justify-content-around align-items-start">
            <p className="mb-0">Let's Connect!</p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {badges.map((badge, index) => (
                    <a key={index} href={badge.href} target="_blank" rel="noopener noreferrer">
                        <img src={badge.img} alt={badge.alt} />
                    </a>
                ))}
            </div>
        </div>
    );
}
