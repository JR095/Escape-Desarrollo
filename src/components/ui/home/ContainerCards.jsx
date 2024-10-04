import "../../../index.css"

import { CardLocation } from "../../cards/CardLocation";
import logo from "../../../assets/imgs/Place1.jpg";
import propTypes from "prop-types";


export function ContainerCards({setIsOpen}) {
    return (
    
        <div className="grid mb-[4rem] md:mb-4 justify-center md:grid-cols-2 lg:grid-cols-[auto_auto_auto] gap-4 overflow-x-hidden transition-all duration-500 ">
            <CardLocation image={logo} name="Casa de Campo" city="Casa de Campo, Montevideo" starts="4.8" setIsOpen={setIsOpen} id={1}/>
            <CardLocation image={logo} name="Casa de Campo" city="Casa de Campo, Montevideo" starts="4.8" setIsOpen={setIsOpen} id={2}/>
            <CardLocation image={logo} name="Casa de Campo" city="Casa de Campo, Montevideo" starts="4.8" setIsOpen={setIsOpen} id={3}/>
            <CardLocation image={logo} name="Casa de Campo" city="Casa de Campo, Montevideo" starts="4.8" setIsOpen={setIsOpen} id={4}/>
            <CardLocation image={logo} name="Casa de Campo" city="Casa de Campo, Montevideo" starts="4.8" setIsOpen={setIsOpen} id={5}/>

        </div>

    )  
}

ContainerCards.propTypes = {
    setIsOpen: propTypes.func
  };
  