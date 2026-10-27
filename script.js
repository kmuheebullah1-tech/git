// Glaze picker: changes the vase color
const vase = document.getElementById('vase');
const glazeName = document.getElementById('glazeName');
const swatches = document.querySelectorAll('.swatch');

swatches.forEach(btn => {
  btn.addEventListener('click', () => {
    swatches.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-checked', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-checked', 'true');
    vase.setAttribute('fill', btn.dataset.color);
    glazeName.textContent = btn.dataset.name;
  });
});

// Booking form: simple validation and confirmation
const form = document.getElementById('bookForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.name.classList.toggle('bad', !name);
  form.email.classList.toggle('bad', !okEmail);

  if (!name || !okEmail) {
    msg.textContent = 'Enter your name and a valid email to reserve a seat.';
    return;
  }
  msg.textContent = `Thanks, ${name}. Your seat in ${form.cls.value} is reserved. We sent details to ${email}.`;
  form.reset();
});
