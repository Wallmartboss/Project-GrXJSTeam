document.addEventListener('DOMContentLoaded', () => {
  // Отримуємо посилання на необхідні елементи
  const cookieSettingsLink = document.getElementById('cookie-settings-link');
  const cookieSettingsModal = document.getElementById('cookie-settings-modal');
  const closeCookieSettings = document.getElementById('close-cookie-settings');
  const saveCookieSettings = document.getElementById('save-cookie-settings');
  const cookieSettingsForm = document.getElementById('cookie-settings-form');
  const cookieSettingsBackdrop = document.getElementById(
    'cookie-settings-backdrop'
  );

  // Функція для налаштування роботи з  cookies
  function setupCookieSettings() {
    // Перевіряємо чи всі необхідних елементів є в наявності
    if (
      cookieSettingsLink &&
      cookieSettingsModal &&
      closeCookieSettings &&
      saveCookieSettings &&
      cookieSettingsForm &&
      cookieSettingsBackdrop
    ) {
      // Додаємо слухача події для відкриття модального вікна
      cookieSettingsLink.addEventListener('click', event => {
        event.preventDefault();
        cookieSettingsModal.classList.remove('modal-hide');
        cookieSettingsModal.classList.add('modal-show');
        cookieSettingsBackdrop.classList.remove('modal-hide');
        cookieSettingsBackdrop.classList.add('modal-show');

        // Додаємо слухача події для обробки натискання клавіші Esc
        document.addEventListener('keydown', handleEscKey);
      });

      // Додаємо слухача події для закриття модального вікна
      closeCookieSettings.addEventListener('click', closeModal);
      cookieSettingsBackdrop.addEventListener('click', closeModal);

      // Додаємо слухача події для закриття модального вікна при кліку поза ним
      cookieSettingsModal.addEventListener('click', event => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      });

      // Додаємо слухача події для збереження налаштувань cookies
      saveCookieSettings.addEventListener('click', saveSettings);

      // Застосувуєм збережені налаштування
      applySavedSettings();
    }
  }

  // Функція для закриття модального вікна
  function closeModal() {
    cookieSettingsModal.classList.remove('modal-show');
    cookieSettingsModal.classList.add('modal-hide');
    cookieSettingsBackdrop.classList.remove('modal-show');
    cookieSettingsBackdrop.classList.add('modal-hide');

    // Видаляємо слухача події для обробки натискання клавіші Esc
    document.removeEventListener('keydown', handleEscKey);
  }

  // Функція для збереження налаштувань cookies
  function saveSettings() {
    const { analytics, security } = cookieSettingsForm.elements;
    const settings = {
      analytics: analytics.checked,
      security: security.checked,
    };

    // Зберігаємо налаштування в локальному сховищі
    try {
      localStorage.setItem('cookieSettings', JSON.stringify(settings));
    } catch (e) {
      console.error('Could not save settings to localStorage', e);
    }

    // Закриваємо модальне вікно після збереження налаштувань
    closeModal();
  }

  // Функція для застосування збережених налаштувань
  function applySavedSettings() {
    // Намагаємось отримати налаштування що були збережені в локальному сховищі
    try {
      const savedSettings = localStorage.getItem('cookieSettings');
      if (savedSettings) {
        // Якщо збережені налаштування існують, вони застосовуються до форми
        const settings = JSON.parse(savedSettings);
        const { analytics, security } = cookieSettingsForm.elements;

        analytics.checked = settings.analytics || false;
        security.checked = settings.security || false;
      } else {
        // Немає збережених налаштувань в локальному сховищі
      }
    } catch (e) {
      // Обробляємо помилку при отриманні налаштувань з локального сховища
      console.log('Could not retrieve settings from localStorage', e);
    }
  }
  // Функція закриття модального вікна при кліку на Escape
  function handleEscKey(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  // Викликаємо функцію для налагодження роботи з налаштуваннями cookies
  setupCookieSettings();
});
