import { SignUpCompanies } from "./components/auth/SignUpCompanies";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpUsers } from "./components/auth/SignUpUsers";
import { Landing } from "./components/routes/Landing";
import { CtaSingIn } from "./components/auth/CtaSingIn";
import logo from "./assets/imgs/Place1.jpg";

import { CardLocation } from "./components/cards/CardLocation";

export function App() {
    return (
        <Routes>
             <Route path="/" element={<Landing />} /> 
            <Route path="/Card" element={<CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/>} />  
            <Route path="/signUpCompanies" element={<SignUpCompanies />} /> 
            <Route path="/signUpUser" element={<SignUpUsers/>} />
            <Route path="/signIn" element={<CtaSingIn />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        
    )
}