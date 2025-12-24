import "./ProfileImage.css";

export default function ProfileImagePlaceholder() {
    return (
        <div 
            className="col-4 m-0 d-flex justify-content-center align-items-center profile-image-container-skeleton placeholder-glow"
            aria-hidden="true"
        >
            <div className="light-glass-blue-hue p-2 rounded-circle shadow-sm">
                <span className="placeholder profile-image-placeholder opacity-25"></span>
            </div>
        </div>
    );
}