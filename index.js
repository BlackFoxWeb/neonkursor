document.addEventListener('mousemove', (e) => {
    // Создаем новый элемент для следа
    const trail = document.createElement('div');
    trail.classList.add('neon-trail');

    // Задаем позицию trail в зависимости от позиции курсора
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Добавляем элемент на страницу
    document.body.appendChild(trail);

    // Удаляем элемент через 0.5 секунд, когда анимация завершится
    setTimeout(() => {
        trail.remove();
    }, 500);
});
