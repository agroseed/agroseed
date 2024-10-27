/* Barre de Menu */
function toggleMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
  }
  /* Fin Barre de Menu */  

        // Fonction pour gérer les langues
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-fr], [data-lang-en], [data-lang-ar]');
        elements.forEach(el => {
            el.innerText = el.getAttribute(`data-lang-${lang}`);
        });
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    // Script pour changer dynamiquement le texte en fonction de la langue sélectionnée.
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.titre-texte');
    
    function changeLanguage(lang) {
        const text = titleElement.getAttribute(`data-lang-${lang}`);
        if (text) {
            titleElement.innerHTML = text;
        }
    }

    // Exemples de changement de langue
    // Vous pouvez lier ces appels à des événements comme des clics sur des boutons de langue
    changeLanguage('fr'); // Change to French
    // changeLanguage('en'); // Change to English
    // changeLanguage('ar'); // Change to Arabic
});
   /* Fin Fonction pour gérer les langues */
  /* Début Slider */
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  /* Configurez votre Swiper pour utiliser un défilement automatique et continuer sans interruption */
  var productCarousel = new Swiper(".product-carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    parallax: true, // Activer l'effet parallaxe
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  /* Fin du slider */
  
  /* Assure le défilement des scroller carégories, sous cégories et sous sous catégories */
  document.addEventListener("DOMContentLoaded", function() {
      const categoriesScroller = document.getElementById('categories');
      const subcategoriesScroller = document.getElementById('subcategories');
      const subsubcategoriesScroller = document.getElementById('subsubcategories');
      const ficheTechniqueContainer = document.getElementById('ficheTechniqueContainer');
      const downloadButton = document.getElementById('downloadButton');
      const closeFicheButton = document.getElementById('closeFicheButton');
  
      function selectItem(scroller, selectedItem) {
          const items = scroller.querySelectorAll('.item');
          items.forEach(item => item.classList.remove('active'));
          selectedItem.classList.add('active');
      }
  
      function showFicheTechnique(pdfUrl) {
          if (pdfUrl) {
              ficheTechniqueContainer.style.display = 'block';
              downloadButton.href = pdfUrl;  // Mise à jour de l'URL du PDF
              downloadButton.setAttribute('download', pdfUrl.split('/').pop());  // Ajouter l'attribut download
          } else {
              console.error("No PDF URL provided");
          }
      }
  
      function handleSelection(scroller) {
          scroller.addEventListener('click', function(event) {
              if (event.target.tagName === 'IMG') {
                  selectItem(scroller, event.target.parentNode);
                  if (scroller === categoriesScroller) {
                      const selectedCategory = event.target.parentNode;
                      const categoryTitle = selectedCategory.querySelector('span').innerText;
                      fillSubcategories(categoryTitle);
                  } else if (scroller === subcategoriesScroller) {
                      const selectedSubcategory = event.target.parentNode;
                      const subcategoryTitle = selectedSubcategory.querySelector('span').innerText;
                      fillSubSubcategories(subcategoryTitle);
                  } else {
                      const selectedSubsubcategory = event.target.parentNode;
                      const subsubcategoryPdf = selectedSubsubcategory.querySelector('span').dataset.pdf;
                      showFicheTechnique(subsubcategoryPdf);
                  }
              }
          });
      }
  
      function fillSubcategories(categoryName) {
          const category = subcategoriesMap.find(cat => cat.name === categoryName);
          if (category) {
              fillScroller(subcategoriesScroller, category.subcategories);
              subsubcategoriesScroller.innerHTML = '';
          }
      }
  
      function fillSubSubcategories(subcategoryName) {
          const categoryName = document.querySelector('#categories .active span').innerText;
          const category = subcategoriesMap.find(cat => cat.name === categoryName);
          if (category) {
              const subcategory = category.subcategories.find(subcat => subcat.name === subcategoryName);
              if (subcategory) {
                  fillScroller(subsubcategoriesScroller, subcategory.subsubcategories);
              }
          }
      }
  
      function createOption(container, imgUrl, text, pdf = '') {
          const item = document.createElement('div');
          item.classList.add('item');
          item.innerHTML = `<img src="${imgUrl}" alt="${text}"><span data-pdf="${pdf}">${text}</span>`;
          container.appendChild(item);
      }
  
      function fillScroller(scroller, options) {
          scroller.innerHTML = '';
          options.forEach(option => {
              createOption(scroller, option.image, option.name, option.pdf);
          });
      }
  
      const subcategoriesMap = [
          {
              name: 'Culture Maraichères',
              image: 'images/image1.jpg',
              subcategories: [
                  {
                      name: 'Sous-catégorie 1',
                      image: 'images/sub-image1.jpg',
                      subsubcategories: [
                          { name: 'Sous-sous-catégorie 1', image: 'images/subsub-image1.jpg', pdf: 'pdfs/sous-sous-categorie1.pdf' },
                          { name: 'Sous-sous-catégorie 2', image: 'images/subsub-image2.jpg', pdf: 'pdfs/sous-sous-categorie2.pdf' },
                          { name: 'Sous-sous-catégorie 3', image: 'images/subsub-image3.png', pdf: 'pdfs/sous-sous-categorie3.pdf' }
                      ]
                  },
                  {
                      name: 'PIMENT',
                      image: 'images/sub-image2.jpg',
                      subsubcategories: [
                          { name: 'Sous-sous-catégorie 3', image: 'images/subsub-image6.jpg', pdf: 'pdfs/sous-sous-categorie3.pdf' },
                          { name: 'Sous-sous-catégorie 4', image: 'images/subsub-image8.jpg', pdf: 'pdfs/sous-sous-categorie4.pdf' },
                          { name: 'Sous-sous-catégorie 3', image: 'images/subsub-image6.jpg', pdf: 'pdfs/sous-sous-categorie3.pdf' },
                          { name: 'Sous-sous-catégorie 4', image: 'images/subsub-image8.jpg', pdf: 'pdfs/sous-sous-categorie4.pdf' }
                      ]
                  }
              ]
          },
          {
              name: 'Catégorie 2',
              image: 'images/image2.jpg',
              subcategories: [
                  {
                      name: 'Sous-catégorie 1',
                      image: 'images/sub-image1.jpg',
                      subsubcategories: [
                          { name: 'Sous-sous-catégorie 3', image: 'images/subsub-image6.jpg', pdf: 'pdfs/sous-sous-categorie3.pdf' },
                          { name: 'Sous-sous-catégorie 4', image: 'images/subsub-image8.jpg', pdf: 'pdfs/sous-sous-categorie4.pdf' },
                          { name: 'Sous-sous-catégorie 3', image: 'images/subsub-image6.jpg', pdf: 'pdfs/sous-sous-categorie3.pdf' },
                          { name: 'Sous-sous-catégorie 6', image: 'images/subsub-image6.jpg', pdf: 'pdfs/sous-sous-categorie2.pdf' }
                      ]
                  }
              ]
          },
          {
              name: 'Catégorie 3',
              image: 'images/image3.jpg',
              subcategories: [
                  {
                      name: 'Sous-catégorie 1',
                      image: 'images/sub-image1.jpg',
                      subsubcategories: [
                          { name: 'Sous-sous-catégorie 1', image: 'images/subsub-image3.jpg', pdf: 'pdfs/sous-sous-categorie1.pdf' },
                          { name: 'Sous-sous-catégorie 2', image: 'images/subsub-image9.jpg', pdf: 'pdfs/sous-sous-categorie2.pdf' },
                          { name: 'Sous-sous-catégorie 3', image: 'images/subsub-image7.jpg', pdf: 'pdfs/sous-sous-categorie3.pdf' }
                      ]
                  }
              ]
          }
      ]
  
      fillScroller(categoriesScroller, subcategoriesMap);
      handleSelection(categoriesScroller);
      handleSelection(subcategoriesScroller);
      handleSelection(subsubcategoriesScroller);
  
      closeFicheButton.addEventListener('click', function() {
          ficheTechniqueContainer.style.display = 'none';
      });
  });
  
  /* Fin du scroller */
  
