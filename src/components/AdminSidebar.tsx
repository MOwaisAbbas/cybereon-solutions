"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiNewspaperLine } from 'react-icons/ri';

const navItems = [
    { name: 'Leads', icon: <HiOutlineMailOpen size={22} />, href: '/admin' },
    { name: 'Newsletter', icon: <RiNewspaperLine size={22} />, href: '/admin/news-letter' },
];

export default function AdminSidebar() {

    const path = usePathname()

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
        </aside >
    );
}
