import { useState, useEffect } from 'react';
import { sendResetLink } from '../hooks/authService.js';
import { useNavigate } from 'react-router-dom';

export function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendResetLink({ email });
            setMessage(response.message);
            setError('');
        } catch (error) {
            setError('Failed to send reset link.');
            setMessage('');
        }
    };

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                navigate('/'); 
            }, 4000);

            return () => clearTimeout(timeout); 
        }
    }, [message, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
            <form
                className="bg-white rounded-lg shadow-md p-8 mx-10 lg:mx-16 w-[30vh] lg:w-[37vh]"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center mb-8 text-sky-500">
                    Reset Password
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#132443]"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    className="w-full py-2 px-4 mt-4 bg-sky-500 text-white font-semibold rounded-md cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
                    type="submit"
                >
                    Send Reset Link
                </button>
                {message && <p className="mt-4 text-green-600">{message}</p>}
                {error && <p className="mt-4 text-red-600">{error}</p>}
            </form>
        </div>
    );
}
