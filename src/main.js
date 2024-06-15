localStorage.removeItem('theme');
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelectorAll('.btn-toggle-checkbox');
  const body = document.body;
  const marquee = document.querySelector('.marquee'); /* tech_skills */
  const marquee_tilt =
    document.querySelector('.marquee_tilt'); /* tech_skills */
  const footer_link = document.querySelectorAll('.footer-link');
  const logo_link = document.querySelector('.logo-link');
  const footer_bottom_text = document.querySelector('.footer-bottom-text');
  const accent = document.querySelector('.accent');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }
  toggleButton.forEach(tog =>
    tog.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        marquee.classList.add('dark-mode'); /* tech_skills */
        marquee_tilt.classList.add('dark-mode'); /* tech_skills */
        const bw_dot = document.querySelectorAll('.bw_dot'); /* tech_skills */
        bw_dot.forEach(dot =>
          dot.classList.add('filter-white')
        ); /* tech_skills */
        footer_link.forEach(link => link.classList.add('dark-mode'));
        logo_link.classList.add('dark-mode');
        footer_bottom_text.classList.add('dark-mode');
        accent.classList.add('dark-mode');
      } else {
        localStorage.removeItem('theme');
        marquee.classList.remove('dark-mode'); /* tech_skills */
        marquee_tilt.classList.remove('dark-mode'); /* tech_skills */
        const bw_dot = document.querySelectorAll('.bw_dot'); /* tech_skills */
        bw_dot.forEach(dot =>
          dot.classList.remove('filter-white')
        ); /* tech_skills */
        footer_link.forEach(link => link.classList.remove('dark-mode'));
        logo_link.classList.remove('dark-mode');
        footer_bottom_text.classList.remove('dark-mode');
        accent.classList.remove('dark-mode');
      }
    })
  );
});
