/* ==========================================================================
   NOVAWEB STUDIO — INTERACTIVE CLIENT-SIDE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // CONFIGURATION: CUSTOMER CONTACT DETAILS
  // REPLACE THESE VALUES WITH YOUR REAL WHATSAPP & EMAIL
  const CONFIG = {
    whatsappNumber: "923000000000", // Format: Country code + Number without + or spaces (e.g. 923000000000)
    whatsappDisplay: "+92 300 0000000",
    emailAddress: "contact@novaweb.example"
  };

  // Populate Contact Display Elements
  const waDisplay = document.getElementById('wa-display-number');
  const emailDisplay = document.getElementById('email-display-address');
  const waLink = document.getElementById('whatsapp-direct-link');
  const emailLink = document.getElementById('email-direct-link');

  if (waDisplay) waDisplay.textContent = CONFIG.whatsappDisplay;
  if (emailDisplay) emailDisplay.textContent = CONFIG.emailAddress;
  
  if (waLink) {
    waLink.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello NovaWeb Studio, I am interested in building a website.")}`;
  }
  if (emailLink) {
    emailLink.href = `mailto:${CONFIG.emailAddress}?subject=${encodeURIComponent("NovaWeb Studio Inquiry")}`;
  }

  // Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });
  }

  // Sticky Navbar Blur Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Project Inquiry Form Handling (Triggers Native Mailto Client)
  const projectForm = document.getElementById('project-form');

  if (projectForm) {
    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name').value.trim();
      const email = document.getElementById('client-email').value.trim();
      const business = document.getElementById('client-business').value.trim() || 'N/A';
      const webType = document.getElementById('website-type').value;
      const budget = document.getElementById('budget-range').value;
      const details = document.getElementById('project-desc').value.trim();

      const subject = `New Project Inquiry: ${webType} - ${name}`;
      const body = `Hello NovaWeb Studio,\n\nI would like to discuss a new website project.\n\n` +
                   `Client Name: ${name}\n` +
                   `Email: ${email}\n` +
                   `Business Name: ${business}\n` +
                   `Website Type: ${webType}\n` +
                   `Budget Range: ${budget}\n\n` +
                   `Project Details:\n${details}\n\n` +
                   `Best regards,\n${name}`;

      // Open email client
      const mailtoUrl = `mailto:${CONFIG.emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });
  }
});