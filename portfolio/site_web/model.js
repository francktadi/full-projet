// ================================
// MESSAGE DE BIENVENUE
// ================================

window.addEventListener("load", function () {

    alert("Bienvenue sur le portfolio de Franck Armel Tadi Nguement 🚀");

});


// ================================
// BOUTON RETOUR EN HAUT
// ================================

// Création du bouton

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);


// Apparition du bouton au scroll

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// Retour en haut

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// ANIMATION DES PROJETS
// ================================

const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {

    project.addEventListener("mouseenter", function() {

        project.style.transform = "scale(1.02)";

    });

    project.addEventListener("mouseleave", function() {

        project.style.transform = "scale(1)";

    });

});


// ================================
// CHANGEMENT DE COULEUR NAVBAR
// ================================

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        nav.style.background = "#0f172a";

    } else {

        nav.style.background = "#111827";

    }

});


// ================================
// APPARITION DES SECTIONS
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = 1;

                entry.target.style.transform = "translateY(0px)";

            }

        });

    },

    {

        threshold: 0.2

    }

);


// Style initial avant apparition

sections.forEach(function(section) {

    section.style.opacity = 0;

    section.style.transform = "translateY(40px)";

    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});