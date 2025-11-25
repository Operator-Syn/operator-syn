interface ElevatorPitchItem {
    title: string;
    content: string;
}

interface ElevatorPitchProps {
    items: ElevatorPitchItem[];
}

export default function ElevatorPitchComponent(props: ElevatorPitchProps) {
    const { items } = props;

    return (
        <div className="col-4 d-flex flex-column">
            <div className="light-glass-blue-hue flex-grow-1 p-3 rounded shadow-sm">
                {items.map((item, index) => (
                    <div key={index}>
                        <h2 className="m-0">{item.title}</h2>
                        <hr />
                        <p className="text-justify m-0">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
