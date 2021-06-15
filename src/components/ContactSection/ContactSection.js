import React from 'react'

function ContactSection() {
    return (
        <div data-aos="fade-up" className="contact-container">
            <div className="contact-content">
            <h1 className="contact-heading">Interested In BlueBridge?</h1>
            <h1 className="contact-text">Get in touch</h1>
            <div className="contact-form">
                <input type="text" className="contact-form-input" placeholder="Email" />
                <button className="contact-button">Get Started</button>
            </div>
            </div>
        </div>
    )
}

export default ContactSection;
