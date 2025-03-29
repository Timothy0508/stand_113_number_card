# Stand Number Card

A simple web application that displays a number passed via URL parameter on a card.

## Description

This project creates a clean, responsive card that displays a number passed through the URL. It's particularly useful for queue management systems, event check-ins, or any scenario where you need to display a unique number to a user.

## Features

- Displays a number passed via URL parameter
- Responsive design works on mobile and desktop
- Clean, minimal interface

## Usage

1. Host the files on any web server
2. Access the page with a number parameter: `index.html?number=123`
3. The page will display the number "123" on the card

## File Structure

```
├── index.html        # Main HTML file with page structure
├── styles/
│   └── style.css     # CSS styling for the card and page
├── scripts/
│   └── script.js     # JavaScript to handle URL parameter retrieval
└── README.md         # This file
```

## How It Works

The application uses JavaScript to retrieve the 'number' parameter from the URL. When the page loads, it extracts this parameter and updates the card to display the number.

## Customization

You can easily customize the appearance by modifying the CSS in `styles/style.css`. The card uses a green header by default, but you can change colors, sizes, and fonts to match your requirements.

## Dependencies

No external dependencies - this is a vanilla HTML, CSS, and JavaScript project.

## License

© 2023 Timothy0508. All rights reserved.
