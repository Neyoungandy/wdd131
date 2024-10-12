// filtered-temples.js

// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
      templeName: "Sydney Australia",
      location: "Sydney, Australia",
      dedicated: "2000, April, 16",
      area: 12000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-christmas-1070459-wallpaper.jpg"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, October, 27",
      area: 15000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-evening-1905504.jpg"
    },
    {
      templeName: "Chicago United State",
      location: "Chicago Illinois",
      dedicated: "1985, August, 9",
      area: 37062,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_4222.jpg"
    },
    {
      templeName: "Massachussetts U.S.A",
      location: "Massachusetts USA",
      dedicated: "2000, October 1",
      area: 69600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
    }
  ];
  
  // Function to update footer with current year and last modified date
  function updateFooter() {
      const currentYear = new Date().getFullYear();
      document.getElementById('current-year').textContent = currentYear;
  
      const lastModified = new Date(document.lastModified);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById('last-modified').textContent = lastModified.toLocaleDateString(undefined, options);
  }
  
  // Function to create and display temple cards
  function displayTemples(templeArray) {
      const albumSection = document.querySelector('.album');
      albumSection.innerHTML = ''; // Clear existing content
  
      if (templeArray.length === 0) {
          albumSection.innerHTML = '<p>No temples match the selected criteria.</p>';
          return;
      }
  
      templeArray.forEach(temple => {
          // Create figure element
          const figure = document.createElement('figure');
  
          // Create img element with lazy loading
          const img = document.createElement('img');
          img.dataset.src = temple.imageUrl; // Use data-src for lazy loading
          img.alt = `Image of ${temple.templeName}`;
          img.loading = 'lazy'; // Enable native lazy loading
  
          // Create figcaption element
          const figcaption = document.createElement('figcaption');
          figcaption.innerHTML = `
              <strong>${temple.templeName}</strong><br>
              Location: ${temple.location}<br>
              Dedicated: ${temple.dedicated}<br>
              Area: ${temple.area.toLocaleString()} sqft
          `;
  
          // Append img and figcaption to figure
          figure.appendChild(img);
          figure.appendChild(figcaption);
  
          // Append figure to album section
          albumSection.appendChild(figure);
      });
  
      // Optional: Implement Intersection Observer for enhanced lazy loading
      implementLazyLoading();
  }
  
  // Function to implement Intersection Observer for lazy loading images
  function implementLazyLoading() {
      const images = document.querySelectorAll('img[data-src]');
      const config = {
          rootMargin: '0px 0px 50px 0px',
          threshold: 0.01
      };
  
      let observer;
  
      if ('IntersectionObserver' in window) {
          observer = new IntersectionObserver(onIntersection, config);
          images.forEach(image => {
              if (image.dataset.src) {
                  observer.observe(image);
              }
          });
      } else {
          // Fallback for browsers without IntersectionObserver support
          images.forEach(image => {
              loadImage(image);
          });
      }
  
      function onIntersection(entries, observer) {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  loadImage(img);
                  observer.unobserve(img);
              }
          });
      }
  
      function loadImage(image) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
      }
  }
  
  // Function to filter temples based on criteria
  function filterTemples(criteria) {
      let filtered = [];
  
      switch(criteria) {
          case 'old':
              filtered = temples.filter(temple => {
                  const dedicationYear = new Date(temple.dedicated).getFullYear();
                  return dedicationYear < 1900;
              });
              break;
          case 'new':
              filtered = temples.filter(temple => {
                  const dedicationYear = new Date(temple.dedicated).getFullYear();
                  return dedicationYear > 2000;
              });
              break;
          case 'large':
              filtered = temples.filter(temple => temple.area > 90000);
              break;
          case 'small':
              filtered = temples.filter(temple => temple.area < 10000);
              break;
          case 'all':
          default:
              filtered = temples;
      }
  
      displayTemples(filtered);
  }
  
  // Function to handle navigation menu clicks
  function setupNavigation() {
      const navLinks = document.querySelectorAll('.nav-links a');
  
      navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const filter = link.getAttribute('data-filter');
              filterTemples(filter);
              // Close the navigation menu on mobile after selection
              if (window.innerWidth < 768) {
                  toggleMenu(false);
              }
          });
      });
  }
  
  // Function to toggle navigation menu on mobile
  function toggleMenu(forceState) {
      const nav = document.querySelector('nav');
      const hamburger = document.querySelector('.hamburger');
      
      if (typeof forceState === 'boolean') {
          nav.style.display = forceState ? 'block' : 'none';
          hamburger.innerHTML = forceState ? '&times;' : '&#9776;';
          return;
      }
  
      // Toggle display
      if (nav.style.display === 'block') {
          nav.style.display = 'none';
          hamburger.innerHTML = '&#9776;'; // Hamburger icon
      } else {
          nav.style.display = 'block';
          hamburger.innerHTML = '&times;'; // 'X' icon
      }
  }
  
  // Event Listener for DOM Content Loaded
  document.addEventListener('DOMContentLoaded', () => {
      updateFooter();
      displayTemples(temples); // Display all temples initially
      setupNavigation();
  
      const hamburger = document.querySelector('.hamburger');
      hamburger.addEventListener('click', () => toggleMenu());
  });
  