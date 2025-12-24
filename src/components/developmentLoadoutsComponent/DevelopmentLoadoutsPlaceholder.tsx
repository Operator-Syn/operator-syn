import "./DevelopmentLoadoutsComponent.css";

interface PlaceholderProps {
    isMobile?: boolean; // Made optional to prevent strict type errors if omitted
}

export default function DevelopmentLoadoutsPlaceholder({ isMobile = false }: PlaceholderProps) {
    // Desktop: 5 items to simulate accordion
    const skeletonSections = Array(5).fill(null);
    // Mobile: 5 badges to simulate grid
    const skeletonBadges = Array(5).fill(null);

    return (
        <div className="col-4 d-flex flex-column">
            {/* Added h-100 to ensure the outer card takes full height if needed */}
            <div 
                className="light-glass-blue-hue flex-grow-1 p-3 rounded shadow-sm placeholder-glow d-flex flex-column h-100"
                aria-hidden="true"
            >
                {/* Header Title */}
                <div className="mb-3">
                    <span className="placeholder dev-loadouts-placeholder-title rounded"></span>
                </div>
                
                <hr />

                {/* CONDITIONAL LAYOUT */}
                {isMobile ? (
                    /* MOBILE SKELETON */
                    <div className="d-flex flex-column gap-3">
                        {skeletonSections.map((_, i) => (
                            <div key={i}>
                                <span className="placeholder col-5 mb-2 rounded opacity-25"></span>
                                <div className="d-flex flex-wrap gap-2">
                                    {skeletonBadges.map((_, j) => (
                                        <span key={j} className="placeholder dev-loadouts-placeholder-badge rounded"></span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* DESKTOP SKELETON */
                    /* ADDED 'flex-grow-1' here so this wrapper fills the card */
                    <div className="d-flex flex-column gap-2 flex-grow-1">
                        {skeletonSections.map((_, index) => (
                            <span 
                                key={index} 
                                className="placeholder dev-loadouts-placeholder-item rounded"
                            ></span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}