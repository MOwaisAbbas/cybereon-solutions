"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { FaEnvelope, FaUser } from "react-icons/fa";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("/api/leads", formData); // Replace with your API endpoint

            if (response.data.success) {
                toast.success("Form Submitted successfully!");
                setFormData({ name: "", email: "", message: "" }); // Clear form fields
            } else {
                toast.error("Failed to send the message. Please try again.");
            }
        } catch (err) {
            toast.error(err?.response?.data?.message || "An error occurred while sending your message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-us" id="contact-us">
            <div className="img-box">
                <Image src="/ContactUs.svg" alt="Cybereon Solutions" width={100} height={100} />
            </div>
            <div className="content-box">
                <h2>Get In Touch</h2>
                <p>Let’s Build a Secure Digital Future Together</p>
                <p className="desc">
                    Connect with us today to discuss your cybersecurity needs or schedule a free initial consultation.
                </p>

                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>


                    <div className="label">
                        <FaUser size={20} />
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name here"
                            className="outline-none flex-1 bg-transparent"
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="label">
                        <FaEnvelope size={20} />
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email here"
                            className="outline-none flex-1 bg-transparent"
                            value={formData.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="label textarea">
                        <BsFillChatRightDotsFill size={20} />
                        <textarea
                            id="message"
                            placeholder="Enter your Message here"
                            className="outline-none flex-1 bg-transparent"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}

                        ></textarea>
                    </div>
                    <button type="submit" className="active" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUsForm;
