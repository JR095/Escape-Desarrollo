import "../../../index.css";
import { RecommendedCard } from "../../cards/RecommendedCard";
import Place1 from '../../../assets/imgs/Place1.jpg';
import Place2 from '../../../assets/imgs/Place2.jpg';
import Place3 from '../../../assets/imgs/Place3.jpg';
import Place4 from '../../../assets/imgs/Place4.jpg';

export function Recommended() {
    return (
        <div className="lg:p-12 p-8">
            <h1 className="text-blue-950 lg:text-[2rem] text-2xl font-bold text-center">RECOMENDACIONES</h1>
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] lg:pt-12 pt-8">
                <RecommendedCard image={Place1}name="NOMBRE LUGAR" city="PUNTARENAS"/>
                <RecommendedCard image={Place2}name="NOMBRE LUGAR" city="PUNTARENAS"/>
                <RecommendedCard image={Place3}name="NOMBRE LUGAR" city="PUNTARENAS"/>
                <RecommendedCard image={Place4}name="NOMBRE LUGAR" city="PUNTARENAS"/>
            </div>
        </div>
    )
}