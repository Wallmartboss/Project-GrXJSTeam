document.addEventListener('DOMContentLoaded', function () {
  const cookieSettingsLink = document.getElementById('cookie-settings-link');
  const cookieSettingsModal = document.getElementById('cookie-settings-modal');
  const closeCookieSettings = document.getElementById('close-cookie-settings');
  const saveCookieSettings = document.getElementById('save-cookie-settings');
  const cookieSettingsForm = document.getElementById('cookie-settings-form');

  // Перевірка наявності елементів
  if (
    cookieSettingsLink &&
    cookieSettingsModal &&
    closeCookieSettings &&
    saveCookieSettings &&
    cookieSettingsForm
  ) {
    // Відкриття модального вікна
    cookieSettingsLink.addEventListener('click', function (event) {
      event.preventDefault();
      cookieSettingsModal.classList.remove('modal-hide');
      cookieSettingsModal.classList.add('modal-show');
    });

    // Закриття модального вікна
    const closeModal = () => {
      cookieSettingsModal.classList.remove('modal-show');
      cookieSettingsModal.classList.add('modal-hide');
    };

    closeCookieSettings.addEventListener('click', closeModal);

    // Закриття модального вікна при натисканні за його межами
    cookieSettingsModal.addEventListener('click', function (event) {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    });

    // Збереження налаштувань cookies
    saveCookieSettings.addEventListener('click', function () {
      const settings = {
        analytics: cookieSettingsForm.elements['analytics'].checked,
        advertising: cookieSettingsForm.elements['advertising'].checked,
      };
      localStorage.setItem('cookieSettings', JSON.stringify(settings));
      closeModal();
    });

    // Застосування налаштувань що були збережені під час завантаження сторінки
    const applySavedSettings = () => {
      const savedSettings = localStorage.getItem('cookieSettings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        cookieSettingsForm.elements['analytics'].checked = settings.analytics;
        cookieSettingsForm.elements['advertising'].checked =
          settings.advertising;
      }
    };

    applySavedSettings();
  }
});
