interface ProfileInfoItem {
    label: string;
    value: string;
}

interface ProfileInfoPanelProps {
    items: ProfileInfoItem[];
}

export default function ProfileInfoComponent(props: ProfileInfoPanelProps) {
    const { items } = props;

    return (
        <div className="light-glass-blue-hue flex-grow-1 p-0 py-3 p-md-3 rounded shadow-sm d-flex flex-column justify-content-center">
            <ul className="list-unstyled m-0">
                {items.map((info, index) => (
                    <li key={index} className="m-0">
                        <p className="text-center m-0">
                            {info.label}: {info.value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
