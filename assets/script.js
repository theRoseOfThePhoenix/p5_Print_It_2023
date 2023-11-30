// Définition des diapositives avec leurs images et taglines
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Index de la diapositive actuelle
let currentIndex = 0;

// Sélection des éléments DOM
const imageBanner = document.querySelector(".banner-img");
const texte = document.querySelector(".banner-txt");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");

// Initialisation de la première diapositive
imageBanner.src = "assets/images/slideshow/" + slides[currentIndex].image;
texte.innerHTML = slides[currentIndex].tagLine;

// Gestion du clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
	currentIndex--;

	// Gestion de l'infini
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}

	// Mise à jour de l'image et du texte
	imageBanner.src = "assets/images/slideshow/" + slides[currentIndex].image;
	texte.innerHTML = slides[currentIndex].tagLine;

	// Mise à jour du point sélectionné
	updateSelectedDot();
});

// Gestion du clic sur la flèche droite
arrowRight.addEventListener("click", function () {
	currentIndex++;

	// Gestion de l'infini
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}

	// Mise à jour de l'image et du texte
	imageBanner.src = "assets/images/slideshow/" + slides[currentIndex].image;
	texte.innerHTML = slides[currentIndex].tagLine;

	// Mise à jour du point sélectionné
	updateSelectedDot();
});

// Affichage des points indicateurs
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");

	// Ajout de la classe 'dot_selected' si c'est la diapositive actuelle
	if (i === currentIndex) {
		dot.classList.add("dot_selected");
	}

	// Ajout du point à la liste des points
	dots.appendChild(dot);
}

// Mise à jour du point sélectionné
function updateSelectedDot() {
	const dotElements = dots.querySelectorAll(".dot");

	// Suppression de la classe 'dot_selected' de tous les points
	dotElements.forEach(dot => {
		dot.classList.remove("dot_selected");
	});

	// Ajout de la classe 'dot_selected' au point correspondant à la diapositive actuelle
	dotElements[currentIndex].classList.add("dot_selected");
}
