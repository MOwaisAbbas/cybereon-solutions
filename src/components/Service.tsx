import Image from "next/image";
import React from "react";

export interface ServiceData {
    name: string;
    path: string;
    subHeading: string;
    description: string;
    features: {
        title: string;
        detail: string;
    }[];
    outcome: string;
    cta: string;
}

const ServiceComponent = ({ service }: { service: ServiceData }) => {
    let IMAGE: string = "/Advisory.svg";

    switch (service.name) {
        case "Cybersecurity Strategy & Advisory":
            IMAGE = "/Advisory.svg"
            break;
        case "Cybersecurity Assurance & Testing":
            IMAGE = "/Assurance.svg"
            break;
        case "Business Continuity & Resilience":
            IMAGE = "/Continuation.svg"
            break;
        case "Data Protection and Compliance":
            IMAGE = "/Protection.svg"
            break;
        case "Security Awareness & Culture":
            IMAGE = "/Training.svg"
            break;
        case "Virtual CISO & Security Resourcing":
            IMAGE = "/Strategies.svg"
            break;

        default:
            IMAGE = "/Advisory.svg"
            break;
    }

    return (
        <section className='ser-sec'>
            <div className='img-box'>
                <Image
                    src={IMAGE}
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
            <div className='content-box'>
                <h2>Our Services Include:</h2>
                {service?.features?.map((elem, index) => (
                    <React.Fragment key={index}>
                        <h3>{elem?.title}</h3>
                        <p>{elem?.detail}</p>
                    </React.Fragment>
                ))}
            </div>


        </section>
    )
}

export default ServiceComponent