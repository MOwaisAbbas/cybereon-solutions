'use client';

import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginModal({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('/api/login', {
                role: 'admin',
                email,
                password,
            });

            if (res?.data?.success) {
                toast.success("Login Successful");
                onLoginSuccess(); // Uncomment if you handle successful login
            } else {
                toast.error('Invalid email or password');
            }
        } catch (err: unknown) {
            const axiosError = err as AxiosError<{ message: string }>;
            if (axiosError.response?.data?.message) {
                toast.error(axiosError.response.data.message);
            } else {
                toast.error('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }

    };


    return (
        <div className="login-from">
            <div className="modal-content" >
                <form
                    onSubmit={login}
                    className="popup-form"
                >
                    <h2 className="">Admin Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" id="name" value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" id="email" value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" disabled={loading} className="submit-button active">
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
