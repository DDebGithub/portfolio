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
        comicReview.innerHTML = "<i>Saya Otonashi</i> is a seemingly ordinary girl living a mundane life with her adoptive family in Okinawa City. In fact, her only peculiarities are suffering from anemia and being unable to remember any of her life beyond the previous year. <br> However, Saya's forgotten past quickly comes back to haunt her—one night, she is attacked at school by a creature that feeds on human blood. <br>Just when all hope seems lost, a mysterious man named <i>Haji</i> appears and fends off the creature temporarily. But when her rescuer forces her to drink his blood,Saya suddenly enters a trance and slays the monster with ease, using her own blood as a catalyst.<br> Saya then learns of an organization named Red Shield, founded for the sole purpose of defeating the hellish beasts. Now Saya and Haji must work together with Red Shield to fight these fearsome monsters and unlock the secrets to the girl's past.";
      } else if (comicId === "bleach") {
        comicTitle.textContent = "Bleach";
        comicReview.innerHTML = "<i>Ichigo Kurosaki</i> is an ordinary high schooler—until his family is attacked by a <i>Hollow</i>, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named <i>Rukia Kuchiki</i>, who gets injured while protecting Ichigo's family from the assailant. <br> To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result. However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. <br>However, he is not alone in his fight, as he is later joined by his friends—classmates <i>Orihime Inoue</i>, <i>Yasutora Sado</i>, and <i>Uryuu Ishida</i> — who each have their own unique abilities. <br>As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.";
      }
      else if (comicId === "dbz") {
        comicTitle.textContent = "DragonballZ";
        comicReview.innerHTML = "Five years after winning the World Martial Arts tournament, <i>SON-Goku</i> is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named <i>Raditz</i> who presents himself as Goku's long-lost brother. He reveals that Goku is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated.<br> When he was sent to Earth as a baby, Goku's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others. <br>With his failed attempt at forcibly recruiting Goku as an ally, Raditz warns Goku's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. <br>A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z. ";
      }
  else if (comicId === "naruto") {
        comicTitle.textContent = "DragonballZ";
        comicReview.innerHTML = "Moments prior to <i>Naruto Uzumaki</i>'s birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the <i>Hidden Leaf Village</i>, and wreaked havoc. <br>In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br>Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. <br>Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes. ";
      }
   else if (comicId === "narutoS") {
        comicTitle.textContent = "Naruto Shippudden";
        comicReview.innerHTML = "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. <br>Now <i>Akatsuki</i>, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. <br>Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. <br>Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.. ";
      }
  else if (comicId === "samuraichamp") {
        comicTitle.textContent = "Samurai Champloo";
        comicReview.innerHTML = "Fuu Kasumi is a young and clumsy waitress who spends her days peacefully working in a small teahouse. That is, until she accidentally spills a drink all over one of her customers! With a group of samurai now incessantly harassing her, <i>Fuu</i> desperately calls upon another samurai in the shop, <i>Mugen</i>, who quickly defeats them with his wild fighting technique, utilizing movements reminiscent to that of breakdancing. <br>Unfortunately, Mugen decides to pick a fight with the unwilling ronin <i>Jin</i>, who wields a more precise and traditional style of swordfighting, and the latter proves to be a formidable opponent. The only problem is, they end up destroying the entire shop as well as accidentally killing the local magistrate's son. For their crime, the two samurai are captured and set to be executed. However, they are rescued by Fuu, who hires the duo as her bodyguards. <br>Though she no longer has a place to return to, the former waitress wishes to find a certain samurai who smells of sunflowers and enlists the help of the now exonerated pair to do so. Despite initially disapproving of this idea, the two eventually agree to assist the girl in her quest; thus, the trio embark upon an adventure to find this mysterious warrior—that is, if Fuu can keep Mugen and Jin from killing each other. <br>Set in an alternate Edo Period of Japan, Samurai Champloo follows the journey of these three eccentric individuals in an epic quest full of action, comedy, and dynamic sword fighting, all set to the beat of a unique hip-hop infused soundtrack. ";
      } 
 else if (comicId === "afrosamurai") {
        comicTitle.textContent = "Afro Samurai";
        comicReview.innerHTML = "When he was a young boy, <i>Afro</i> witnessed his father be cut down in a duel at the hands of a man known only as <i>Justice</i>. After taking the life of Afro's father, Justice cast aside his </i>Number Two headband</i> and took the Number One to claim its godly powers as his own. <br>Years later, having obtained the Number Two headband which grants him the right to challenge the Number One, Afro moves forward in his hunt for revenge on the man who murdered his father. <br>There is just one thing that stands in his way—everyone else in the world! Though the Number One can only be challenged by the Number Two, the Number Two can be challenged by anyone. As his enemies gather to try and take the title of Number Two, Afro must fight through a myriad of foes and obstacles if he hopes to reach the Number One and claim vengeance once and for all.";
      } 
   else if (comicId === "fatestaynight") {
        comicTitle.textContent = "Fate/Stay Night";
        comicReview.innerHTML = "After a mysterious inferno kills his family, <i>Shirou</i> is saved and adopted by Kiritsugu Emiya, who teaches him the ways of magic and justice. One night, years after Kiritsugu's death, Shirou is cleaning at school, when he finds himself caught in the middle of a deadly encounter between two superhumans known as Servants. <br>During his attempt to escape, the boy is caught by one of the Servants and receives a life-threatening injury. Miraculously, he survives, but the same Servant returns to finish what he started. In desperation, Shirou summons a Servant of his own, a knight named <i>Saber</i>. <br>The two must now participate in the Fifth Holy Grail War, a battle royale of seven Servants and the mages who summoned them, with the grand prize being none other than the omnipotent Holy Grail itself. <br>Fate/stay night follows Shirou as he struggles to find the fine line between a hero and a killer, his ideals clashing with the harsh reality around him. Will the boy become a hero like his foster father, or die trying";
      }
  else if (comicId === "xxxholic") {
        comicTitle.textContent = "XXXHolic";
        comicReview.innerHTML = "<i>Kimihiro Watanuki</i> can see spirits and other assorted supernatural creatures, which is quite a bothersome ability he strongly dislikes. On the way home one day, while plagued by some spirits, he is inexplicably compelled to enter a strange house. There, he encounters <i>Yuuko</i>, a mysterious woman who claims to be able to rid him of the ability to see and attract the troublesome creatures—for a price. She demands that he work at her <i>store</i> that grants wishes to people, and thus begins Watanuki's adventures through weird and wonderful events.";
      }
  
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
