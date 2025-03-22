import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


type Service = {
    name: string;
    path: string;
    desc: string;
    logo: string;
  };
  
  const services: Service[] = [
    {
      name: "Cybersecurity Strategy & Advisory",
      path: "/service/cybersecurity-strategy",
      desc: "Build a resilient cybersecurity foundation with expert strategy, risk management, and compliance solutions. Secure your business today!",
      logo: "/services/1.svg"
    },
    {
      name: "Cybersecurity Assurance & Testing",
      path: "/service/cybersecurity-assurance",
      desc: "Validate, test, and strengthen your defenses before attackers do. Gain visibility into security gaps with audits, penetration testing, and control validations.",
      logo: "/services/2.svg"
    },
    {
      name: "Business Continuity & Resilience",
      path: "/service/business-continuity",
      desc: "Prepare for disruptions with a tested business continuity strategy. Minimize downtime and ensure resilience against cyber threats, system failures, and crises.",
      logo: "/services/3.svg"
    },
    {
      name: "Data Protection & Compliance",
      path: "/service/data-protection",
      desc: "Ensure regulatory compliance and safeguard sensitive data. Navigate GDPR, privacy policies, and governance frameworks with expert guidance.",
      logo: "/services/4.svg"
    },
    {
      name: "Security Awareness & Culture",
      path: "/service/security-awareness",
      desc: "Empower your workforce with engaging, role-specific security training. Reduce human risk and build a resilient cybersecurity culture.",
      logo: "/services/5.svg"
    },
    {
      name: "Virtual CISO & Security Resourcing",
      path: "/service/virtual-ciso",
      desc: "Gain on-demand cybersecurity leadership and expertise. Scale your security operations with experienced professionals—flexibly and efficiently.",
      logo: "/services/6.svg"
    }
  ];

const Services = () => {
    return (
        <section className='services'>
            <h2>OUR SERVICES</h2>
            <p className='text-justify md:text-center'>At CyberEon Solutions UG, we specialize in protecting your digital environment through practical and proven cybersecurity services. Whether you&apos;re a startup or an established enterprise, we offer strategic solutions that secure your data, systems, and reputation.</p>

            <div className='service-cards'>
                {services.map((service , index) => (
                    <Link 
                    href={service.path}
                    key={index}
                    >
                    <div  className="card">
                        <div className="box">
                            <Image
                            src={service.logo}
                            alt={service.name}
                            width={45}
                            height={45}
                            />
                        </div>
                        <h2>{service.name}</h2>
                        <p>{service.desc}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Services