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

document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const isImgPage = window.location.pathname.includes("img.html");

    // Setze den Initialstatus basierend auf der aktuellen Seite
    if (isImgPage) {
        toggleSwitch.classList.add("active");
    }

    toggleSwitch.addEventListener("click", () => {
        if (toggleSwitch.classList.contains("active")) {
            // Zurück zur Ausgangsseite (index.html)
            toggleSwitch.classList.remove("active");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 300); // 300ms für die Animation
        } else {
            // Zur img.html wechseln
            toggleSwitch.classList.add("active");
            setTimeout(() => {
                window.location.href = "img.html";
            }, 300); // 300ms für die Animation
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.img_archiv');

    // Erstelle einen Observer, der immer aktiv bleibt, wenn das Bild in den Viewport kommt
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 1s ease";  // Nur die Opazität animieren
                entry.target.style.opacity = "1";  // Bild wird sichtbar
            } else {
                entry.target.style.opacity = "0";  // Bild wird unsichtbar
            }
        }, { threshold: 0.1 });  // Stelle sicher, dass das Bild 10% im Viewport ist, um die Animation zu starten
    });

    images.forEach(img => {
        img.style.opacity = "0";  // Bilder sind zunächst unsichtbar
        observer.observe(img);  // Beobachten der Bilder
    });

    // Bei jedem Scrollen die Animation wiederholen (nur Opazität, keine Skalierung)
    window.addEventListener("scroll", () => {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (inView) {
                img.style.transition = "opacity 1s ease";  // Nur die Opazität animieren
                img.style.opacity = "1";  // Bild wird sichtbar
            } else {
                img.style.opacity = "0";  // Bild wird unsichtbar
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector("#button_pfeil");

    if (backButton) {
        backButton.addEventListener("click", () => {
            const referrer = document.referrer; // Holt die URL der vorherigen Seite

            // Wenn die vorherige Seite eine leere Referenz ist (z.B. direkter Besuch), gehe zur index.html
            if (!referrer) {
                window.location.href = "index.html";
            } else {
                window.location.href = referrer; // Gehe zurück zur vorherigen Seite
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.img_archiv');

    // Erstelle einen Observer, der immer aktiv bleibt, wenn das Bild in den Viewport kommt
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 1s ease";  // Nur die Opazität animieren
                entry.target.style.opacity = "1";  // Bild wird sichtbar
            } else {
                entry.target.style.opacity = "0";  // Bild wird unsichtbar
            }
        }, { threshold: 0.1 });  // Stelle sicher, dass das Bild 10% im Viewport ist, um die Animation zu starten
    });

    images.forEach(img => {
        img.style.opacity = "0";  // Bilder sind zunächst unsichtbar
        observer.observe(img);  // Beobachten der Bilder
    });

    // Bei jedem Scrollen die Animation wiederholen (nur Opazität, keine Skalierung)
    window.addEventListener("scroll", () => {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (inView) {
                img.style.transition = "opacity 1s ease";  // Nur die Opazität animieren
                img.style.opacity = "1";  // Bild wird sichtbar
            } else {
                img.style.opacity = "0";  // Bild wird unsichtbar
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".liste_archiv a");

    // Erstelle einen Observer, der immer aktiv bleibt, wenn der Link in den Viewport kommt
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "transform 0.5s ease, opacity 0.5s ease"; // Übergang für die Position und Opazität
                entry.target.style.transform = "translateX(0)";  // Link wird auf seine ursprüngliche Position gesetzt
                entry.target.style.opacity = "1";  // Link wird sichtbar
            } else {
                entry.target.style.opacity = "0";  // Link wird unsichtbar
                entry.target.style.transform = "translateX(0px)";  // Link wird nach links verschoben, wenn er außerhalb des Viewports ist
            }
        });
    });

    // Setze Anfangswerte für die Links
    links.forEach(link => {
        link.style.opacity = "0";  // Links sind zu Beginn unsichtbar
        link.style.transform = "translateX(0px)";  // Links sind anfangs nach links verschoben
        observer.observe(link);  // Beobachte die Links
    });
});

