
    document.addEventListener("DOMContentLoaded", function() {
        const texts = [
            { element: document.getElementById("text1"), text: "Olá, visitante!", delay: 0 },
            { element: document.getElementById("text2"), text: "Meu nome é Jeferson", delay: 2000 },
            { element: document.getElementById("text3"), text: "Desenvolvedor Front-End", delay: 4000 }
        ];

        texts.forEach(({ element, text, delay }) => {
            typeText(element, text, delay);
        });

        function typeText(element, text, delay) {
            setTimeout(() => {
                let index = 0;
                const interval = setInterval(() => {
                    element.textContent += text[index];
                    index++;
                    if (index === text.length) {
                        clearInterval(interval);
                    }
                }, 100); // Speed of typing
            }, delay);
        }
    });
