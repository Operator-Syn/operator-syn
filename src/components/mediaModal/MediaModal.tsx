// MediaModal.tsx
import { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { type MediaItem } from '../../types/MediaCardTypes';
import MediaRenderer from '../mediaRenderer/MediaRenderer';
import './MediaModal.css'

interface MediaModalProps {
    project: MediaItem;
    show: boolean;
    onClose: () => void;
}

export default function MediaModal({ project, show, onClose }: MediaModalProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Helper to determine if we have more than 1 item
    const hasMultipleSlides = project.gallery.length > 1;

    const handleSlide = () => {
        setIsVideoPlaying(false);
    };

    return (
        <Modal
            show={show}
            onHide={onClose}
            size="xl" 
            centered
            backdrop="static"
            keyboard={true}
            contentClassName='light-glass-blue-hue-opaque'
        >
            <Modal.Header className='border-0' closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="p-0 border-0">
                <Carousel
                    className='border-0 custom-carousel-controls'
                    // Stop auto-play if video is playing OR if there is only 1 slide
                    interval={isVideoPlaying || !hasMultipleSlides ? null : 5000}
                    pause="hover"
                    // Only show arrows if there is more than 1 slide
                    controls={hasMultipleSlides}   
                    indicators={false} 
                    // Optional: Disable swiping on touch devices if only 1 slide
                    touch={hasMultipleSlides} 
                    onSlide={handleSlide}
                >
                    {project.gallery.map((media, index) => (
                        <Carousel.Item key={index}>
                            <div className="ratio ratio-16x9 bg-transparent border-0">
                                <MediaRenderer
                                    type={media.type}
                                    url={media.url}
                                    className="object-fit-contain w-100 h-100 border-0"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="p-4">
                    <h5>About this Project</h5>
                    <p className="global-font-color ">{project.longDescription}</p>
                </div>
            </Modal.Body>

            <Modal.Footer className='border-0'>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                {/* Optional: Hide this button if link is empty (like in your 'Still Cooking' card) */}
                {project.projectLink && (
                    <Button
                        variant="primary"
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project Source
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}