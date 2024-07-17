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
      if (comicId === "prisoners") {
        comicTitle.textContent = "Prisoners";
        comicReview.innerHTML = "Prisoners is a haunting and intense thriller that stands out for its exceptional performances, masterful direction, and gripping narrative. <br>It explores complex themes such as the limits of morality, the consequences of desperation, and the impact of trauma. It raises thought-provoking questions about justice, vengeance, and the human capacity for both good and evil. <br>The way this film kept me at the edge of my seat, and challenged me to reflect on the darker aspects of human nature left a lasting impression on me. An eye-opener, this is a must-watch!!";
      } else if (comicId === "silence") {
        comicTitle.textContent = "Silence";
        comicReview.innerHTML = "A cinematic excellence, starring <i>Andrew Garfield</i>, <i>Adam Driver</i>, <i>Liam Neeson</i> and many more. Silence is a slow burn, requiring patience and reflection from you as it builds a somber and contemplative atmosphere. <br>It explores profound and challenging themes such as faith, doubt, martyrdom, and cultural clash. <br>The film delves into the complexities of belief and the silence of God in the face of suffering. <br>It raises difficult questions about the nature of faith, the cost of religious conviction, and the moral ambiguities of missionary work. <br>The film's exploration of these themes is thought-provoking and agonizingly accurate forcing you to question the existence of faith";
      }
      else if (comicId === "revenant") {
        comicTitle.textContent = "The Revenant";
        comicReview.innerHTML = "The Revenant, is an epic tale of survival and revenge set in the uncharted American wilderness. The film is inspired by true events and centers around <i>Hugh Glass (Leonardo DiCaprio)</i>, a frontiersman on a fur trading expedition in the 1820s who must fight for survival after being mauled by a bear and left for dead by members of his own hunting team. <br> It explores themes of survival, revenge, and the human spirit's resilience. <br> The spiritual and existential undertones add depth to the narrative, making it a profound exploration of life and death";
      }
  else if (comicId === "social") {
        comicTitle.textContent = "The Social Network";
        comicReview.innerHTML = "<b>Review:</b> <br><i>The Social Network</i>, directed by David Fincher, is a compelling and incisive drama that chronicles the origins of Facebook and the complex personalities behind its creation. <br> The film, based on Ben Mezrich's book <i>The Accidental Billionaires</i>, offers a riveting portrayal of ambition, innovation, and betrayal in the digital age. <br><br><b>Plot and Pacing:</b><br> The plot centers on <i>Mark Zuckerberg (Jesse Eisenberg)</i> and his journey from a Harvard student to the co-founder of one of the world's most influential social media platforms. <br>The film interweaves the creation of Facebook with the subsequent legal battles involving Zuckerberg and his former friends and collaborators. The pacing is brisk and engaging, maintaining a high level of tension and drama throughout its 120-minute runtime.<br><br><b>Themes:</b><br> <i>The Social Network</i> explores themes of ambition, friendship, betrayal, and the ethical complexities of innovation. It delves into the personal and legal conflicts that arise when great ideas and significant sums of money are at stake.<br> The film raises thought-provoking questions about the nature of success, the cost of ambition, and the impact of social media on human relationships. It also examines the loneliness and isolation that can accompany great innovation, portraying Zuckerberg as a tragic figure who achieves immense success at a considerable personal cost.";
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
