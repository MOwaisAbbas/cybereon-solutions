"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';
import { RiNewspaperLine } from 'react-icons/ri';

const navItems = [
    { name: 'Leads', icon: <HiOutlineMailOpen size={22} />, href: '/admin' },
    { name: 'Newsletter', icon: <RiNewspaperLine size={22} />, href: '/admin/news-letter' },
];

export default function AdminSidebar() {
    const router = useRouter();
    const path = usePathname()

    const handleLogout = async () => {
        await fetch('/api/logout');
        router.push('/'); // or wherever you want to redirect
    };

    return (
        <aside className="admin-sidebar">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`${path === item?.href ? "active" : ''}`}
                >
                    <span>{item.icon}</span>
                    <span className='name'>{item.name}</span>
                </Link>
            ))
            }
            <div
                onClick={handleLogout}
            >
                <span><MdLogout size={22} /></span>
                <span className='name'>Logout</span>
            </div>
        </aside >
    );
}
