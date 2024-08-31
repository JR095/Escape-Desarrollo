import "../../index.css";
import { Footer } from "../footer/Footer";
import { Categories } from "../ui/landing/Categories";
import { Recommended } from "../ui/landing/Recommended";
import { TravelRoute } from "../ui/landing/TravelRoute";

export function Landing() {
    return (
        <>
        <Categories/>
        <Recommended/>
        <TravelRoute/>
        <Footer/>
        </>
    )
}