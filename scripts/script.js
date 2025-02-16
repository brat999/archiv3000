document.addEventListener("DOMContentLoaded", () => {
    // Elemente initialisieren
    const buttons = document.querySelectorAll(".toggleButton");
    const contentSections = document.querySelectorAll(".content");
    const toggleSwitch = document.getElementById("toggleSwitch");
    const images = document.querySelectorAll('.img_archiv');
    const links = document.querySelectorAll(".liste_archiv a");
    const backButton = document.querySelector("#button_pfeil");
    const menue = document.querySelector('.menue');

    
    // Schalter für die Anzeige der Inhaltsabschnitte
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetClass = button.getAttribute("data-target");
            contentSections.forEach((section) => {
                section.classList.add("hidden");
            });
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });

    // Toggle-Schalter für Seitenumleitung
    const isImgPage = window.location.pathname.includes("/image_view/img.html");
    if (isImgPage) {
        toggleSwitch.classList.add("active");
    }

    toggleSwitch.addEventListener("click", () => {
        if (toggleSwitch.classList.contains("active")) {
            toggleSwitch.classList.remove("active");
            setTimeout(() => {
                window.location.href = "/index.html";
            }, 300);
        } else {
            toggleSwitch.classList.add("active");
            setTimeout(() => {
                window.location.href = "/image_view/img.html";
            }, 300);
        }
    });

    // Zurück-Button (Referrer)
    if (backButton) {
    backButton.addEventListener("click", () => {
        const referrer = document.referrer;
        console.log("Referrer URL: ", referrer); // Ausgabe der Referrer-URL zur Fehleranalyse

        if (referrer) {
            const referrerUrl = new URL(referrer);
            // Überprüfen, ob die Seite von img.html kommt
            if (referrerUrl.pathname.includes("/img_view/img.html")) {
                window.location.href = referrer; // Zurück zur img.html-Seite
            } else {
                window.location.href = "index.html"; // Sonst zur index.html
            }
        } else {
            // Wenn kein Referrer vorhanden, gehe zur index.html
            window.location.href = "index.html";
        }
    });
}

    // IntersectionObserver für Bilder und Links
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 1s ease";
                entry.target.style.opacity = "1";
                if (entry.target.classList.contains("liste_archiv")) {
                    entry.target.style.transition = "transform 0.5s ease, opacity 0.5s ease";
                    entry.target.style.transform = "translateX(0)";
                }
            } else {
                entry.target.style.opacity = "0";
                if (entry.target.classList.contains("liste_archiv")) {
                    entry.target.style.transform = "translateX(0px)";
                }
            }
        });
    }, { threshold: 0.1 });

    // Beobachte Bilder und Links
    images.forEach(img => {
        img.style.opacity = "0";
        observer.observe(img);
    });
    links.forEach(link => {
        link.style.opacity = "0";
        link.style.transform = "translateX(0px)";
        observer.observe(link);
    });
});    

document.querySelectorAll("a").forEach(link => {
    let url = link.getAttribute("href");
    if (url) {
        link.setAttribute("data-href", url);
        link.removeAttribute("href");
        link.addEventListener("click", () => {
            window.location.href = link.getAttribute("data-href");
        });
    }
});

const flyer = document.getElementById('flyer');
let rotationY = 0;
let lastRotation = 0;
let isHovering = false;

flyer.addEventListener('mouseenter', () => {
    flyer.style.animation = 'none';
    isHovering = true;
});

flyer.addEventListener('mousemove', (e) => {
    if (!isHovering) return;
    let rect = flyer.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let deltaX = e.clientX - centerX;
    rotationY = lastRotation + deltaX * 0.5;
    flyer.style.transform = `rotateY(${rotationY}deg)`;
});

flyer.addEventListener('mouseleave', () => {
    isHovering = false;
    lastRotation = rotationY;
    flyer.style.animation = `rotateFlyer 5s linear infinite`;
    flyer.style.transform = `rotateY(${lastRotation}deg)`;
});