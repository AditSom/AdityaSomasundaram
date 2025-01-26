// Add global styles dynamically
const style = document.createElement("style");
style.textContent = `
  .section-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .figure-template {
    width: 4in;
    text-align: center;
  }

  .figure-template img {
    max-width: 100%;
    height: auto;
  }

  .figure-template .title {
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
  }

  .figure-template figcaption {
    font-size: 16px;
    color: #555;
    margin-top: 8px;
  }
`;

// Append the style element to the document
document.head.appendChild(style);

// Function to create a new GIF section
function addGifSection(title, gifUrl, caption) {
  const sectionContainer = document.getElementById("sectionContainer");

  // Create a new figure element
  const figure = document.createElement("figure");
  figure.classList.add("figure-template");

  // Add the title
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerText = title;

  // Add the GIF
  const gifImg = document.createElement("img");
  gifImg.src = gifUrl;
  gifImg.alt = title;

  // Add the caption
  const captionElement = document.createElement("figcaption");
  captionElement.innerText = caption;

  // Append elements to the figure
  figure.appendChild(titleDiv);
  figure.appendChild(gifImg);
  figure.appendChild(captionElement);

  // Append figure to the container
  sectionContainer.appendChild(figure);
}

// Example usage
addGifSection(
  "Unusual for my style of play",
  "https://raw.githubusercontent.com/AditSom/AdityaSomasundaram/main/assets/img/chess/game%201.gif",
  "Although my usual game is grind out and play closed until my opponent slips up, I really did enjoy taking this attack on. To be fair I am playing 500 elo below my peak so..."
);

addGifSection(
  "2.e5 with a beautiful attack!",
  "https://raw.githubusercontent.com/AditSom/AdityaSomasundaram/main/assets/img/chess/game%202.gif",
  "Similar to the previous game, I ended up opening the position and attacking. Not sure what the thought process was behind hanging the rook on a8?? Although I missed the Nxb5 idea, cramming his pieces together and mating the black king was very satisfying. I think I'll study 2.e5 more!"
);
