// small helper script for UI interactions
document.addEventListener('DOMContentLoaded', function () {
  // Set year(s)
  var year = new Date().getFullYear();
  ['year','year-2','year-3','year-4','year-5'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var nav = document.querySelector('.nav');
      if (nav) nav.classList.toggle('open');
    });
  }

  // Contact form front-end handling
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Please fill out the form correctly.';
        status.style.color = 'crimson';
        return;
      }
      // Simulate sending
      status.style.color = 'var(--muted)';
      status.textContent = 'Sending...';

      setTimeout(function () {
        status.style.color = 'green';
        status.textContent = 'Message sent! (simulation)';
        form.reset();
      }, 800);
    });
  }
});
