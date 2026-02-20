// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const icon = this.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        this.setAttribute('aria-label', 'Zatvori navigacioni meni');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        this.setAttribute('aria-label', 'Otvori navigacioni meni');
      }
    });
  }

  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        mobileToggle.setAttribute('aria-label', 'Otvori navigacioni meni');
      }
    });
  });

  // Form Validation
  const evaluationForm = document.getElementById('evaluation-form');
  if (evaluationForm) {
    evaluationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Clear previous errors
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });
      
      // Validate phone model
      const phoneModel = document.getElementById('phone-model');
      if (!phoneModel.value.trim()) {
        showError(phoneModel, 'Molimo unesite model telefona');
        isValid = false;
      }
      
      // Validate condition
      const condition = document.getElementById('condition');
      if (!condition.value) {
        showError(condition, 'Molimo izaberite stanje telefona');
        isValid = false;
      }
      
      // Validate name
      const name = document.getElementById('name');
      if (!name.value.trim()) {
        showError(name, 'Molimo unesite vaše ime');
        isValid = false;
      }
      
      // Validate phone
      const phone = document.getElementById('phone');
      const phoneRegex = /^[0-9+\-\s()]{9,}$/;
      if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
        showError(phone, 'Molimo unesite ispravan broj telefona');
        isValid = false;
      }
      
      if (isValid) {
        // Show success message
        alert('Hvala!Ваша procena je uspešno poslata. Kontaktiraćemo vas uskoro.');
        evaluationForm.reset();
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Clear previous errors
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });
      
      // Validate name
      const name = document.getElementById('contact-name');
      if (!name.value.trim()) {
        showError(name, 'Molimo unesite vaše ime');
        isValid = false;
      }
      
      // Validate email
      const email = document.getElementById('contact-email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value)) {
        showError(email, 'Molimo unesite ispravnu email adresu');
        isValid = false;
      }
      
      // Validate message
      const message = document.getElementById('contact-message');
      if (!message.value.trim()) {
        showError(message, 'Molimo unesite vašu poruku');
        isValid = false;
      }
      
      if (isValid) {
        alert('Hvala! Vaša poruka je uspešno poslata. Odgovorićemo vam uskoro.');
        contactForm.reset();
      }
    });
  }
});

// Helper function to show error
function showError(input, message) {
  const formGroup = input.closest('.form-group');
  formGroup.classList.add('error');
  
  let errorMessage = formGroup.querySelector('.error-message');
  if (!errorMessage) {
    errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    formGroup.appendChild(errorMessage);
  }
  errorMessage.textContent = message;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
