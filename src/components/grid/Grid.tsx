// Grid.tsx
import { type MediaItem } from '../../types/MediaCardTypes';
import MediaCard from '../mediaCard/MediaCard';

interface GridProps {
    projects: MediaItem[];
    onProjectClick: (project: MediaItem) => void;
}

export default function Grid({ projects, onProjectClick }: GridProps) {
    return (
        <div className="row g-4">
            {projects.map((item) => (
                /* The column wrapper stays here to define the grid structure */
                <div key={item.id} className="col-12 col-lg-4">
                    <MediaCard 
                        project={item} 
                        onClick={onProjectClick} 
                    />
                </div>
            ))}
        </div>
    );
}