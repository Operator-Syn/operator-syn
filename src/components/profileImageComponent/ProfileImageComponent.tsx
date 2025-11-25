interface ProfileImageProps {
    src: string;
    className?: string; 
}

export default function ProfileImageComponent(props: ProfileImageProps) {
    const { src, className = "" } = props;

    return (
        <div className={`col-4 d-flex justify-content-center align-items-center ${className}`}>
            <img
                src={src}
                alt="Profile"
                className="img-thumbnail profileImage"
            />
        </div>
    );
}
