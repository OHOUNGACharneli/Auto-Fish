document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById('background');
    const btnProd = document.getElementById("producteurs-btn");
    const btnCons = document.getElementById("consommateurs-btn");
    const contentDiv = document.getElementById("content");

    function switchContent(page) {
        // Commence par faire disparaître doucement (fade out)
        contentDiv.style.opacity = 0;

        setTimeout(() => {
            if (page === 'producteurs') {
                background.style.backgroundImage = "url('images/solution-image/cover_Image.png')";
                btnProd.classList.add('active');
                btnCons.classList.remove('active');

                fetch('producteur.html')
                    .then(response => {
                        if (!response.ok) throw new Error("Erreur de chargement");
                        return response.text();
                    })
                    .then(data => {
                        contentDiv.innerHTML = data;
                        // Après avoir changé le contenu, faire réapparaître (fade in)
                        contentDiv.style.opacity = 1;
                    })
                    .catch(error => {
                        contentDiv.innerHTML = "<p>Erreur de chargement du contenu.</p>";
                        contentDiv.style.opacity = 1;
                    });

            } else if (page === 'consommateurs') {
                background.style.backgroundImage = "url('images/solution-image/consommateur.png')";
                btnCons.classList.add('active');
                btnProd.classList.remove('active');

                fetch('consommateur.html')
                    .then(response => {
                        if (!response.ok) throw new Error("Erreur de chargement");
                        return response.text();
                    })
                    .then(data => {
                        contentDiv.innerHTML = data;
                        contentDiv.style.opacity = 1;
                    })
                    .catch(error => {
                        contentDiv.innerHTML = "<p>Erreur de chargement du contenu.</p>";
                        contentDiv.style.opacity = 1;
                    });
            }
        }, 300); // délai pour l'effet fade out
    }

    // 🔥 Ici j'ajoute les événements click pour activer les boutons
    btnProd.addEventListener("click", () => switchContent('producteurs'));
    btnCons.addEventListener("click", () => switchContent('consommateurs'));

    // 🔥 Et ici je charge Producteurs par défaut au démarrage
    switchContent('producteurs');
});

// Une seule vidéo peut jouer à la fois
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".espaces-video-player");
  
    videos.forEach((video) => {
      video.addEventListener("play", () => {
        videos.forEach((otherVideo) => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });
  });
  