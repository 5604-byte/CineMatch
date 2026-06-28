const button = document.getElementById("randomBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    const selectedGenre = document.getElementById("genre").value;

    const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);

    const randomIndex = Math.floor(Math.random() * filteredMovies.length);

    const movie = filteredMovies[randomIndex];

    result.innerHTML = `
        <div style="margin-top:30px;background:#222;padding:20px;border-radius:15px;">
            <h2>🎬 ${movie.title}</h2>

            <p>🎭 ${movie.genre}</p>

            <p>⭐ ${movie.rating}</p>

            <p>📅 ${movie.year}</p>

            <p>📺 ${movie.platform}</p>

            <p>${movie.synopsis}</p>
        </div>
    `;

});