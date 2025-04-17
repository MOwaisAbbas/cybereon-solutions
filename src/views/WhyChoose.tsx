"use client"
import PopupForm from '@/components/PopupForm';
import { goToSection } from '@/lib/function';
import Image from 'next/image';
import { useState } from 'react';


type Point = {
    title: string;
    description: string;
    image: string;
};

const points: Point[] = [
    {
        title: "Years of Experience",
        description: "Deep industry expertise & proven track record",
        image: "/chooseUs/Experience.svg",
    },
    {
        title: "Certified Professional Team",
        description: "Integrity, skill, and commitment in every solution",
        image: "/chooseUs/Team.svg",
    },
    {
        title: "Tailored Cybersecurity Strategies",
        description: "Custom solutions to protect your business",
        image: "/chooseUs/Network.svg",
    },
    {
        title: "Deep Industry Experience & Integrity",
        description: "Reliable security backed by expertise",
        image: "/chooseUs/Integrity.svg",
    },
    {
        title: "Rapid Incident Response",
        description: "Immediate action when it matters most",
        image: "/chooseUs/Response.svg",
    },
    {
        title: "Long-Term Partnership Mindset",
        description: "Security solutions built for lasting success",
        image: "/chooseUs/Partnership.svg",
    },
];



const WhyChoose = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className="why-choose">
            <PopupForm open={open} setOpen={setOpen} />
            <div className='img-box'>
                <Image
                    src="/choice-illustration.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
            <div className='content-box'>
                <h2>Why Choose Us?</h2>
                <p>Reason for <br /> Choosing Us</p>
                <p className="desc">
                    At CyberEon Solutions, we deliver tailored cybersecurity to protect your business from evolving threats.
                </p>

                <div className='points'>
                    {points.map((point, index) => (
                        <div key={index} className='point'>
                            <div className='box'>
                                <Image
                                    src={point?.image}
                                    alt={point?.title}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div>
                                <p className='title'>{point?.title}</p>
                                <p className='description'>{point?.description}</p>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="btn-grp">
                    <button onClick={() => goToSection('contact-us')}>
                        Get in Touch
                    </button>
                    <button onClick={() => setOpen(true)} className='active'>
                        Book a Consultation
                    </button>
                </div>
            </div>

        </section>
    )
}

export default WhyChoose