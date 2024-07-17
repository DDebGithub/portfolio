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
        comicReview.innerHTML = "<b>Starring:</b> <i>Andrew Garfield, Adam Driver, Liam Neeson, Tadanobu Asano, Ciarán Hinds, Issei Ogata</i><br><br><b>Review:</b><br><i>Silence</i> is a profound and meditative film, based on Shūsaku Endō's 1966 novel of the same name. The film tells the story of two 17th-century Jesuit priests, Father Sebastião Rodrigues (<i>Andrew Garfield</i>) and Father Francisco Garupe (<i>Adam Driver</i>), who travel to Japan to find their mentor, Father Cristóvão Ferreira (<i>Liam Neeson</i>), who is rumored to have renounced his faith under persecution.<br><br><b>Plot and Pacing:</b><br>The narrative is deeply immersive, following the priests' perilous journey through a country where Christianity is outlawed, and believers face brutal persecution. The film's pacing is deliberate, allowing the story's themes and emotional weight to unfold gradually. It is a slow burn, requiring patience and reflection from its audience as it builds a somber and contemplative atmosphere.<br><br><b>Themes:</b><br> <i>Silence</i> explores profound and challenging themes such as faith, doubt, martyrdom, and cultural clash. <br>The film delves into the complexities of belief and the silence of God in the face of suffering. It raises difficult questions about the nature of faith, the cost of religious conviction, and the moral ambiguities of missionary work. The film's exploration of these themes is thought-provoking and deeply moving, leaving a lasting impression on its audience.";
      }
      else if (comicId === "revenant") {
        comicTitle.textContent = "The Revenant";
        comicReview.innerHTML = "<b>Starring:</b> <i>Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter, Forrest Goodluck</i>.<br><br><b>Review:</b><i>The Revenant</i>, is an epic tale of survival and revenge set in the uncharted American wilderness. The film is inspired by true events and centers around Hugh Glass (<i>Leonardo DiCaprio</i>), a frontiersman on a fur trading expedition in the 1820s who must fight for survival after being mauled by a bear and left for dead by members of his own hunting team.<br><br><b>Plot and Pacing:</b><br>The plot of <i>The Revenant</i> is straightforward yet compelling, focusing on Hugh Glass's relentless quest for survival and vengeance against John Fitzgerald (<i>Tom Hardy</i>), the man who betrayed him.<br> The pacing is deliberate, immersing the audience in the harsh and unforgiving landscape that Glass must navigate. The film's intense and visceral sequences are balanced with moments of quiet reflection, making the journey both physically and emotionally exhausting for the viewer.<br><br><b>Themes:</b><br><i>The Revenant</i> explores themes of survival, revenge, and the human spirit's resilience. It delves into the primal instincts that drive individuals to endure unimaginable hardships and the moral complexities of vengeance.<br> The film also highlights the relationship between humans and nature, showcasing the latter's indomitable force and beauty. The spiritual and existential undertones add depth to the narrative, making it a profound exploration of life and death."
      }
  else if (comicId === "social") {
        comicTitle.textContent = "The Social Network";
        comicReview.innerHTML = "<b>Starring:</b> <i>Jesse Eisenberg, Andrew Garfield, Justin Timberlake, Armie Hammer, Rooney Mara, Max Minghella</i><br><br><b>Review:</b> <br><i>The Social Network</i>, directed by David Fincher, is a compelling and incisive drama that chronicles the origins of Facebook and the complex personalities behind its creation. <br> The film, based on Ben Mezrich's book <i>The Accidental Billionaires</i>, offers a riveting portrayal of ambition, innovation, and betrayal in the digital age. <br><br><b>Plot and Pacing:</b><br> The plot centers on <i>Mark Zuckerberg (Jesse Eisenberg)</i> and his journey from a Harvard student to the co-founder of one of the world's most influential social media platforms. <br>The film interweaves the creation of Facebook with the subsequent legal battles involving Zuckerberg and his former friends and collaborators. The pacing is brisk and engaging, maintaining a high level of tension and drama throughout its 120-minute runtime.<br><br><b>Themes:</b><br> <i>The Social Network</i> explores themes of ambition, friendship, betrayal, and the ethical complexities of innovation. It delves into the personal and legal conflicts that arise when great ideas and significant sums of money are at stake.<br> The film raises thought-provoking questions about the nature of success, the cost of ambition, and the impact of social media on human relationships. It also examines the loneliness and isolation that can accompany great innovation, portraying Zuckerberg as a tragic figure who achieves immense success at a considerable personal cost.";
      }
  else if (comicId === "pulpfiction") {
        comicTitle.textContent = "Pulp Fiction";
        comicReview.innerHTML = "<b>Starring:</b> <i>John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Ving Rhames, Harvey Keitel, Tim Roth, Amanda Plummer</i><br><br><b>Review:</b> <br><i>Pulp Fiction</i>, directed by Quentin Tarantino, is a groundbreaking and influential film that weaves together multiple interconnected stories set in the gritty underworld of Los Angeles. Known for its non-linear narrative, sharp dialogue, and eclectic soundtrack, <i>Pulp Fiction</i> has left an indelible mark on modern cinema. <br><br><b>Plot and Pacing:</b><br> The plot of Pulp Fiction is divided into several overlapping stories featuring a diverse cast of characters, including hitmen Vincent Vega (<i>John Travolta</i>) and Jules Winnfield (<i>Samuel L. Jackson</i>), boxer Butch Coolidge (<i>Bruce Willis</i>), gangster Marsellus Wallace (<i>Ving Rhames</i>), and his wife Mia Wallace (<i>Uma Thurman</i>). <br>The film's non-linear structure keeps the audience engaged, with each story segment revealing new layers and connections. The pacing is dynamic, balancing moments of intense action with scenes of dark humor and thoughtful dialogue.<br><br><b>Themes:</b><br> <i>Pulp Fiction</i> explores themes of redemption, fate, and the moral ambiguities of crime. The film's characters are often faced with choices that challenge their ethical boundaries, leading to moments of introspection and transformation. <br>The intertwining stories create a sense of interconnectedness, emphasizing the impact of seemingly random events on individuals' lives. The film also delves into the concept of honor among thieves, examining the relationships and loyalties within the criminal underworld.";
      }
  else if (comicId === "birdman") {
        comicTitle.textContent = "Birdman";
        comicReview.innerHTML = "<b>Starring:</b> <i>Michael Keaton, Edward Norton, Emma Stone, Naomi Watts, Zach Galifianakis, Andrea Riseborough, Amy Ryan</i><br><br><b>Review:</b> <br><i>Birdman </i>, directed by Alejandro G. Iñárritu, is a visually stunning and thematically rich film that delves into the complexities of art, fame, and personal redemption. Known for its unique cinematography and compelling performances, <i>Birdman</i> stands out as a modern cinematic masterpiece. <br><br><b>Plot and Pacing:</b><br> The plot follows Riggan Thomson (<i>Michael Keaton</i>), a washed-up actor famous for his role as the superhero Birdman, as he attempts to revitalize his career by directing and starring in a Broadway adaptation of Raymond Carver's short story <i>What We Talk About When We Talk About Love</i>.<br> The film captures Riggan's struggle with his inner demons, relationships, and the pressure of the opening night. The pacing is fluid, driven by the film's innovative continuous-shot technique that creates a sense of real-time urgency and immersion.<br><br><b>Themes:</b><br> <i>Birdman</i> explores themes of identity, artistic integrity, and the quest for meaning in a superficial world. It delves into the tension between commercial success and artistic fulfillment, highlighting the internal and external conflicts faced by those in the entertainment industry. The film also examines the nature of fame and its impact on personal relationships and self-worth. The meta-commentary on Hollywood and the nature of celebrity adds layers of irony and introspection, making it a thought-provoking and multi-faceted narrative.";
      }
  else if (comicId === "insidedavis") {
        comicTitle.textContent = "Inside Llewyn Davis";
        comicReview.innerHTML = "<b>Starring:</b> <i>Oscar Isaac, Carey Mulligan, John Goodman, Garrett Hedlund, Justin Timberlake, F. Murray Abraham</i><br><br><b>Review:</b> <br><i>Inside Llewyn Davis </i>, directed by Joel and Ethan Coen, is a poignant and beautifully crafted film that explores the struggles and solitude of a folk singer in the Greenwich Village folk scene of 1961. With its melancholic tone and compelling performances, the film offers a reflective and intimate look at the life of an artist on the brink of collapse. <br><br><b>Plot and Pacing:</b><br> The plot follows Llewyn Davis (Oscar Isaac), a talented yet struggling folk musician, as he navigates a week in his life filled with setbacks, disappointments, and fleeting moments of hope. The narrative is episodic, capturing the cyclical and often futile nature of Llewyn's endeavors as he drifts from gig to gig and couch to couch. The pacing is deliberate, allowing the audience to fully immerse themselves in the character's world and internal struggles. <br><br><b>Themes:</b><br> <i>Inside Llewyn Davis</i> explores themes of artistic struggle, failure, and the search for meaning in a seemingly indifferent world. The film delves into the isolation and perseverance of an artist who refuses to compromise his vision, even when faced with constant rejection and hardship. <br>The Coen brothers also touch on themes of fate and chance, highlighting the unpredictability of success and the fleeting nature of opportunities. The film's exploration of the human condition, coupled with its bittersweet tone, makes it a deeply introspective and thought-provoking experience.";
      }
  else if (comicId === "fall") {
        comicTitle.textContent = "The Fall";
        comicReview.innerHTML = "<b>Starring:</b> <i>Lee Pace, Catinca Untaru, Justine Waddell, Kim Uylenbroek, Aiden Lithgow</i><br><br><b>Review:</b><br><i>The Fall</i>, directed by Tarsem Singh, is a visually stunning and emotionally rich film that combines fantastical storytelling with profound themes of human connection and resilience. Set against the backdrop of 1920s Los Angeles, the film intertwines reality and imagination in a mesmerizing and unforgettable cinematic experience.<br><br><b>Plot and Pacing:</b><br> The plot centers around Roy Walker (<i>Lee Pace</i>), a stuntman recovering from a severe injury in a hospital, and Alexandria (<i>Catinca Untaru</i>), a young girl with a broken arm. To pass the time and to gain her trust, Roy begins to tell Alexandria an epic story of adventure, weaving together a fantastical tale filled with larger-than-life characters. <br>As the story unfolds, it becomes clear that Roy's narrative is deeply intertwined with his own personal struggles and desires. The pacing of the film is deliberate, balancing the rich, colorful fantasy sequences with the more somber and intimate moments between Roy and Alexandria.<br><br><b>Themes:</b><br> <i>The Fall</i> explores themes of storytelling, imagination, and the healing power of human connection. It delves into the ways in which we use stories to cope with pain and make sense of our experiences. The film also touches on themes of friendship, trust, and the innocence of childhood. The interplay between reality and fantasy serves as a metaphor for the characters' emotional journeys, highlighting the transformative power of imagination and human resilience.";
      }
  else if (comicId === "seven") {
        comicTitle.textContent = "Se7en";
        comicReview.innerHTML = "<b>Starring:</b> <i>Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey, R. Lee Ermey</i><br><br><b>Review:</b><br><i>Se7en</i>, directed by David Fincher, is a masterfully crafted psychological thriller that delves into the depths of human depravity and the complexities of moral righteousness. With its dark, gripping narrative and standout performances, <i>Se7en</i> has become a seminal film in the thriller genre.<br><br><b>Plot and Pacing:</b><br>The plot follows two detectives, the seasoned William Somerset (<i>Morgan Freeman</i>) and the young and impulsive David Mills (<i>Brad Pitt</i>), as they hunt a serial killer who uses the seven deadly sins as the basis for his murders. The investigation takes the detectives through a series of gruesome and meticulously planned crime scenes, each representing one of the sins.<br> The pacing is taut and relentless, maintaining a high level of suspense and tension throughout the film's 127-minute runtime. The narrative builds steadily toward a harrowing and unforgettable climax.<br><br><b>Themes:</b><br> <i>Se7en</i> explores themes of morality, justice, and the nature of evil. The film delves into the psychological and philosophical aspects of sin, questioning the societal and individual responses to moral transgressions. <br>It also examines the impact of violence and corruption on those who seek to uphold the law, highlighting the personal and professional toll on the detectives involved in the investigation. The film's exploration of these themes is thought-provoking and deeply unsettling, leaving a lasting impact on the audience.";
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
