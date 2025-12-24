import { useEffect, useState } from "react";
import type { HomePageTypes } from "../../../types/HomePageTypes";
import "./Home.css";

import HeaderComponent from "../../headerComponent/HeaderComponent";
import ElevatorPitchComponent from "../../elevatorPitch/ElevatorPitch";
import CookingArea from "../../cookingArea/CookingArea";
import ColumnPanels from "../../columnPanels/ColumnPanels";
import ProfileImageComponent from "../../profileImageComponent/ProfileImageComponent";
import DevelopmentLoadoutsComponent from "../../developmentLoadoutsComponent/DevelopmentLoadoutsComponent";

export default function Home() {
    const [data, setData] = useState<HomePageTypes | null>(null);
    
    // Helper variable to determine loading state
    const isLoading = !data;

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${apiUrl}/home`);
                if (!response.ok) throw new Error("Failed to fetch");
                const result: HomePageTypes = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error loading portfolio data:", error);
            }
        };
        fetchHomeData();
    }, []);

    return (
        <CookingArea>
            <div className="container-fluid py-3">
                {/* Row 1: Header & Profile */}
                <div className="row g-3 mb-3 d-flex align-items-stretch stack-on-mobile">
                    
                    <HeaderComponent
                        isLoading={isLoading}
                        headerPhrase={data?.site?.headerPhrase}
                        mobileHeaderPhrase={data?.site?.mobileHeaderPhrase}
                    />

                    <ProfileImageComponent
                        isLoading={isLoading}
                        src={data?.site?.profileImage}
                        className="order-first-on-mobile"
                    />
                </div>

                {/* Row 2: Content Sections */}
                <div className="row g-3 stack-on-mobile">
                    
                    {/* Elevator Pitch - Needs a wrapper now that we removed it from the component */}
                    <div className="col-4 d-flex flex-column">
                        <ElevatorPitchComponent
                            isLoading={isLoading}
                            items={data?.sections.pitch.items.map((text: string) => ({
                                title: "Know 'lil more about me",
                                content: text
                            }))}
                        />
                    </div>

                    <DevelopmentLoadoutsComponent 
                        isLoading={isLoading}
                        content={data ? {
                            header: "Development Loadouts",
                            sections: data.sections.loadouts
                        } : undefined} 
                    />

                    <ColumnPanels
                        isLoading={isLoading}
                        profileInfo={data?.profile}
                        socialLinks={data ? data.sections.social.items.map(link => ({
                            href: link.target_url,
                            img: link.image_url,
                            alt: link.label
                        })) : undefined}
                        className="order-first-on-mobile"
                    />
                </div>
            </div>
        </CookingArea>
    );
}