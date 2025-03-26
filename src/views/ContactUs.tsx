import Image from "next/image"
import { BsFillChatRightDotsFill } from "react-icons/bs"
import { FaEnvelope, FaUser } from "react-icons/fa"

const ContactUsForm = () => {
    return (
        <section className="contact-us">
            <div className='img-box'>
                <Image
                    src="/ContactUs.svg"
                    alt='Cybereon Solutions'
                    width={100}
                    height={100}
                />
            </div>
            <div className='content-box'>
                <h2>Get In Touch </h2>
                <p>Let’s Build a Secure Digital Future Together</p>
                <p className="desc">
                    Connect with us today to discuss your cybersecurity needs or schedule a free initial consultation.</p>

                <form className="max-w-md mx-auto">
                    <div className="label ">
                        <FaUser size={20} />
                        <input
                            type="text"
                            placeholder="Enter your name here"
                            className="outline-none flex-1 bg-transparent"
                        />
                    </div>
                    <div className="label ">
                        <FaEnvelope size={20} />
                        <input
                            type="email"
                            placeholder="Enter your Email here"
                            className="outline-none flex-1 bg-transparent"
                        />
                    </div>
                    <div className="label textarea">
                        <BsFillChatRightDotsFill size={20} />
                        <textarea
                            placeholder="Enter your Message here"
                            className="outline-none flex-1 bg-transparent"
                        ></textarea>
                    </div>
                </form>
                <button className='active'>
                    Send Message
                </button>
            </div>
        </section>
    )
}

export default ContactUsForm