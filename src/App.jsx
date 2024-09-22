import { SignUpCompanies } from "./components/auth/SignUpCompanies";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpUsers } from "./components/auth/SignUpUsers";
import { Landing } from "./components/routes/Landing";
import { SignIn } from "./components/auth/SignIn";
import logo from "./assets/imgs/Place1.jpg";
import { CardLocation } from "./components/cards/CardLocation";
import { Home } from "./components/routes/Home";
import { AccountSettings } from "./components/profile/AccountSettings"
import { MapPage } from './components/map/MapPage';
import {PersonalInformation} from "./components/profile/PersonalInformation"
import { SearchResults } from "./components/routes/SearchResults";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/Card" element={<CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/>} />  
            <Route path="/signUpCompanies" element={<SignUpCompanies />} /> 
            <Route path="/signUpUser" element={<SignUpUsers/>} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/AccountSettings" element={<AccountSettings />} />
            <Route path="/PersonalInformation" element={<PersonalInformation />} />
            <Route path="/map" element={<MapPage />} /> 
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        
    )
}

