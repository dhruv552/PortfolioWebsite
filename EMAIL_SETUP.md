# Email Service Setup Guide

Your contact form is now configured to send emails using EmailJS. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Service ID: `service_portfolio_contact` (or choose your own)
   - Enter your Gmail address: `dhruvagrawal552@gmail.com`
   - Follow the OAuth setup to connect your Gmail account

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Template ID: `template_contact_form` (or choose your own)
4. Use this template content:

```
Subject: New Portfolio Contact: {{subject}}

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Copy your Public Key

## Step 5: Update Configuration

Update the configuration in `src/lib/emailService.ts`:

```typescript
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id_here',     // From Step 2
  templateId: 'your_template_id_here',   // From Step 3
  publicKey: 'your_public_key_here',     // From Step 4
};
```

## Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email (dhruvagrawal552@gmail.com) for the message

## Troubleshooting

- Make sure your EmailJS service is active
- Check that your template variables match the ones in the code
- Verify your public key is correct
- Check the browser console for any errors

## Security Note

The public key is safe to use in frontend applications. EmailJS handles the secure email sending on their servers.