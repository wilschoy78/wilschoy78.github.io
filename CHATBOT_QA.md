# Assistant Chatbot Q&A

This document provides ready-to-use questions and answers for the assistant chatbot. Answers reference specific pages and actions in the portfolio site.

Question: What are the services provided?
Answer: Please visit the Services page at `/services`. You’ll find details on IT Consultation, ERPNext Implementation, Custom Software Development, WordPress Development, and Moodle LMS Implementation.

Question: How can I schedule a consultation?
Answer: Use the Contact page at `/contact` to send a message via the form, or click “Schedule a Consultation” on the Services page.

Question: How do I contact you directly?
Answer: Go to `/contact` and submit the form, or email me at `wilson@questnova.com`.

Question: Where can I see your projects?
Answer: Visit the Projects page at `/projects`. You can filter by category and search by keywords.

Question: Do you have live demos of your projects?
Answer: On `/projects`, open a project card and use the “Live Demo” button where available.

Question: Where can I view the source code?
Answer: On `/projects`, click the “Code” button for projects with public repositories.

Question: What technologies do you use?
Answer: The site is built with React, TypeScript, Tailwind CSS, Vite, Framer Motion, and Lucide icons. See `/skills` for a broader view of technologies and proficiency.

Question: Do you offer ERP implementation services?
Answer: Yes. See the “ERPNext Implementation” section on `/services` for capabilities and features.

Question: Do you build custom web applications?
Answer: Yes. Check “Custom Software Development” on `/services` for full-stack development details.

Question: Do you create WordPress websites?
Answer: Yes. See “Website Development using WordPress” on `/services`.

Question: Do you implement LMS platforms like Moodle?
Answer: Yes. See “LMS Implementation using Moodle” on `/services`.

Question: How can I request a quote?
Answer: Send your requirements through `/contact` and I’ll respond within 24 hours.

Question: How do I add a new project to your portfolio?
Answer: Edit `src/data/projects.ts` and add a new item to the `projects` array. Then verify in `/projects`. For step-by-step details, see `PORTFOLIO_OVERVIEW.md` → Assistant Q&A.

Question: Where can I learn more about you?
Answer: Visit the About page at `/about` and the Education page at `/education`.

Question: How do I reach your social profiles?
Answer: Use the links in the header/footer or `/contact` for GitHub and LinkedIn.

Question: How is the contact form powered?
Answer: The contact form uses EmailJS with a public key for secure client-side sending. See `EMAILJS_SETUP.md` for setup details.

Question: How do I preview or deploy updates?
Answer: Use `npm run dev` to preview locally, `npm run preview` for production preview, and push to `main` or run `npm run deploy` to publish.

