document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelectorAll('.btn-toggle-checkbox');
  const body = document.body;
  const footer_link = document.querySelectorAll('.footer-link');
  const logo_link = document.querySelector('.logo-link');
  const footer_bottom_text = document.querySelector('.footer-bottom-text');
  const accent = document.querySelector('.accent');

  const applyTheme = (theme) => {
    if (theme === 'dark-mode') {
      body.classList.add('dark-mode');
      footer_link.forEach(link => link.classList.add('dark-mode'));
      logo_link.classList.add('dark-mode');
      footer_bottom_text.classList.add('dark-mode');
      accent.classList.add('dark-mode');
      toggleButton.forEach(tog => tog.checked = true);
    } else {
      body.classList.remove('dark-mode');
      footer_link.forEach(link => link.classList.remove('dark-mode'));
      logo_link.classList.remove('dark-mode');
      footer_bottom_text.classList.remove('dark-mode');
      accent.classList.remove('dark-mode');
      toggleButton.forEach(tog => tog.checked = false);
    }
  };

  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme);

  toggleButton.forEach(tog =>
    tog.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
      localStorage.setItem('theme', currentTheme);

      applyTheme(currentTheme);
    })
  );
});