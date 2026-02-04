import './ElevatorPitch.css';

export default function ElevatorPitchPlaceholder() {
    // Create an array of 5 items to simulate 5 text bricks
    const skeletonBadges = Array(3).fill(null);

    return (
        <div 
            className="light-glass-blue-hue flex-grow-1 p-3 rounded shadow-sm placeholder-glow" 
            aria-hidden="true"
        >
            <div className="mb-4">
                {/* Static Title & HR (Appears once) */}
                <span className="placeholder col-12 mb-4 elevator-title-brick rounded"></span>
                <hr />
                
                {skeletonBadges.map((_, index) => (
                    <span 
                        key={index} 
                        className="placeholder col-12 elevator-content-brick rounded mb-2" 
                    ></span>
                ))}
            </div>
        </div>
    );
}