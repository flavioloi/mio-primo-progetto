// Pulsante Contattami

const contatto = document.querySelector("#contatto");

contatto.addEventListener("click", function () {
    alert("Grazie per aver visitato il mio portfolio! 👋");
});


// Animazione delle sezioni

const sezioni = document.querySelectorAll("section");

const osservatore = new IntersectionObserver(
    function (elementi) {
        elementi.forEach(function (elemento) {
            if (elemento.isIntersecting) {
                elemento.target.classList.add("visibile");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sezioni.forEach(function (sezione) {
    osservatore.observe(sezione);
});


// Menu mobile

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("aperto");

    if (menu.classList.contains("aperto")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});