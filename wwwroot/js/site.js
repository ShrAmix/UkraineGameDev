// Функція для відкриття/закриття бокового меню
const sideMenu = document.getElementById("side-menu");
const textBlock = document.getElementById("text-block");
sideMenu.classList.add("close");

function toggleMenu() {
    const mainContent = document.querySelector(".main-content");
    const header = document.querySelector("header");
    const menuToggle = document.getElementById("menu-toggle");

    // Перемикання класів відкритого та закритого меню
    if (sideMenu.classList.contains("open")) {
        sideMenu.classList.remove("open");
        sideMenu.classList.add("close");

        textBlock.classList.remove("open");
        textBlock.classList.add("close");

        mainContent.style.width = "calc(100% - 0px)"; // Зменшуємо ширину основного контенту
        mainContent.style.left = "0px"; // Зсуваємо вміст праворуч на 250 пікселів
        menuToggle.classList.remove("transparent");
    } else {
        sideMenu.classList.remove("close");
        sideMenu.classList.add("open");

        textBlock.classList.remove("close");
        textBlock.classList.add("open");

        mainContent.style.width = "calc(100% - 250px)"; // Зменшуємо ширину основного контенту
        mainContent.style.left = "250px"; // Зсуваємо вміст праворуч на 250 пікселів
        menuToggle.classList.add("transparent");
    }
}

let lastScrollTop = 0; // Змінна для зберігання останньої позиції скроллу
const header = document.querySelector('header'); // Знайти заголовок на сторінці

window.addEventListener('scroll', function () {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Поточна позиція скроллу

    if (currentScrollTop > lastScrollTop && sideMenu.classList.contains("close")) {
        // Якщо скролл вниз, ховати заголовок
        header.style.transform = 'translateY(-100%)'; // Приховує заголовок вверх
    } else {
        // Якщо скролл вверх, показувати заголовок
        header.style.transform = 'translateY(0)'; // Повертає заголовок до видимого положення
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Оновити останню позицію скроллу
});

// Виклик функції toggleMenu при натисканні на кнопку
document.getElementById("menu-toggle").addEventListener("click", toggleMenu);

// Динамічне заповнення бокового меню заголовками
document.addEventListener("DOMContentLoaded", () => {
    const menuContent = document.getElementById("menu-content");
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-'); // Генерує ID з тексту заголовка
        }

        const a = document.createElement("a");
        a.href = "#" + heading.id;
        a.textContent = heading.textContent;
        menuContent.appendChild(a);

        // Додаємо обробник події для плавного скролу з врахуванням відстані 70 пікселів
        a.addEventListener('click', function (event) {
            event.preventDefault(); // Відміняємо стандартний перехід по якорю
            const targetElement = document.getElementById(heading.id);
            const offset = 70; // Відстань від верхньої частини екрану
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // Застосовуємо плавний перехід
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Припинити спостереження після додавання класу
            }
        });
    }, { threshold: 0.1 }); // Встановлює поріг видимості елемента (10%)

    elements.forEach(element => {
        observer.observe(element);
    });
});

