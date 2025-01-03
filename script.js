document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggleButton");
    const contentSections = document.querySelectorAll(".content");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Zielinhalt ermitteln
            const targetClass = button.getAttribute("data-target");

            // Alle Inhalte ausblenden
            contentSections.forEach((section) => {
                section.classList.add("hidden");
            });

            // Zielinhalt anzeigen
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });
});