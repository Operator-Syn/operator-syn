export default function ProfileDetails({ profileInfo }: any) {
    return (
        <div className="profileDetails flex-fill d-flex flex-column justify-content-center rounded-border">
            {profileInfo.map((info: any) => (
                <p key={info.label} className="text-center m-0">
                    {info.label}: {info.value}
                </p>
            ))}
        </div>
    );
}
