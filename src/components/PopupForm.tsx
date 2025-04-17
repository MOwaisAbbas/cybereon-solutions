import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

type PopupFormProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopupForm = ({ open, setOpen }: PopupFormProps) => {
    if (!open) return null;

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
            const response = await axios.post("/api/leads", formData); // Replace with your actual API endpoint

            if (response.data.success) {
                toast.success("Form Submitted successfully!");
                setOpen(false)
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
        <div className="modal-overlay" onClick={() => setOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setOpen(false)}>
                    &times;
                </button>

                <form className="popup-form" onSubmit={handleSubmit}>
                    <h2>Book Consultation</h2>


                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}

                        />
                    </div>

                    <button type="submit" className="submit-button active" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
