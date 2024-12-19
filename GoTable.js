const showLecturesBtn = document.getElementById('showLecturesBtn');
const lecturesContainer = document.getElementById('Table');

showLecturesBtn.addEventListener('click', () => {
    lecturesContainer.classList.toggle('show'); // Переключаем класс для показа скрытой таблицы

    if (lecturesContainer.classList.contains('show')) {
        lecturesContainer.style.display = 'block'; // Показываем таблицу
        setTimeout(() => {
            lecturesContainer.style.opacity = 1; // После показа устанавливаем opacity
        }, 10);
    } else {
        lecturesContainer.style.opacity = 0; // Скрываем с анимацией
        setTimeout(() => {
            lecturesContainer.style.display = 'none'; // Убираем из DOM после анимации
        }, 500); // 500 мс соответствует времени анимации
    }
});