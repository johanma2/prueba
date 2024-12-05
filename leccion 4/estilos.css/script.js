// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Cambiar el color del encabezado al pasar el mouse
    const header = document.querySelector("header");
    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "#6a8caf";
    });
    header.addEventListener("mouseout", () => {
        header.style.backgroundColor = "#4a6c8a";
    });

    // Botón que muestra una alerta
    const alertButton = document.getElementById("alertButton");
    if (alertButton) {
        alertButton.addEventListener("click", () => {
            alert("¡Gracias por hacer clic en el botón!");
        });
    }

    // Cambiar el tema de la página
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            themeToggle.textContent =
                document.body.classList.contains("dark-theme")
                    ? "Cambiar a Tema Claro"
                    : "Cambiar a Tema Oscuro";
        });
    }

    // Slider de imágenes
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
    ]; // Asegúrate de tener estas imágenes en tu proyecto.
    const slider = document.getElementById("slider");
    if (slider) {
        let currentIndex = 0;

        function changeImage() {
            slider.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }

        // Cambia la imagen cada 5 segundos
        setInterval(changeImage, 5000);
        changeImage();
    }

    // Efecto de scroll suave para los enlaces internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});
