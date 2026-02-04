import "./ProfileInfo.css";

export default function ProfileInfoPlaceholder() {
    return (
        <div 
            className="light-glass-blue-hue loading-state flex-grow-1 p-0 py-3 p-md-3 rounded shadow-sm d-flex flex-column justify-content-center placeholder-glow profile-glow-fast" 
            aria-hidden="true"
        >
            <div className="d-flex flex-column gap-2 align-items-center">
                <span className="placeholder profile-placeholder-line col-8 rounded"></span>
                <span className="placeholder profile-placeholder-line col-6 rounded"></span>
                <span className="placeholder profile-placeholder-line col-9 rounded"></span>
            </div>
        </div>
    );
}