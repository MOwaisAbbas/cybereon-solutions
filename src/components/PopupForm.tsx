import React from "react";

type PopupFormProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopupForm = ({ open, setOpen }: PopupFormProps) => {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setOpen(false)}>
                    &times;
                </button>

                <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
                    <h2>Book Consultation</h2>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={4} required />
                    </div>

                    <button type="submit" className="submit-button active">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;