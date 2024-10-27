// Initialisation de Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 30,
    parallax: true,
    // Ajout de la direction RTL si nécessaire
    rtl: document.documentElement.dir === 'rtl' ? true : false,
});

// Fonction pour réinitialiser Swiper lors du changement de langue
function resetSwiper() {
    swiper.destroy(); // Détruit l'instance existante
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centeredSlides: true,
        spaceBetween: 30,
        parallax: true,
        // Réinitialiser avec RTL si la langue est arabe
        rtl: document.documentElement.dir === 'rtl' ? true : false,
    });
}

// Fonction pour gérer les langues
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-fr], [data-lang-en], [data-lang-ar]');
    elements.forEach(el => {
        el.innerText = el.getAttribute(`data-lang-${lang}`);
    });
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Réinitialiser Swiper après changement de langue
    resetSwiper();
}

// Script pour changer dynamiquement le texte en fonction de la langue sélectionnée
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.titre-texte');
    
    function changeLanguage(lang) {
        const text = titleElement.getAttribute(`data-lang-${lang}`);
        if (text) {
            titleElement.innerHTML = text;
        }
    }

    // Exemples de changement de langue
    changeLanguage('fr'); // Change to French
});
