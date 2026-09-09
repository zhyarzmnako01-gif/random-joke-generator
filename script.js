// API Configuration
const JOKES_API = 'https://v2.jokeapi.dev/joke';

// DOM Elements
const getJokeBtn = document.getElementById('getJokeBtn');
const copyBtn = document.getElementById('copyBtn');
const jokeText = document.getElementById('jokeText');
const jokeDisplay = document.getElementById('jokeDisplay');
const loadingSpinner = document.getElementById('loadingSpinner');
const categorySelect = document.getElementById('categorySelect');
const jokeType = document.getElementById('jokeType');
const jokeId = document.getElementById('jokeId');

// Event Listeners
getJokeBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyToClipboard);

// Fetch Joke from API
async function fetchJoke() {
    const category = categorySelect.value;
    
    // Show loading spinner
    loadingSpinner.style.display = 'flex';
    loadingSpinner.style.flexDirection = 'column';
    jokeDisplay.style.display = 'none';
    getJokeBtn.disabled = true;
    copyBtn.disabled = true;

    try {
        // Build the API URL
        let url = JOKES_API;
        if (category !== 'any') {
            url += `/${category}`;
        } else {
            url += '/Any';
        }
        url += '?type=single';

        // Fetch the joke
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            jokeText.textContent = 'Could not fetch a joke. Please try again!';
        } else {
            // Display the joke
            jokeText.textContent = data.joke;
            jokeType.textContent = `📁 Category: ${data.category}`;
            jokeId.textContent = `🆔 ID: ${data.id}`;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeText.textContent = 'Oops! Could not load a joke. Please check your internet connection and try again!';
        jokeType.textContent = '';
        jokeId.textContent = '';
    } finally {
        // Hide loading spinner and show joke
        loadingSpinner.style.display = 'none';
        jokeDisplay.style.display = 'flex';
        getJokeBtn.disabled = false;
        copyBtn.disabled = false;
    }
}

// Copy Joke to Clipboard
function copyToClipboard() {
    const text = jokeText.textContent;
    
    if (text === 'Click "Get a Joke" to start!' || text.includes('Could not')) {
        alert('Please get a joke first!');
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard');
    });
}

// Load a joke on page load
window.addEventListener('load', () => {
    fetchJoke();
});