import ProfileImagePlaceholder from "./ProfileImagePlaceholder";
import AsyncImage from "../asyncImageLoader/AsyncImage";
import "./ProfileImage.css";

interface ProfileImageProps {
    src?: string;
    isLoading: boolean;
    className?: string;
}

export default function ProfileImageComponent({ src, isLoading, className = "" }: ProfileImageProps) {
    if (isLoading || !src) {
        return (
            <div className={`col-4 d-flex justify-content-center align-items-center ${className}`}>
                <ProfileImagePlaceholder />
            </div>
        );
    }

    return (
        <div className={`col-4 d-flex justify-content-center align-items-center ${className}`}>
            <AsyncImage
                src={src}
                alt="Profile"
                wrapperClassName="img-thumbnail rounded-circle profile-image-dimensions p-1"
                loader={
                    <div className="w-100 h-100 light-glass-blue-hue rounded-circle d-flex align-items-center justify-content-center">
                         <span className="placeholder w-100 h-100 rounded-circle opacity-25"></span>
                    </div>
                }

                // 3. IMAGE: The inner "Photo" content when ready
                className="profileImage rounded-circle w-100 h-100"
            />
        </div>
    );
}