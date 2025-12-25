import { useQuery } from "@tanstack/react-query";
import type { HomePageTypes } from "../../../types/HomePageTypes";
import "./Home.css";
import HeaderComponent from "../../headerComponent/HeaderComponent";
import ElevatorPitchComponent from "../../elevatorPitch/ElevatorPitch";
import CookingArea from "../../cookingArea/CookingArea";
import ColumnPanels from "../../columnPanels/ColumnPanels";
import ProfileImageComponent from "../../profileImageComponent/ProfileImageComponent";
import DevelopmentLoadoutsComponent from "../../developmentLoadoutsComponent/DevelopmentLoadoutsComponent";

// 1. The Fetch Function
const fetchHomeData = async (): Promise<HomePageTypes> => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/home`);
    if (!response.ok) {
        throw new Error("Failed to fetch home data");
    }
    return response.json();
};

export default function Home() {
    // 2. The React Query Hook
    const { data, isLoading, isError } = useQuery({
        queryKey: ["homeData"],
        queryFn: fetchHomeData,
        refetchInterval: 1000 * 60 * 30,
        refetchIntervalInBackground: true,
        staleTime: 1000 * 60 * 30,
        gcTime: 1000 * 60 * 35,
    });

    if (isError) return <div className="p-5 text-center text-danger">Error loading portfolio data.</div>;

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

                    {/* Elevator Pitch */}
                    <div className="col-4 d-flex flex-column">
                        <ElevatorPitchComponent
                            isLoading={isLoading}
                            items={data?.sections.pitch.items}
                        />
                    </div>

                    {/* Development Loadouts */}
                    <DevelopmentLoadoutsComponent
                        isLoading={isLoading}
                        content={data ? {
                            header: "Development Loadouts",
                            sections: data.sections.loadouts
                        } : undefined}
                    />

                    {/* Socials & Profile Info */}
                    <ColumnPanels
                        isLoading={isLoading}
                        profileInfo={data?.profile}
                        socialLinks={data?.sections.social.items.map((link) => ({
                            href: link.target_url,
                            img: link.image_url,
                            alt: link.label
                        }))}
                        className="order-first-on-mobile"
                    />
                </div>
            </div>
        </CookingArea>
    );
}