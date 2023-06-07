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

// Références des éléments HTML
const banner = document.getElementById('banner');
const image = document.getElementById('ban-img');
const text = document.getElementById('text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Initialise l'index actuel
let currentIndex = 0;

// Fonction pour afficher la diapositive suivante
function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  console.log("clic sur suivant");
  updateSlide();
}

// Fonction pour afficher la diapositive précédente
function showPreviousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  console.log("clic sur précédent");
  updateSlide();
}

// Fonction pour mettre à jour la diapositive en fonction de l'index actuel
function updateSlide() {
  const currentSlide = slides[currentIndex];
  image.src = './assets/images/slideshow/' + currentSlide.image;
  text.innerHTML = currentSlide.tagLine;
}

// Ajout des event listeners aux boutons précédents et suivants
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

// Affichage de la première diapositive au chargement de la page
updateSlide();
