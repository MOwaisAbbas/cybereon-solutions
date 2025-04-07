import Image from "next/image"

const Approach = () => {
    return (
        <section className='Appraoch-sec'>
            <div className='content-box'>
                <h2>Our Approach</h2>
                <h3>Client-Centric Approach </h3>
                <p>We tailor every engagement to your specific risk profile, industry, and maturity level.
                </p>
                <h3>Actionable Expertise</h3>
                <p>Our recommendations go beyond theory; we deliver strategies that are realistic, implementable, and results-driven.</p>
                <h3>Commitment to Excellence </h3>
                <p>Quality, integrity, and professionalism form the foundation of every client relationship.</p>
                <h3>Local Presence, Global Standards </h3>
                <p>Based in Germany, we serve clients across borders with a focus on EU standards, including GDPR and ISO frameworks.</p>
                <h3>Trusted Long-Term Partnerships </h3>
                <p>We view cybersecurity as an ongoing journey and partner with our clients to support them at every stage.</p>
            </div>
            <div className='img-box'>
                <Image
                    src="/Approach.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>

        </section>
    )
}

export default Approach