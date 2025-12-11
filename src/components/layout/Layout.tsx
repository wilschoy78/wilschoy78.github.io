import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout component that wraps all pages
 * Provides consistent header and footer across the application
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  /**
   * Initialize Flowise Chatbot site-wide using a module script injection.
   * This avoids TypeScript module resolution errors for external CDN imports
   * and ensures the chatbot initializes once across route changes.
   */
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if ((window as any).__flowiseInit) return;

    try {
      const script = document.createElement('script');
      script.type = 'module';
      script.textContent = `
        import Chatbot from 'https://cdn.jsdelivr.net/gh/wgayo/FlowiseChatEmbed@main/dist/web.js';
        if (!window.__flowiseInit && Chatbot?.init) {
          Chatbot.init({
            chatflowid: 'ffae589e-99b8-4d09-8b6b-5709397eefb6',
            apiHost: 'https://cloud.flowiseai.com',
          });
          window.__flowiseInit = true;
        }
      `;
      document.body.appendChild(script);
    } catch (err) {
      console.error('Flowise Chatbot script injection failed:', err);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
