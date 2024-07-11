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
      if (comicId === "blood+") {
        comicTitle.textContent = "Blood +";
        comicReview.innerHTML = "<i>Saya Otonashi</i> is a seemingly ordinary girl living a mundane life with her adoptive family in Okinawa City. In fact, her only peculiarities are suffering from anemia and being unable to remember any of her life beyond the previous year. <br> However, Saya's forgotten past quickly comes back to haunt her—one night, she is attacked at school by a creature that feeds on human blood. Just when all hope seems lost, a mysterious man named <i>Haji</i> appears and fends off the creature temporarily. But when her rescuer forces her to drink his blood,Saya suddenly enters a trance and slays the monster with ease, using her own blood as a catalyst.<br> Saya then learns of an organization named Red Shield, founded for the sole purpose of defeating the hellish beasts. Now Saya and Haji must work together with Red Shield to fight these fearsome monsters and unlock the secrets to the girl's past.";
      } else if (comicId === "bleach") {
        comicTitle.textContent = "Bleach";
        comicReview.innerHTML = "<i>Ichigo Kurosaki</i> is an ordinary high schooler—until his family is attacked by a <i>Hollow</i>, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named <i>Rukia Kuchiki</i>, who gets injured while protecting Ichigo's family from the assailant. <br> To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result. However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates <i>Orihime Inoue</i>, <i>Yasutora Sado</i>, and <i>Uryuu Ishida</i> — who each have their own unique abilities. <br>As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.";
      }
      else if (comicId === "comic3") {
        comicTitle.textContent = "Comic 3";
        comicReview.textContent = "This is from the JS number 3";
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