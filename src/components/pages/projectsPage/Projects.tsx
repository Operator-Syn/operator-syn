// Projects.tsx
import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import CookingArea from "../../cookingArea/CookingArea";
import './Projects.css';
import { type MediaItem } from '../../../types/MediaCardTypes';
import Grid from '../../grid/Grid';
import MediaModal from '../../mediaModal/MediaModal';

// Define the shape of the raw data coming from the API
interface ApiProject {
    id: number;
    title: string;
    thumbnail: {
        type: 'video' | 'image';
        url: string;
    };
    description: {
        short: string;
        long: string;
    };
    link: string;
    gallery: Array<{
        type: 'video' | 'image';
        url: string;
    }>;
}

// 2. Define Fetcher outside component (or memoized inside)
const fetchProjects = async (): Promise<MediaItem[]> => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/projects`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data: ApiProject[] = await response.json();

    return data.map((item) => ({
        id: item.id,
        title: item.title,
        type: item.thumbnail.type, 
        url: item.thumbnail.url,   
        shortDescription: item.description.short,
        longDescription: item.description.long,
        projectLink: item.link,
        gallery: item.gallery
    }));
};

// 3. The Static "Vibe" Card
// This sits outside the component so it doesn't get recreated on every render
const FUTURE_PROJECTS_CARD: MediaItem = {
    id: 999999, // High ID to avoid conflict
    title: "Still cooking",
    type: 'image',
    url: 'https://placehold.co/600x400/E2E8F0/64748B?text=In+Progress', 
    shortDescription: "More projects on the way. I'm always working on something new. Check back soon to see what’s been added to the collection.",
    longDescription: "",
    projectLink: "",
    gallery: [],
};

export default function Projects() {
    // UI States (Only keep what is local to the UI interaction)
    const [selectedProject, setSelectedProject] = useState<MediaItem | null>(null);
    const [showModal, setShowModal] = useState(false);

    // 3. React Query Hook
    const { 
        data: projects = [],
        isLoading, 
        isError 
    } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        refetchInterval: 1000 * 60 * 30,      
        refetchIntervalInBackground: true, 
        staleTime: 1000 * 60 * 30,             
        gcTime: 1000 * 60 * 35,                
    });

    // 4. Merge API Data with Static Card
    const displayProjects = useMemo(() => {
        // If data is still loading or errored, return empty
        if (isLoading || isError) return [];
        
        // Return the API projects list with the Static Card appended at the very end
        return [...projects, FUTURE_PROJECTS_CARD];
    }, [projects, isLoading, isError]);

    const handleOpenProject = (item: MediaItem) => {
        // Prevent opening the modal for the "Quietly Crafting" card
        if (item.id === FUTURE_PROJECTS_CARD.id) return;

        setSelectedProject(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false); 
    };

    return (
        <CookingArea>
            <div className="container">
                <h1 className="mb-4">Light and easy things that I've been working on.</h1>

                {/* Loading State */}
                {isLoading && (
                    <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {isError && (
                    <div className="alert alert-danger" role="alert">
                        Unable to load projects at the moment.
                    </div>
                )}

                {/* Data Loaded Successfully */}
                {!isLoading && !isError && (
                    <Grid 
                        projects={displayProjects} 
                        onProjectClick={handleOpenProject} 
                    />
                )}

                {/* The Modal Component */}
                {selectedProject && (
                    <MediaModal 
                        project={selectedProject}
                        show={showModal} 
                        onClose={handleCloseModal} 
                    />
                )}
            </div>
        </CookingArea>
    );
}