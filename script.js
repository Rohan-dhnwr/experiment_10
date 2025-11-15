document.getElementById("loadAnime").addEventListener("click", fetchAnime);

function fetchAnime() {
    fetch("https://api.jikan.moe/v4/top/anime")
        .then(response => response.json())
        .then(data => displayAnime(data.data))
        .catch(error => console.log("Error:", error));
}

function displayAnime(animeList) {
    const container = document.getElementById("animeList");
    container.innerHTML = ""; // clear previous

    animeList.slice(0, 6).forEach(anime => {   // show 6 anime only
        const card = document.createElement("div");
        card.className = "anime-card";

        card.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="Anime Image">
            <h3>${anime.title}</h3>
            <p><strong>Type:</strong> ${anime.type}</p>
            <p><strong>Episodes:</strong> ${anime.episodes}</p>
            <p><strong>Score:</strong> ⭐ ${anime.score}</p>
        `;

        container.appendChild(card);
    });
}
