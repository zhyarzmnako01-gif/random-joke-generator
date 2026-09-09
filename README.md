# Random Joke Generator 🎭

A fun and interactive web application that fetches and displays random jokes from an external API. Built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Features:**
- 🎯 Generate random jokes with a single click
- 🏷️ Filter jokes by category (General, Programming, Knock Knock, or Any)
- 📋 Copy jokes to clipboard
- ⚡ Fast and responsive UI with loading animation
- 📱 Mobile-friendly design
- 🎨 Beautiful gradient background and smooth animations
- 🔄 Real-time API integration with JokeAPI

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations and gradients
- **JavaScript (ES6+)** - Logic and API interaction
- **JokeAPI v2** - External API for jokes

## API Used

**JokeAPI v2** - https://jokeapi.dev/

This API provides random jokes in different categories and types.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/zhyarzmnako01-gif/random-joke-generator.git
cd random-joke-generator
```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a live server (recommended)

## Usage

1. **Select a Category** (Optional):
   - Choose from "Any Category", "General", "Programming", or "Knock Knock"

2. **Get a Joke**:
   - Click the "Get a Joke" button to fetch a random joke
   - A loading spinner will appear while fetching

3. **Copy the Joke**:
   - Click the "Copy" button to copy the joke to your clipboard
   - A confirmation message will appear

4. **Share and Enjoy**:
   - Share the copied joke with friends!

## Project Structure

```
random-joke-generator/
├── index.html      # HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript logic and API calls
└── README.md       # Project documentation
```

## API Response Example

```json
{
  "error": false,
  "category": "Programming",
  "type": "single",
  "joke": "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
  "id": 123
}
```

## Features in Detail

### 1. **Category Filter**
- Any Category: Gets jokes from any category
- General: General jokes
- Programming: Programming and tech jokes
- Knock Knock: Classic knock-knock jokes

### 2. **Responsive Design**
- Desktop: Full layout with side-by-side controls
- Mobile: Stacked layout for smaller screens
- Touch-friendly buttons and inputs

### 3. **Error Handling**
- Network error handling
- API error handling
- User-friendly error messages

### 4. **User Feedback**
- Loading spinner during API calls
- Copy confirmation message
- Disabled buttons while loading

## Customization

### Change the API
To use a different joke API, modify the `JOKES_API` constant in `script.js`:
```javascript
const JOKES_API = 'https://your-api-url';
```

### Modify Colors
Edit the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Categories
Update the `<select>` element in `index.html` with new options.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Author

Created with ❤️ by [zhyarzmnako01-gif](https://github.com/zhyarzmnako01-gif)

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Enjoy the laughs!** 😄