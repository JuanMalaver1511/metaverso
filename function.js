// Partículas y Scroll



particlesJS(

       {
   
           "particles": {
   
               "number": {
   
                   "value": 85,
   
                   "density": {
   
                       "enable": true,
   
                       "value_area": 800
   
                   }
   
               },
   
               "color": {
   
                   "value": "#ffffff"
   
               },
   
               "shape": {
   
                   "type": "circle",
   
                   "stroke": {
   
                       "width": 0,
   
                       "color": "#000000"
   
                   },
   
                   "polygon": {
   
                       "nb_sides": 5
   
                   },
   
                   "image": {
   
                       "src": "img/github.svg",
   
                       "width": 100,
   
                       "height": 100
   
                   }
   
               },
   
               "opacity": {
   
                   "value": 0.5,
   
                   "random": false,
   
                   "anim": {
   
                       "enable": false,
   
                       "speed": 1,
   
                       "opacity_min": 0.1,
   
                       "sync": false
   
                   }
   
               },
   
               "size": {
   
                   "value": 6,
   
                   "random": true,
   
                   "anim": {
   
                       "enable": false,
   
                       "speed": 40,
   
                       "size_min": 0.1,
   
                       "sync": false
   
                   }
   
               },
   
               "line_linked": {
   
                   "enable": true,
   
                   "distance": 150,
   
                   "color": "#ffffff",
   
                   "opacity": 0.4,
   
                   "width": 1
   
               },
   
               "move": {
   
                   "enable": true,
   
                   "speed": 11.22388442605866,
   
                   "direction": "none",
   
                   "random": false,
   
                   "straight": false,
   
                   "out_mode": "out",
   
                   "bounce": false,
   
                   "attract": {
   
                       "enable": false,
   
                       "rotateX": 600,
   
                       "rotateY": 1200
   
                   }
   
               }
   
           },
   
           "interactivity": {
   
               "detect_on": "canvas",
   
               "events": {
   
                   "onhover": {
   
                       "enable": false,
   
                       "mode": "repulse"
   
                   },
   
                   "onclick": {
   
                       "enable": true,
   
                       "mode": "push"
   
                   },
   
                   "resize": true
   
               },
   
               "modes": {
   
                   "grab": {
   
                       "distance": 400,
   
                       "line_linked": {
   
                           "opacity": 1
   
                       }
   
                   },
   
                   "bubble": {
   
                       "distance": 400,
   
                       "size": 40,
   
                       "duration": 2,
   
                       "opacity": 8,
   
                       "speed": 3
   
                   },
   
                   "repulse": {
   
                       "distance": 200,
   
                       "duration": 0.4
   
                   },
   
                   "push": {
   
                       "particles_nb": 4
   
                   },
   
                   "remove": {
   
                       "particles_nb": 2
   
                   }
   
               }
   
           },
   
           "retina_detect": true
   
       }
   
   )
   
   
   
   // Detectar el scroll para el efecto de ocultar partículas
   
   window.addEventListener("scroll", function () {
   
       const particlesElement = document.getElementById('particles-js');
   
       const collage = document.getElementById('collage');
   
       const scrollY = window.scrollY;
   
       const windowHeight = window.innerHeight;
   
   
   
       // Disminuir opacidad de las partículas al hacer scroll
   
       if (scrollY < windowHeight) {
   
           particlesElement.style.opacity = 1 - scrollY / windowHeight;
   
       } else {
   
           particlesElement.style.opacity = 0;
   
       }
   
   
   
       // Mostrar fondo blanco en el collage después del scroll
   
       if (scrollY > windowHeight) {
   
           collage.style.backgroundColor = "#4d5053";
   
       } else {
   
           collage.style.backgroundColor = "transparent";
   
       }
   
   });
   
   
   
   function toggleMenu() {
   
       document.querySelector("nav").classList.toggle("nav-active");
   
       document.querySelector('.menu-icon').addEventListener('click', function() {
   
           this.classList.add('active');
   
           setTimeout(() => this.classList.remove('active'), 300); // Quita la clase después de la animación
   
       });
   
   }
   
   
   
   // Abrir y cerrar el modal
   
   const modal = document.getElementById('imageModal');
   
   const openModalBtn = document.getElementById('openModal');
   
   const closeModal = document.querySelector('.close');
   
   const images = document.querySelectorAll('.carousel-images img');
   
   let currentIndex = 0;
   
   
   
   openModalBtn.addEventListener('click', () => {
   
       modal.style.display = 'flex';
   
       images[currentIndex].classList.add('active');
   
   });
   
   
   
   closeModal.addEventListener('click', () => {
   
       modal.style.display = 'none';
   
       images[currentIndex].classList.remove('active');
   
   });
   
   
   
   window.addEventListener('click', (e) => {
   
       if (e.target === modal) {
   
           modal.style.display = 'none';
   
           images[currentIndex].classList.remove('active');
   
       }
   
   });
   
   
   
   // Navegación del carrusel
   
   const prevBtn = document.querySelector('.prev');
   
   const nextBtn = document.querySelector('.next');
   
   
   
   prevBtn.addEventListener('click', () => {
   
       images[currentIndex].classList.remove('active');
   
       currentIndex = (currentIndex - 1 + images.length) % images.length;
   
       images[currentIndex].classList.add('active');
   
   });
   
   
   
   nextBtn.addEventListener('click', () => {
   
       images[currentIndex].classList.remove('active');
   
       currentIndex = (currentIndex + 1) % images.length;
   
       images[currentIndex].classList.add('active');
   
   });
   