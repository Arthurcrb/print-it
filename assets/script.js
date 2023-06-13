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
// récupération des éléments HTML
const banner = document.getElementById('banner');
const image = document.getElementById('ban-img');
const text = document.getElementById('text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.querySelector('.dots');

// Initialisation à l'index actuel 0 (correspondant à la première image du tableau)
let currentIndex = 0;

// Fonction pour afficher la diapositive suivante
function showNextSlide() {
      if(currentIndex < slides.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    console.log("click sur suivant");
  updateSlide();
  updateDots(); // Appel de la fonction pour les dots
}

// Fonction pour afficher la diapositive précédente
function showPreviousSlide() {
      if (currentIndex == 0) {
        currentIndex = slides.length - 1;
    }
    else {
        currentIndex--;
    }
    console.log("click sur précédent");
  updateSlide();
  updateDots();  // Appel de la fonction pour mettre à jour les dots
}

// Ajout des event listeners aux boutons précédents et suivants
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);


// Fonction pour mettre à jour la diapositive en fonction de l'index actuel
function updateSlide() {
  const currentSlide = slides[currentIndex];
  image.src = './assets/images/slideshow/' + currentSlide.image;
  text.innerHTML = currentSlide.tagLine; // avec innerHTML, je remplace le txte en HTML pour le slide concerné
  updateDots(); // Appel de la fonction pour mettre à jour les dots
}

// Affiche la première diapositive au chargement de la page
updateSlide();

// Fonction pour mettre à jour les dots actifs
function updateDots() {
  const dots = dotsContainer.querySelectorAll('.dot');

// Suppression de la classe "active" de toutes les dots
dots.forEach((dot) => {
dot.classList.remove('dot_selected');
});

// Ajout de la classe "active" au dot correspondant à l'index actuel
  dots[currentIndex].classList.add('dot_selected');
}

// chargement des slides toutes les 5s
setInterval(()=>{
    currentIndex = currentIndex < slides.length -1? currentIndex +1 : 0
    updateSlide()
}, 5000)