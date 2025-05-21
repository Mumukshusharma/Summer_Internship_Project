const animeId = parseInt(localStorage.getItem("selectedAnimeId"));

fetch("anime-data.json")
  .then(response => response.json())
  .then(data => {
    const anime = data.find(a => a.id === animeId);
    if (!anime) return;

    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-image").src = anime.imgSrc;
    document.getElementById("anime-image").alt = anime.title;
    document.getElementById("anime-description").textContent = anime.fullDescription;
    document.getElementById("anime-genre").textContent = anime.genre;
    document.getElementById("anime-episodes").textContent = anime.episodes;
  })
  .catch(err => {
    console.error("Failed to load anime data:", err);
  });
