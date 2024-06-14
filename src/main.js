localStorage.removeItem('theme');
document.addEventListener('DOMContentLoaded', () => {
  // const toggleButton = document.getElementById('theme-toggle');
  const toggleButton = document.querySelectorAll('.btn-toggle-checkbox');    /* tech_skills */
  const body = document.body;
  const marquee = document.querySelector(".marquee");     /* tech_skills */
  const marquee_tilt = document.querySelector(".marquee_tilt");   /* tech_skills */

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }
  toggleButton.forEach((tog) =>
    tog.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        marquee.classList.add("dark-mode");    /* tech_skills */
        marquee_tilt.classList.add("dark-mode");    /* tech_skills */
        const bw_dot = document.querySelectorAll(".bw_dot"); /* tech_skills */
        bw_dot.forEach((dot) => dot.classList.add("filter-white")); /* tech_skills */
      } else {
        localStorage.removeItem('theme');
        marquee.classList.remove("dark-mode");  /* tech_skills */
        marquee_tilt.classList.remove("dark-mode"); /* tech_skills */
        const bw_dot = document.querySelectorAll(".bw_dot");    /* tech_skills */
        bw_dot.forEach((dot) => dot.classList.remove("filter-white"));  /* tech_skills */
      }
    }));
});