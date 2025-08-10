/**
 * EmailJS Configuration
 * 
 * To set up EmailJS:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create a new service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Get your Public Key from the Integration tab
 * 5. Replace the placeholder values below with your actual credentials
 */

export const emailjsConfig = {
  // Your EmailJS Service ID (e.g., 'service_xxxxxxx')
  serviceId: 'service_m0gi2qm',
  
  // Your EmailJS Template ID (e.g., 'template_xxxxxxx')
  templateId: 'template_slfhcyd',
  
  // Your EmailJS Public Key (e.g., 'xxxxxxxxxxxxxxx')
  publicKey: 'DMZRWTkowbeoWLbtD',
};

// Template variables that will be sent to EmailJS
// Make sure your EmailJS template includes these variables:
// - from_name: {{from_name}}
// - from_email: {{from_email}}
// - subject: {{subject}}
// - message: {{message}}
// - to_email: {{to_email}} (your email address)
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
  [key: string]: string; // Index signature for EmailJS compatibility
}