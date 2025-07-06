/**
 * Формирует CSS класс из массива классов
 * @param {...string} classes - Классы для объединения
 * @returns {string} Объединенная строка классов
 */
export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

/**
 * Форматирует температуру для отображения
 * @param {number} temp - Температура в градусах
 * @returns {string} Отформатированная температура
 */
export const formatTemperature = (temp) => {
    return `${temp > 0 ? '+' : ''}${temp}`;
};

/**
 * Проверяет, является ли устройство активным
 * @param {string} subtitle - Подзаголовок устройства
 * @returns {boolean} Активно ли устройство
 */
export const isDeviceActive = (subtitle) => {
    return subtitle && subtitle.toLowerCase().includes('включено');
};

/**
 * Получает параметр из URL
 * @param {string} param - Название параметра
 * @returns {string|null} Значение параметра
 */
export const getUrlParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

/**
 * Устанавливает параметр в URL
 * @param {string} param - Название параметра
 * @param {string} value - Значение параметра
 */
export const setUrlParam = (param, value) => {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url);
};

/**
 * Дебаунс функция
 * @param {Function} func - Функция для дебаунса
 * @param {number} wait - Время ожидания в миллисекундах
 * @returns {Function} Дебаунсированная функция
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}; 