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
  else if (comicId === "devilman") {
        comicTitle.textContent = "Devilman: Crybaby";
        comicReview.innerHTML = "Devils cannot take form without a living host. However, if the will of an individual is strong enough, they can overcome the demon and make its power their own, becoming a Devilman. <br> Weak and unassuming, <i>Akira Fudou</i> has always had a bleeding heart. So when his childhood friend Ryou Asuka asks for his help in uncovering devils, Akira accepts without hesitation. However, to Akira's surprise, the place they go to is Sabbath: an immoral party of debauchery and degeneracy. <br>Amidst bloodshed and death, demons possess the partiers, turning their bodies into grotesque monsters, and begin wreaking havoc. In a reckless attempt to save his best friend, Akira unwittingly merges with the devil <i>Amon</i> and becomes a Devilman, gaining the power to defeat the remaining demons. <br>Though it grants him great power, this new partnership awakens an insatiable and primeval part of Akira. Having the body of a devil but the same crybaby heart, Akira works alongside Ryou, destroying those that harm humanity and his loved ones";
      }
  else if (comicId === "deathnote") {
        comicTitle.textContent = "Death Note";
        comicReview.innerHTML = "A <i>shinigami</i>, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a <i>Death Note</i>. One day, <i>Ryuk</i>, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. <br>High school student and prodigy <i>Light Yagami</i> stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be. <br>With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. <br>Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of <i>L</i>.";
      }
   else if (comicId === "neon-genesis") {
        comicTitle.textContent = "Neon Genesis Evangelion";
        comicReview.innerHTML = "In the year 2015, the world stands on the brink of destruction. Humanity's last hope lies in the hands of Nerv, a special agency under the United Nations, and their Evangelions, giant machines capable of defeating the Angels who herald Earth's ruin. <i>Gendou Ikari</i>, head of the organization, seeks compatible pilots who can synchronize with the Evangelions and realize their true potential. <br>Aiding in this defensive endeavor are talented personnel <i>Misato Katsuragi</i>, Head of Tactical Operations, and Ritsuko Akagi, Chief Scientist. Face to face with his father for the first time in years, 14-year-old <i>Shinji Ikari</i>'s average life is irreversibly changed when he is whisked away into the depths of Nerv, and into a harrowing new destiny—he must become the pilot of <i>Evangelion Unit-01</i> with the fate of mankind on his shoulders. <br>Neon Genesis Evangelion is a heroic tale of a young boy who will become a legend. But as this psychological drama unfolds, ancient secrets beneath the big picture begin to bubble to the surface.";
      } 
  else if (comicId === "ghostintheshell") {
        comicTitle.textContent = "Ghost in the Shell: Stand Alone Complex";
        comicReview.innerHTML = "In the not so distant future, mankind has advanced to a state where complete body transplants from flesh to machine is possible. <br>This allows for great increases in both physical and cybernetic prowess and blurring the lines between the two worlds. However, criminals can also make full use of such technology, leading to new and sometimes, very dangerous crimes. <br>In response to such innovative new methods, the Japanese Government has established <i>Section 9</i>, an independently operating police unit which deals with such highly sensitive crimes. Led by <i>Daisuke Aramaki</i> and <i>Motoko Kusanagi</i>, Section 9 deals with such crimes over the entire social spectrum, usually with success. <br>However, when faced with a new A level hacker nicknamed <i>The Laughing Man</i>, the team is thrown into a dangerous cat and mouse game, following the hacker's trail as it leaves its mark on Japan.";
      }
  else if (comicId === "pokemon") {
        comicTitle.textContent = "Pokemon";
        comicReview.innerHTML = "Pokemon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokemon trainers, capture and train them, often with the intent of battling others. Young </i>Ash</i> has not only dreamed of becoming a Pokemon trainer but also a <i>Pokemon Master</i>, and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality.<br>Unfortunately for him, all three Pokemon available to beginning trainers have already been claimed and only Pikachu, a rebellious Electric type Pokemon, remains. <br>However, this chance encounter would mark the start of a lifelong friendship and an epic adventure! Setting off on a journey to become the very best, Satoshi and Pikachu travel across beautiful, sprawling regions with their friends Kasumi, a Water type trainer, and Takeshi, a Rock type trainer. <br>But danger lurks around every corner. The infamous <i>Team Rocket</i> is always nearby, seeking to steal powerful Pokemon through nefarious schemes. It'll be up to Satoshi and his friends to thwart their efforts as he also strives to earn the eight Pokemon Gym Badges he'll need to challenge the Pokemon League, and eventually claim the title of Pokemon Master.";
      }
  else if (comicId === "psychopass") {
        comicTitle.textContent = "Psycho-Pass";
        comicReview.innerHTML = "Justice, and the enforcement of it, has changed. In the 22nd century, Japan enforces the <i>Sibyl System</i>, an objective means of determining the threat level of each citizen by examining their mental state for signs of criminal intent, known as their Psycho-Pass. <br>Inspectors uphold the law by subjugating, often with lethal force, anyone harboring the slightest ill-will; alongside them are Enforcers, jaded Inspectors that have become latent criminals, granted relative freedom in exchange for carrying out the Inspectors' dirty work. <br>Into this world steps <i>Akane Tsunemori</i>, a young woman with an honest desire to uphold justice. <br>However, as she works alongside veteran Enforcer <i>Shinya Kougami</i>, she soon learns that the Sibyl System's judgments are not as perfect as her fellow Inspectors assume. <br>With everything she has known turned on its head, Akane wrestles with the question of what justice truly is, and whether it can be upheld through the use of a system that may already be corrupt. ";
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
