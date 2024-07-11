// Smooth scrolling effect for menu links
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});

function openModal(comicId) {
      var modal = document.getElementById("modal");
      var comicTitle = document.getElementById("comic-title-modal");
      var comicReview = document.getElementById("comic-review-modal");

      // Set the modal content based on the comicId
      if (comicId === "comic1") {
        comicTitle.textContent = "Comic 1";
        comicReview.textContent = "This is a great comic with an engaging storyline and fantastic artwork. I highly recommend it to all comic lovers!";
      } else if (comicId === "comic2") {
        comicTitle.textContent = "Comic 2";
        comicReview.textContent = "Comic 2 from the JS.";
      }
      else if (comicId === "comic3") {
        comicTitle.textContent = "Comic 3";
        comicReview.textContent = "This is from the JS";
      }
      

      modal.style.display = "block";
    }

function closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }

//Carousel
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

images.forEach((image, index) => {
  image.style.transform = `translateX(${index * 100}%)`;
});

//Filter Option
// JavaScript to filter anime based on selected rating
  document.getElementById("rating-filter").addEventListener("change", function() {
    const selectedRating = this.value;
    const animeList = document.querySelectorAll(".comic-card");

    animeList.forEach(anime => {
      const rating = anime.getAttribute("data-rating");

      if (selectedRating === "all" || rating === selectedRating) {
        anime.style.display = "block";
      } else {
        anime.style.display = "none";
      }
    });
  });
  
 // Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

// Section Adding JS

document.addEventListener("DOMContentLoaded", function () {
    const elementGroup = document.querySelector(".element-group");
    const addElementButton = document.getElementById("add-element-button");

    addElementButton.addEventListener("click", function () {
        // Create a new element to add
        const newElement = document.createElement("div");
        newElement.classList.add("added-element");
        newElement.textContent = "New Element"; // You can customize the content

        // Append the new element to the group
        elementGroup.appendChild(newElement);
    });
});

