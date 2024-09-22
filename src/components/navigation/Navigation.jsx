import "../../index.css";
import { useFetchMenubar } from  "../hooks/useFetchMenubar.js";
import { Sidebar } from "./Sidebar.jsx";
import { Menubar } from "./Menubar.jsx";
import propTypes from "prop-types";

export function Navigation({darkMode}) {

    const { isMobile } = useFetchMenubar();

    return(
        <div>
            {isMobile ? <Menubar /> : <Sidebar darkMode={darkMode} />}
        </div>
    )

}

Navigation.propTypes = {
    darkMode: propTypes.func

}