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

      Set the modal content based on the comicId
      if (comicId === "prisoners") {
        comicTitle.textContent = "Prisoners";
        comicReview.innerHTML = "Prisoners is a haunting and intense thriller that stands out for its exceptional performances, masterful direction, and gripping narrative. The way this film kept me at the edge of my seat, and challenged me to reflect on the darker aspects of human nature left a lasting impression on me. An eye-opener, this is a must-watch!!";
      } else if (comicId === "silence") {
        comicTitle.textContent = "Silence";
        comicReview.innerHTML = "A cinematic excellence, starring <i>Andrew Garfield</i>, <i>Adam Driver</i>, <i>Liam Neeson</i> and many more. Silence is a slow burn, requiring patience and reflection from you as it builds a somber and contemplative atmosphere. <br>It explores profound and challenging themes such as faith, doubt, martyrdom, and cultural clash. <br>The film delves into the complexities of belief and the silence of God in the face of suffering. <br>It raises difficult questions about the nature of faith, the cost of religious conviction, and the moral ambiguities of missionary work. <br>The film's exploration of these themes is thought-provoking and agonizingly accurate forcing you to question the existence of faith";
      }
      else if (comicId === "revenant") {
        comicTitle.textContent = "The Revenant";
        comicReview.innerHTML = "The Revenant, is an epic tale of survival and revenge set in the uncharted American wilderness. The film is inspired by true events and centers around <i>Hugh Glass (Leonardo DiCaprio)</i>, a frontiersman on a fur trading expedition in the 1820s who must fight for survival after being mauled by a bear and left for dead by members of his own hunting team. <br> It explores themes of survival, revenge, and the human spirit's resilience. <br> The spiritual and existential undertones add depth to the narrative, making it a profound exploration of life and death";
      }
      

      modal.style.display = "block";
    }

function closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }



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
