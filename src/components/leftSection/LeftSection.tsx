import ElevatorPitch from "../elevatorPitch/ElevatorPitch";
import DevLoadouts from "../devLoadouts/DevLoadouts";

interface LeftSectionProps {
    homeContent: any;
    devLoadoutsContent: any;
    className?: string;
}

export default function LeftSection({ homeContent, devLoadoutsContent, className = "" }: LeftSectionProps) {
    const { headerPhrase, elevatorPitch } = homeContent;

    return (
        <div className={`leftSide d-flex g-3 flex-column ${className}`}>
            <div className="d-flex align-items-center p-3 mx-2">
                <h1 className="m-0">{headerPhrase}</h1>
            </div>

            <div className="d-flex flex-xxl-row flex-column gap-3 p-3">
                <ElevatorPitch elevatorPitch={elevatorPitch} />
                <DevLoadouts devLoadoutsContent={devLoadoutsContent} />
            </div>
        </div>
    );
}
