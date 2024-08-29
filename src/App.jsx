import { SignUp } from "./components/auth/SignUp";
import { SignIn } from "./components/auth/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";

export function App() {
    return (
        <Routes>
            
            <Route path="/" element={<SignUp />} />  
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        
    )
}