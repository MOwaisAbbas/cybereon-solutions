'use client';

import axios from 'axios';
import { useState } from 'react';

export default function LoginModal({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setLoading(true)
        try {
            const res = await axios.post('/api/login', {
                role: 'admin',
                email,
                password,
            });

            if (res?.data?.success) {
                console.log('Login success');
                onLoginSuccess(); // Uncomment if you handle successful login
            } else {
                setError('Invalid email or password');
            }
            setLoading(false)
        } catch (err: any) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
            setLoading(false)
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
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" id="email" value={password} onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>

                    <p className='text-red-500 text-center'>{error}</p>
                    <button type="submit" disabled={loading} className="submit-button active">
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
