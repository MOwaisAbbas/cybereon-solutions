"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubscribe = async () => {
        if (!email) {
            toast.error("Please enter a valid email.");
            return;
        }

        try {
            setSubmitting(true);

            const res = await axios.post("/api/newsletter", { email });

            if (res.data.success) {
                toast.success("Subscribed successfully!");
                setEmail("");
            } else {
                toast.error(res.data.message || "Subscription failed.");
            }
        } catch (err) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="news-letter">
            <h2>Get the latest cybersecurity insights and exclusive updates — subscribe to CyberEon today!</h2>
            <div className="subscribe-container">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="subscribe-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitting}
                />
                <button
                    className="subscribe-button"
                    onClick={handleSubscribe}
                    disabled={submitting}
                >
                    {submitting ? "Submitting..." : "Subscribe"}
                </button>
            </div>
        </section>
    );
};

export default NewsLetter;
