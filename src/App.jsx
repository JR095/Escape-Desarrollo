import { SignUpCompanies } from "./components/auth/SignUpCompanies";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpUsers } from "./components/auth/SignUpUsers";
import { Landing } from "./components/routes/Landing";
import { SignIn } from "./components/auth/SignIn";
import { SignInCompanies } from "./components/auth/SignInCompanies";
import logo from "./assets/imgs/Place1.jpg";
import { CardLocation } from "./components/cards/CardLocation";
import { Home } from "./components/routes/Home";
import { AccountSettings } from "./components/profile/AccountSettings"
import { MapPage } from './components/map/MapPage';
import {PersonalInformation} from "./components/profile/PersonalInformation"
import { SearchResults } from "./components/routes/SearchResults";
import { ForgotPassword } from './components/password/ForgotPassword.jsx';
import { ComponentProvider } from './components/hooks/useComponentContext.jsx';
import { CreatePost } from "./components/routes/CreatePost.jsx";
import { Categories } from "./components/routes/Categories.jsx";
import { useState, useEffect } from "react";
import { UpdatePost } from "./components/routes/UpdatePost.jsx";


export function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode]);
      
        const toggleDarkMode = () => {
          console.log(darkMode);
          setDarkMode(!darkMode);
        };

    return (
        <ComponentProvider >
            <Routes className="dark:bg-[#2a2a2a]">
                <Route path="/" element={<Landing />} /> 
                <Route path="/Card" element={<CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/>} />  
                <Route path="/signUpCompanies" element={<SignUpCompanies />} /> 
                <Route path="/signUpUser" element={<SignUpUsers/>} />
                <Route path="/Categories" element={<Categories toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signInCompanies" element={<SignInCompanies />} />
                <Route path="/home" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/accountSettings" element={<AccountSettings toggleDarkMode={toggleDarkMode}/>} />
                <Route path="/PersonalInformation" element={<PersonalInformation toggleDarkMode={toggleDarkMode} />} />
                <Route path="/map" element={<MapPage />} /> 
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/update-post/:id" element={<UpdatePost />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </ComponentProvider>
    )
}

