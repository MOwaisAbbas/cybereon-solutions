'use client';

import { useState } from 'react';

export default function LoginModal({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ role: 'admin' }),
        });

        if (res.ok) {
            onLoginSuccess();
            console.log("login success")
        } else {
            alert('Login failed');
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
                    <button type="submit" className="submit-button active">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
