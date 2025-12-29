
import Hero from "../components/pages/home/hero";
import ProjectGallery from "../components/pages/home/project-gallery";
import MissionStatement from "../components/pages/home/mission-statement";
import PhotoGrid from "../components/pages/home/PhotoGrid";
import ClientLogos from "../components/ClientLogos";

export default function Home(){
    return (
        <>
        <Hero />
        <ProjectGallery />
        <MissionStatement />
        <PhotoGrid />
        <ClientLogos />
        </>
    );
};
