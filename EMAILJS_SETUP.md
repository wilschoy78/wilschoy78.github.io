# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable the contact form on your portfolio website to send real emails.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. **Important**: Copy the **Service ID** (e.g., `service_xxxxxxx`)

### For Gmail:
- You may need to enable 2-factor authentication
- Use an App Password instead of your regular password

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Contact Form Message: {{subject}}

Hello,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. **Important**: Copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** in the API Keys section
3. **Important**: Copy the **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts` in your project
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'service_your_actual_service_id',
  templateId: 'template_your_actual_template_id', 
  publicKey: 'your_actual_public_key',
};
```

## Step 6: Test the Contact Form

1. Save your changes
2. The development server should automatically reload
3. Go to the Contact page
4. Fill out and submit the form
5. Check your email inbox for the message

## Troubleshooting

### Common Issues:

1. **"EmailJS is not configured" error**
   - Make sure you've updated all three values in `emailjs.ts`
   - Check for typos in your Service ID, Template ID, and Public Key

2. **Email not received**
   - Check your spam/junk folder
   - Verify your email service is properly connected in EmailJS
   - Test sending from the EmailJS dashboard first

3. **"Failed to send email" error**
   - Check browser console for detailed error messages
   - Verify your Public Key is correct
   - Make sure your EmailJS service is active

### Rate Limits:
- Free EmailJS accounts have a limit of 200 emails per month
- Consider upgrading if you expect high volume

## Security Notes

- The Public Key is safe to include in client-side code
- Never include your Private Key in frontend code
- EmailJS handles the secure email sending on their servers

## Support

If you encounter issues:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Visit the [EmailJS Support Center](https://www.emailjs.com/docs/faq/)
3. Test your setup in the EmailJS dashboard before implementing