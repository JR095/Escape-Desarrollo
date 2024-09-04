import { SignUpCompanies } from "./components/auth/SignUpCompanies";
import { SignIn } from "./components/auth/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpUsers } from "./components/auth/SignUpUsers";
import { Landing } from "./components/routes/Landing";
import { Sidebar } from "./components/navigation/Sidebar";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Sidebar />} /> 
        </Routes>
        
    )
}

//<Route path="/" element={<Landing />} />  
//<Route path="/signUpCompanies" element={<SignUpCompanies />} /> 
//<Route path="/signUpUser" element={<SignUpUsers/>} />
//<Route path="/signIn" element={<SignIn />} />
//<Route path="/*" element={<Navigate to="/" />} />