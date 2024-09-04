import { useEffect, useState } from "react";

export const useFetchSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [sidebarWidth, setSidebarWidth] = useState("250px");

    useEffect(() => {
        const logo = document.getElementById("logo");

        const handleClick = () => {
            if (isExpanded) {
                setSidebarWidth("80px");
            } else {
                setSidebarWidth("250px");
            }
            setIsExpanded(!isExpanded); 
        };

        if (logo) {
            logo.addEventListener("click", handleClick);
        }

        return () => {
            if (logo) {
                logo.removeEventListener("click", handleClick);
            }
        };
    }, [isExpanded]);

    return { sidebarWidth };
};
