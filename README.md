# Cylinder webpage — Final guidelines

This is a responsive webpage with four blocks:

1. Heading and two explanatory paragraphs.
2. Cylinder tank image (150 px high) and Pixabay credit link.
3. Cylinder volume diagram (150 px high).
4. Radius / height / unit form and live JavaScript result.

At widths below **576 px**, the blocks stack vertically. Starting at **576 px**, the last three blocks appear in three columns.

## How to run

Open **index.html** (or **cylinder.html**) in your web browser. Keep the CSS, JS and `asset` folder in their original locations.

## Test examples

- Radius 5, height 10, unit `cm` => **Volume = 785.40 cm³**
- Radius 20, height 50, unit `mm` => **Volume = 62.83 cm³**

The formula is `volume = Math.PI * radius * radius * height`, where all lengths are converted to centimeters before calculation.
