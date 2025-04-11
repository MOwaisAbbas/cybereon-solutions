"use client"
import { goToSection } from "@/lib/function";
import Image from "next/image";

type ServiceIntroProps = {
    name: string;
    subHeading: string;
    description: string;
}

const ServiceIntro = ({ name, subHeading, description }: ServiceIntroProps) => {
    return (
        <section className='about-sec'>
            <div className='content-box'>
                <p>{name}</p>
                <h2 style={{ marginBlock: '0.5rem' }}>{subHeading}</h2>
                <p className="desc">
                    {description}
                </p>
                <div className="btn-grp">
                    <button onClick={() => goToSection('contact-us')} className='active'>
                        Get In Touch
                    </button>
                </div>
            </div>
            <div className='img-box'>
                <Image
                    src="/ServiceIcon.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default ServiceIntro