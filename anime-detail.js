const animeId = parseInt(localStorage.getItem("selectedAnimeId"));

fetch("anime-data.json")
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => a.id === animeId);
    if (!anime) {
      document.body.innerHTML = "<h2>Anime not found</h2>";
      return;
    }

    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-image").src = anime.imgSrc;
    document.getElementById("anime-description").textContent = anime.fullDescription || anime.description;
    document.getElementById("anime-genre").textContent = anime.genre || "N/A";
    document.getElementById("anime-episodes").textContent = anime.episodes || "Unknown";
  })
  .catch(err => {
    console.error("Error loading data:", err);
    document.body.innerHTML = "<h2>Failed to load data.</h2>";
  });
