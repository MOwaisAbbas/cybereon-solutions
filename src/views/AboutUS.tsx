import Image from "next/image"

const AboutUSView = () => {
    return (
        <section className='about-sec'>
            <div className='content-box'>
                <h2>About Us</h2>
                <p>Who We Are</p>
                <p className="desc">
                    <span className="highlight">CyberEon Solutions UG</span> is a German-based cybersecurity consultancy dedicated to securing digital ecosystems for businesses navigating today’s complex threat landscape. We specialize in delivering pragmatic, high-impact security services that help organizations reduce risk, ensure compliance, and build long-term resilience.
                    <br />
                    <br />
                    We serve as a trusted partner to companies of all sizes — from startups to established enterprises — offering tailored expertise across strategy, assurance, compliance, business continuity, and security operations.
                    <br />
                    <br />
                    Rooted in a philosophy of integrity, adaptability, and forward-thinking, we don’t just respond to threats — we anticipate them.

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
                    src="/info-icon.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default AboutUSView