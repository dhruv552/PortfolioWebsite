// Email service configuration using EmailJS
import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
    serviceId: 'service_portfolio_contact', // Replace with your EmailJS service ID
    templateId: 'template_contact_form',    // Replace with your EmailJS template ID
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',   // Replace with your EmailJS public key
};

// Initialize EmailJS
export const initializeEmailJS = () => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send email function
export const sendEmail = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'dhruvagrawal552@gmail.com', // Your email where you want to receive messages
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        );

        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};