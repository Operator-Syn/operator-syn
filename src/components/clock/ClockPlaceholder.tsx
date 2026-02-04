import './Clock.css';

export default function ClockPanelPlaceholder() {
    return (
        <div 
            className="light-glass-blue-hue flex-grow-1 gap-2 gap-lg-1 p-3 rounded shadow-sm d-flex flex-column justify-content-around placeholder-glow"
            aria-hidden="true"
        >
            {/* Simulates "Good Morning! → 10:30:00 AM" */}
            <span className="placeholder clock-placeholder col-8 rounded h-50"></span>

            {/* Simulates "❏ Take a look around — I hope you find..." */}
            <span className="placeholder clock-placeholder col-12 rounded"></span>
        </div>
    );
}