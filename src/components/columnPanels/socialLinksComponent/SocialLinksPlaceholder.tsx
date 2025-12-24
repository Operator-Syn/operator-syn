import './SocialLinks.css';

export default function SocialLinksPlaceholder() {
    // Creating 5 items to simulate your actual links
    const skeletonBadges = Array(9).fill(null);

    return (
        <div 
            className="light-glass-blue-hue loading-state flex-grow-1 p-3 rounded shadow-sm d-flex flex-column justify-content-around placeholder-glow" 
            aria-hidden="true"
        >
            {/* Header Title */}
            <div className="">
                <span className="placeholder col-12 social-placeholder-title rounded mb-2"></span>
            </div>

            {/* The Brick Container */}
            {/* flex-wrap: allows bricks to drop to next line */}
            {/* justify-content-center: ensures pyramid/centered shape */}
            <div className="d-flex flex-wrap gap-2 justify-content-center align-content-start">
                {skeletonBadges.map((_, index) => (
                    <div 
                        key={index} 
                        className="placeholder social-placeholder-icon rounded" 
                    />
                ))}
            </div>
        </div>
    );
}