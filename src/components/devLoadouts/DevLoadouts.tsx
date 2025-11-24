export default function DevLoadouts({ devLoadoutsContent }: any) {
    return (
        <div className="devLoadouts p-3 rounded-border">
            <h2 className="m-0">{devLoadoutsContent.header}</h2>
            {devLoadoutsContent.sections.map((section: any) => (
                <div key={section.category}>
                    <p className="m-1">{section.category}</p>
                    <div className="d-flex flex-wrap gap-1">
                        {section.badges.map((url: string, index: number) => (
                            <img key={`${url}-${index}`} src={url} alt="Badge" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
