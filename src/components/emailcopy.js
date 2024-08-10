import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const EmailCopyButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    const email = "egritakatsinvestments@gmail.com";

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                // Show popup message
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
            })
            .catch(err => console.error('Failed to copy email: ', err));
        e.preventDefault(); // Prevent default link behavior
    };


    return (
        <div>
            <button onClick={copyToClipboard} style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                backgroundColor: "#D44638",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                width: "100%", // Makes the button fill the div horizontally
                height:"100%"
            }}>
                Email
                <FaEnvelope style={{ marginLeft: "0.5rem" }} />
            </button>
            {showPopup && (
                <div style={{
                    position: "fixed",
                    top: "20%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "1rem",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    zIndex: 1000,
                }}>
                    Vágólapra másolva.
                </div>
            )}
        </div>
    );
}

export default EmailCopyButton;
