/* ==========================================================================
   LUKMAAN RESTAURANT — SCRIPT
   Handles: gentle scroll-reveal animation + copyright year.
   No frameworks, no server code — safe for static hosting.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Copyright year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Gentle scroll-reveal for sections ---------- */
  var revealTargets = document.querySelectorAll(
    '.choose, .featured, .about, .site-footer'
  );

  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    // No IntersectionObserver support, or the user prefers reduced motion:
    // just show everything immediately.
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

});