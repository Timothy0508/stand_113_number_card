# Stand Number Card

A simple web application that displays a number passed via URL parameter on a card, with the ability to export as a PNG image.

## Description

This project creates a clean, responsive card that displays a number passed through the URL. It's particularly useful for queue management systems, event check-ins, or any scenario where you need to display a unique number to a user. The app includes functionality to export the card as a PNG image.

## Features

- Displays a number passed via URL parameter
- Export the card as a PNG image with a single click
- Responsive design works on mobile and desktop
- Clean, minimal interface

## Usage

1. Host the files on any web server
2. Access the page with a number parameter: `index.html?number=123`
3. The page will display the number "123" on the card
4. Click the "Export as PNG" button to download the card as an image

## File Structure

```
├── index.html        # Main HTML file with page structure
├── styles/
│   └── style.css     # CSS styling for the card and page
├── scripts/
│   └── script.js     # JavaScript to handle URL parameter retrieval and image export
└── README.md         # This file
```

## How It Works

The application uses JavaScript to retrieve the 'number' parameter from the URL. When the page loads, it extracts this parameter and updates the card to display the number.

The export functionality uses the html2canvas library to convert the HTML card element to a canvas, which is then exported as a PNG image.

## Dependencies

- html2canvas (1.4.1) - Used for converting HTML elements to canvas for image export

## Customization

You can easily customize the appearance by modifying the CSS in `styles/style.css`. The card uses a green header by default, but you can change colors, sizes, and fonts to match your requirements.

## License

© 2023 My Web Page. All rights reserved.