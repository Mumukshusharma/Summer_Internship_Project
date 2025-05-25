// Get slug from URL
const urlParams = new URLSearchParams(window.location.search);
const animeSlug = urlParams.get("id");

// Robust slug maker
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Load data
fetch("anime-data.json")
  .then(res => {
    if (!res.ok) throw new Error("JSON file not found");
    return res.json();
  })
  .then(data => {
    const anime = data.find(a => createSlug(a.title) === animeSlug);

    if (!anime) {
      document.getElementById("anime-detail").innerHTML = "<h2>Anime not found</h2>";
      return;
    }

    // Populate page
    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-img").src = anime.imgSrc;
    document.getElementById("anime-img").alt = anime.title;
    document.getElementById("anime-description").textContent = anime.fullDescription || anime.description;
    document.getElementById("anime-genre").textContent = anime.genre || "Unknown";
    document.getElementById("anime-rating").textContent = anime.rating || "N/A";
    document.getElementById("anime-studio").textContent = anime.studio || "Unknown";
    document.getElementById("anime-release-year").textContent = anime.releaseYear || "Unknown";

    // Trailer (optional)
    if (anime.trailerUrl) {
      document.getElementById("anime-trailer").innerHTML = `
        <iframe width="560" height="315" src="${anime.trailerUrl}" 
          title="YouTube trailer" frameborder="0" allowfullscreen></iframe>`;
    } else {
      document.getElementById("anime-trailer").innerHTML = "<p>No trailer available.</p>";
    }
  })
  .catch(error => {
    console.error("Error loading data:", error);
    document.getElementById("anime-detail").innerHTML = "<h2>Failed to load data.</h2>";
  });
