export default function SocialLinks({ socialLinksContent }: any) {
    return (
        <div className="socialLinks p-3 rounded-border">
            <div className="d-flex flex-wrap row-gap-2 column-gap-1 justify-content-center align-items-center">
                {socialLinksContent.badges.map((badge: any) => (
                    <a href={badge.href} target="_blank" rel="noopener noreferrer" key={badge.alt}>
                        <img src={badge.img} alt={badge.alt} />
                    </a>
                ))}
            </div>
        </div>
    );
}
