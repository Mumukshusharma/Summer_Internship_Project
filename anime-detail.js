// Get slug from URL
const urlParams = new URLSearchParams(window.location.search);
const rawId = urlParams.get("id");

// Normalize title to slug
function createSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

fetch("anime-data.json")
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => createSlug(a.title) === rawId);

    if (!anime) {
      document.getElementById("anime-title").textContent = "Anime not found";
      return;
    }

    // Set banner image
    document.getElementById("banner").style.backgroundImage = `url('${anime.bannerImage || anime.imgSrc}')`;
    document.getElementById("poster").src = anime.imgSrc;


    // Set content
    document.getElementById("poster").src = anime.imgSrc;
    document.getElementById("poster").alt = anime.title;
    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-description").textContent = anime.fullDescription || anime.description;
    document.getElementById("anime-genre").textContent = anime.genre;
    document.getElementById("anime-episodes").textContent = anime.episodes;
    document.getElementById("anime-rating").textContent = anime.rating;
    document.getElementById("anime-studio").textContent = anime.studio;
    document.getElementById("anime-year").textContent = anime.releaseYear;

    // Embed trailer if available
    if (anime.trailerUrl) {
      document.getElementById("anime-trailer").innerHTML = `
        <h2>Watch Trailer</h2>
        <iframe width="100%" height="450" src="${anime.trailerUrl}"
        frameborder="0" allowfullscreen></iframe>`;
    } else {
      document.getElementById("anime-trailer").innerHTML = "<p>No trailer available.</p>";
    }

    // Load user status from localStorage
    const status = localStorage.getItem(`anime-status-${anime.title}`) || "None";
    document.getElementById("user-status").textContent = status;
    document.getElementById("status").value = status;

    document.getElementById("status").addEventListener("change", (e) => {
      const newStatus = e.target.value;
      localStorage.setItem(`anime-status-${anime.title}`, newStatus);
      document.getElementById("user-status").textContent = newStatus;
    });
  })
  .catch(err => {
    console.error("Error fetching anime data:", err);
    document.getElementById("anime-title").textContent = "Failed to load data";
  });
