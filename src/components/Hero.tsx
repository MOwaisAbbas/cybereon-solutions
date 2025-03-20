import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='hero-sec'>
            <div className='content-box'>
                <h1>Securing the <span className='highlight'>Eon</span><br/> of Innovation</h1>
                <p>CyberEon Solutions UG is your trusted cybersecurity partner—helping businesses thrive securely in a digital-first world.
                </p>
               <div className="btn-grp">
               <button>
                    Learn More
                </button>
                <button className='active'>
                    Get In Touch
                </button>
               </div>
            </div>
            <div className='img-box'>
                <Image
                    src="/icon.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default Hero