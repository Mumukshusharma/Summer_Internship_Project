fetch('anime-data.json')
  .then(res => res.json())
  .then(data => {
    const showsContainer = document.getElementById('anime-shows');
    const moviesContainer = document.getElementById('anime-movies');
    const classicContainer = document.getElementById('classic-anime');

    const slugify = title =>
      title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const createCard = anime => {
      const a = document.createElement('a');
      a.href = `anime.html?id=${slugify(anime.title)}`;
      a.className = 'card';
      a.innerHTML = `
        <img src="${anime.imgSrc}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        <p>${anime.genre}</p>
        <span class="watch-button">Watch Now</span>
      `;
      return a;
    };

    data.forEach(anime => {
      if (anime.category === "Show") showsContainer.appendChild(createCard(anime));
      else if (anime.category === "Movie") moviesContainer.appendChild(createCard(anime));
      else if (anime.category === "Classic") classicContainer.appendChild(createCard(anime));
    });
  })
  .catch(err => {
    console.error("Error loading anime data:", err);
  });
