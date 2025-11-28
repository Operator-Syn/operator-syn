interface DevLoadoutSection {
    category: string;
    badges: string[];
}

interface DevLoadoutsContent {
    header: string;
    sections: DevLoadoutSection[];
}

interface DevelopmentLoadoutsComponentForMobileProps {
    content: DevLoadoutsContent;
}

export default function DevelopmentLoadoutsComponentForMobile({ content }: DevelopmentLoadoutsComponentForMobileProps) {
    const { header, sections } = content;

    return (
        <div className="col-4 d-flex flex-column">
            <div className="light-glass-blue-hue flex-grow-1 p-3 rounded shadow-sm">
                <h2 className="mb-3">{header}</h2>
                <hr />
                {sections.map((section, index) => (
                    <div key={index} className="mb-3">
                        <h5 className="mb-2">{section.category}</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {section.badges.map((badgeUrl, i) => (
                                <img
                                    key={i}
                                    src={badgeUrl}
                                    alt={`${section.category} badge`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
