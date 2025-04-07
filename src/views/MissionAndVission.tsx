import Image from "next/image"

const MissionAndVission = () => {
    return (
        <section className='Missin-Vission-sec'>
            <div className='img-box'>
                <Image
                    src="/MissionVission.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
            <div className='content-box'>
                <h2>Our Mission</h2>
                <p>To deliver reliable, tailored, and business-aligned cybersecurity services that enable our clients to innovate with confidence and operate securely in a digital-first world.
                </p>
                <h2>Our Vision</h2>
                <p>To be the preferred cybersecurity partner for organizations seeking trusted expertise, resilient solutions, and long-term strategic value in protecting their digital future.</p>

            </div>

        </section>
    )
}

export default MissionAndVission