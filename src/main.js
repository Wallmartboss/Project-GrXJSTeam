document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
  localStorage.setItem('theme', 'dark-mode');