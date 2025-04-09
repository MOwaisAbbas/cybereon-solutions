import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


type NavItem = {
    name: string;
    path: string;
};

const Footer = () => {

    const services: NavItem[] = [
        {
            name: "Cybersecurity Strategy & Advisory",
            path: "/service/cybersecurity-strategy"
        },
        {
            name: "Cybersecurity Assurance & Testing",
            path: "/service/cybersecurity-assurance"
        },
        {
            name: "Business Continuity & Resilience",
            path: "/service/business-continuity"
        },
        {
            name: "Data Protection and Compliance",
            path: "/service/data-protection"
        },
        {
            name: "Security Awareness & Culture",
            path: "/service/security-awareness"
        },
        {
            name: "Virtual CISO & Security Resourcing",
            path: "/service/virtual-ciso"
        }
    ]

    return (
        <footer>
            <div className="img-box flex items-start justify-center">
                <Image
                    src="/darklogo.webp"
                    alt="Cybereon Solutions"
                    width={200}
                    height={130}
                />
            </div>
            <div>
                <h2>Services</h2>
                <ul>
                    {services?.map((elem, index) => (
                        <li key={index}>
                            <Link
                                href={elem?.path}
                            >
                                {elem?.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>About Us</h2>
                <ul>
                    <li>
                        <Link
                            href="#"
                        >
                            Vission and Mission
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                        >
                            Our Approach
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="contact-us">
                <h2>Contact Us</h2>
                <p><FaMapMarkerAlt size={20} />123 Main Street, Suite 456 <br />
                    Downtown, Karachi, Pakistan
                </p>
                <p><FaPhoneAlt size={20} /> +92 317 2619883</p>
                <p><FaEnvelope size={20} />owaisa.official@gmail.com</p>
            </div>
            <div className="bottom-footer">
                <div className="social-media-handles">
                    <div className="box"><FaFacebookF size={30} /></div>
                    <div className="box"><FaInstagram size={30} /></div>
                    <div className="box"><FaXTwitter size={30} /></div>
                    <div className="box"><FaLinkedin size={30} /></div>
                    <div className="box"><FaPinterestP size={30} /></div>
                </div>
                <p>Copyright © {(new Date()).getFullYear()} <Link href="#">Cybereon Solutions</Link>. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer