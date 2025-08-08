
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


const apiKey = 'YOUR_API_KEY';

async function searchMusic(query) {
    const url = `https://api.musixmatch.com/ws/1.1/track.search?q=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        error('Error fetching data:', error);
    }
}

searchButton.addEventListener('click', () => {
    const search = searchInput.value.trim();
    if (search) {
        searchMusic(search);
    } else {
        Error('Invalid query (song, artist, or album).');
    }
});