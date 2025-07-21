// Email service configuration using EmailJS
import emailjs from '@emailjs/browser';

// EmailJS configuration - using actual credentials
const EMAILJS_CONFIG = {
    serviceId: 'default_service',           // Your EmailJS service ID
    templateId: 'template_k161vic',         // Your EmailJS template ID
    publicKey: 'a5o6ufciw_3QPffUD',        // Your EmailJS public key
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
            // Primary fields for the template
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            to_email: 'dhruvagrawal552@gmail.com',

            // Subject with sender info
            subject: `Portfolio Contact: ${formData.subject} - From ${formData.name}`,

            // Enhanced message with all sender details at the top
            message: `
SENDER DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Date: ${new Date().toLocaleString()}

REPLY TO: ${formData.email}

MESSAGE:
${formData.message}

---
You can reply directly to this email to respond to ${formData.name} at ${formData.email}
            `.trim(),

            // Individual fields that match your original HTML form
            title: `${formData.subject} - From ${formData.name}`,
            name: formData.name,
            email: formData.email,
            time: new Date().toLocaleString(),

            // Additional variations for template flexibility
            sender_info: `${formData.name} <${formData.email}>`,
            contact_email: formData.email,
            sender_name: formData.name,
            sender_email: formData.email,
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