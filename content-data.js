const animeShows = [
  {
    id: 1,
    title: 'Naruto',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX680_.jpg',
    description: 'Follow the journey of Naruto Uzumaki'
  },
  {
    id: 2,
    title: 'Attack on Titan',
    imgSrc: 'https://images-cdn.ubuy.co.id/63b6146ddecbee137603e92a-attack-on-titan-24-x-36-poster-by-movie.jpg',
    description: 'The fight against the titans begins'
  },
  {
    id: 3,
    title: 'One Piece',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg',
    description: 'Join Luffy on his quest for the One Piece'
  },
  {
    id: 4,
    title: 'Demon Slayer',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg',
    description: 'Tanjiro Kamado battles demons to save his sister'
  },
  {
    id: 5,
    title: 'Mob Psycho 100',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    description: 'A dynamic tale of a young psychic quest for self-discovery and inner strength'
  }
];

  
 const animeMovies = [
  {
    id: 6,
    title: 'Spirited Away',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'A magical journey into a mysterious world'
  },
  {
    id: 7,
    title: 'Your Name',
    imgSrc: 'https://picfiles.alphacoders.com/504/50493.jpg',
    description: 'A beautiful tale of two strangers whose lives are mysteriously linked'
  },
  {
    id: 8,
    title: 'Weathering with You',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106286-5COcpd0J9VbL.png',
    description: 'Weathering with You is a lyrical journey where love’s light intertwines with the storm, reshaping the world’s skies'
  },
  {
    id: 9,
    title: '5 Centimeters per Second',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BODVmZjhhYTYtYzRiOC00YzFiLThlZjMtZTQxNWY0MTI1MzlmXkEyXkFqcGc@._V1_FMjpg_UX739_.jpg',
    description: 'A poignant tale of love and separation, where time drifts like falling petals.'
  },
  {
    id: 10,
    title: 'Grave of the Fireflies',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    description: 'A tender, haunting tale of innocence lost amidst the darkness of war'
  },
  {
    id: 11,
    title: 'Howls Moving Castle',
    imgSrc: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/howls_moving_castle_1_9.png',
    description: 'A tender, haunting tale of innocence lost amidst the darkness of war'
  }
];

  const classicAnime = [
  {
    id: 12,
    title: 'Dragon Ball Z',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx813-ZhnFNOeCU5dQ.png',
    description: 'Goku defends Earth from formidable foes across the galaxy.'
  },
  {
    id: 13,
    title: 'Neon Genesis Evangelion',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx30-AI1zr74Dh4ye.jpg',
    description: 'A deep psychological mecha drama set in a post-apocalyptic world.'
  },
  {
    id: 14,
    title: 'Cowboy Bebop',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-GCsPm7waJ4kS.png',
    description: 'Space bounty hunters chasing criminals while confronting their pasts.'
  },
  {
    id: 15,
    title: 'Bleach',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-d2GmRkJbMopq.png',
    description: 'Ichigo Kurosaki becomes a Soul Reaper and fights against deadly spirits known as Hollows.'
  },
  {
    id: 16,
    title: 'Hunter x Hunter (1999)',
    imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136-gj0bbCpDNrKG.jpg',
    description: 'Gon Freecss sets off to become a Hunter and find his father while facing deadly trials.'
  }
];


  const animeShowsGrid = document.getElementById('anime-shows');
  const animeMoviesGrid = document.getElementById('anime-movies');
  const classicAnimeGrid = document.getElementById('classic-anime');

  
  function loadAnimeContent(contentArray, targetGrid) {
  contentArray.forEach(content => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${content.imgSrc}" alt="${content.title}">
      <h3>${content.title}</h3>
      <p>${content.description}</p>
      <button onclick="viewDetails(${content.id})">More Info</button>
    `;
    targetGrid.appendChild(card);
  });
}

function viewDetails(id) {
  localStorage.setItem("selectedAnimeId", id);
  window.location.href = "anime.html";
}


  
  loadAnimeContent(animeShows, animeShowsGrid);
  loadAnimeContent(animeMovies, animeMoviesGrid);
  loadAnimeContent(classicAnime, classicAnimeGrid);

  