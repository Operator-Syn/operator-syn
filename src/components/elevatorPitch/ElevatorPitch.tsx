export default function ElevatorPitch({ elevatorPitch }: any) {
    return (
        <div className="elevatorPitch p-3 rounded-border">
            {elevatorPitch.map((item: any, index: number) => (
                <div key={index}>
                    <h2 className="m-0">{item.title}</h2>
                    <hr />
                    <p className="text-justify">{item.content}</p>
                </div>
            ))}
        </div>
    );
}
