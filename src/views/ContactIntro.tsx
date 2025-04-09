"use client"
import { goToSection } from "@/lib/function"
import Image from "next/image"

const ContactIntro = () => {
    return (
        <section className='about-sec'>
            <div className='content-box'>
                <p>Meet the Challenges With Our Experts</p>
                <p className="desc">
                    At <span className="highlight">CyberEon Solutions</span>, we understand that navigating cybersecurity, compliance, and resilience can be daunting. Whether you're facing evolving threats, stringent regulations, or operational disruptions, our team of certified experts is here to guide you.
                    <br />
                    <br />
                    From risk assessments and penetration testing to virtual CISO leadership and employee training, we provide tailored solutions to turn your challenges into strategic advantages. Let’s build a future-ready security posture together.


                </p>
                <div className="btn-grp">
                    <button onClick={() => goToSection('contact-us')} className='active'>
                        Get In Touch
                    </button>
                </div>
            </div>
            <div className='img-box'>
                <Image
                    src="/ContactUs2.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default ContactIntro