/**
 * Alp Tuğan Presentations - Modern Minimalist Interaction Layer
 * Lightweight, zero-dependency vanilla JS
 */

(function () {
  'use strict';

  // --- Theme Management ---
  const STORAGE_KEY = 'alptugan_theme_preference';
  const root = document.documentElement;

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
    updateThemeToggleUI(theme);
  }

  function updateThemeToggleUI(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    toggleBtns.forEach((btn) => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
          btn.setAttribute('aria-label', 'Switch to light mode');
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
          btn.setAttribute('aria-label', 'Switch to dark mode');
        }
      }
    });
  }

  // Initialize theme: Default to dark mode for Monochromatic Minimalism
  const initialTheme = getStoredTheme() || 'dark';
  applyTheme(initialTheme);

  // Listen to system changes if user hasn't explicitly overridden
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle button click
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') || getSystemTheme();
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
      });
    });
    updateThemeToggleUI(root.getAttribute('data-theme') || getSystemTheme());

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('is-open')) {
          navLinks.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // --- Dynamic Search / Filter for Sessions ---
    const sessionSearch = document.getElementById('session-search');
    const sessionCards = document.querySelectorAll('.session-card');
    const noResultsMsg = document.getElementById('no-results-msg');

    if (sessionSearch && sessionCards.length > 0) {
      sessionSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        sessionCards.forEach((card) => {
          const text = card.textContent.toLowerCase();
          if (!query || text.includes(query)) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (noResultsMsg) {
          noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      });
    }

    // --- Dynamic Search for Course Cards on Home ---
    const courseSearch = document.getElementById('course-search');
    const courseCards = document.querySelectorAll('.course-card');

    if (courseSearch && courseCards.length > 0) {
      courseSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        courseCards.forEach((card) => {
          const text = card.textContent.toLowerCase();
          card.style.display = (!query || text.includes(query)) ? '' : 'none';
        });
      });
    }
  });
})();
