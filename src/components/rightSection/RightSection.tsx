import Clock from "../clock/Clock";
import ProfileDetails from "../profileDetails/profileDetails";
import SocialLinks from "../socialLinks/SocialLinks";

export default function RightSection({ profileInfo, socialLinksContent, profileImage }: any) {
    return (
        <div className="rightSide d-flex flex-column justify-content-between">
            <div className="container-fluid d-flex justify-content-center">
                <div className="p-3">
                    <img src={profileImage} alt="Profile Picture" className="img-thumbnail profileImage" />
                </div>
            </div>

            <div className="d-flex flex-column flex-fill p-3 gap-3">
                <ProfileDetails profileInfo={profileInfo} />
                <SocialLinks socialLinksContent={socialLinksContent} />

                <div className="etC flex-fill rounded-border d-flex flex-column p-3">
                    <div className="d-flex flex-fill align-items-center">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
}
