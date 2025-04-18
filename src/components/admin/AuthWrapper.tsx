'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import LoginModal from './LoginModel';

export default function AuthWrapper({
    children,
    isAuthenticated,
}: {
    children: React.ReactNode;
    isAuthenticated: boolean;
}) {
    const [showLogin, setShowLogin] = useState(!isAuthenticated);

    const router = useRouter();

    const handleLoginSuccess = async () => {
        // After login, refresh the route to load authenticated layout
        router.refresh();
        setShowLogin(false);
    };

    return (
        <>
            {showLogin && <LoginModal onLoginSuccess={handleLoginSuccess} />}
            {!showLogin && children}
        </>
    );
}
