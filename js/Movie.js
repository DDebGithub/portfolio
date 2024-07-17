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
        comicReview.innerHTML = "<b>Starring:</b> <i>Hugh Jackman, Jake Gyllenhaal, Viola Davis, Maria Bello, Terrence Howard, Melissa Leo, Paul Dano</i><br><br><b>Review:</b><br> <i>Prisoners</i> is a gripping thriller that showcases the dark and disturbing depths of human desperation and morality.<br>The film follows Keller Dover (<i>Hugh Jackman</i>) and Detective Loki (<i>Jake Gyllenhaal</i>) as they race against time to find Dover's missing daughter and her friend, who have mysteriously disappeared on Thanksgiving.<br><br><b>Plot and Pacing:</b><br>The plot is intense and well-crafted, maintaining a high level of suspense throughout its runtime and allowing the tension to build steadily as the story unfolds. <br>The narrative is filled with twists and turns that will keep you guessing, making it a compelling watch from start to finish.<br><br><b>Themes:</b><br><i>Prisoners</i> explores complex themes such as the limits of morality, the consequences of desperation, and the impact of trauma.<br>It raises thought-provoking questions about justice, vengeance, and the human capacity for both good and evil.<br> The film's ethical dilemmas and the characters' moral ambiguities make it a deeply compelling and thought-provoking experience.";
      } else if (comicId === "silence") {
        comicTitle.textContent = "Silence";
        comicReview.innerHTML = "<b>Starring:</b> <i>Andrew Garfield, Adam Driver, Liam Neeson, Tadanobu Asano, Ciarán Hinds, Issei Ogata</i><br><br><b>Review:</b><br><i>Silence</i> is a profound and meditative film, based on Shūsaku Endō's 1966 novel of the same name. The film tells the story of two 17th-century Jesuit priests, <i>Father Sebastião Rodrigues (Andrew Garfield)<i> and <i>Father Francisco Garupe (Adam Driver)</i>, who travel to Japan to find their mentor, <i>Father Cristóvão Ferreira (Liam Neeson)</i>, who is rumored to have renounced his faith under persecution.<br><br><b>Plot and Pacing:</b><br>The narrative is deeply immersive, following the priests' perilous journey through a country where Christianity is outlawed, and believers face brutal persecution. The film's pacing is deliberate, allowing the story's themes and emotional weight to unfold gradually. It is a slow burn, requiring patience and reflection from its audience as it builds a somber and contemplative atmosphere.<br><br><b>Themes:</b><br> <i>Silence</i> explores profound and challenging themes such as faith, doubt, martyrdom, and cultural clash. <br>The film delves into the complexities of belief and the silence of God in the face of suffering. It raises difficult questions about the nature of faith, the cost of religious conviction, and the moral ambiguities of missionary work. The film's exploration of these themes is thought-provoking and deeply moving, leaving a lasting impression on its audience.";
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
