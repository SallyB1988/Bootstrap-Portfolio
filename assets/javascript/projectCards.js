class Project {
  constructor(name, imageMain, imageOverlay, link) {
    this.name = name;
    this.imageMain = imageMain;
    this.imageOverlay = imageOverlay;
    this.link = link
  }
}

const projects = [
  new Project("Hangman Game", "./assets/images/hangman.jpg", "./assets/images/hangman6.jpg", "https://sallyb1988.github.io/word-guess-game/"),
  new Project("Treasure Game", "./assets/images/TreasureGame1.png", "./assets/images/TreasureGame2.png", "https://sallyb1988.github.io/unit-4-game/"),
  new Project("Mario Attack", "./assets/images/mario-sml-1.jpg", "./assets/images/mario-sml-2.jpg", "https://sallyb1988.github.io/mario-attack/"),
  new Project("Giphy Finder", "./assets/images/giphy_square1.jpg", "./assets/images/giphy_square2.jpg", "https://sallyb1988.github.io/giphy-finder/"),
  new Project("Trivia Game", "./assets/images/Trivia_square1.png", "./assets/images/Trivia_square2.png", "https://sallyb1988.github.io/TriviaGame/"),
  new Project("Train Depot", "./assets/images/train_square1.jpg", "./assets/images/train_square2.jpg", "https://sallyb1988.github.io/train-schedule/"),
  new Project("Recipe Finder", "./assets/images/ftm_logo.png", "./assets/images/ftm_logo.png", "https://sallyb1988.github.io/RecipeFinder/"),
]


$(function() {

  // HTML for generic section containing a card with a link, title, and alternate hover image
  const genCardHTML = (p) => {
    console.log(p);
    const item = `
      <div class="col-lg-3 col-md-6 d-flex justify-content-around my-lg-3  my-1" >
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img
              class="portfolio-image"
              src=${p.imageMain}
            />
            <div class="spb-overlay">
              <a href="${p.link}">
                <img
                  class="portfolio-image"
                  src=${p.imageOverlay}
                  alt="${p.name}"
                />
              </a>
            </div>
          </div>
          <p class="portfolio-image-titlebar">${p.name}</p>
        </div>
      </div> `;

      return item;

  };

  const populateProjectArea = () => {
    const $projectArea = $("#project-area");
    $projectArea.empty();
    projects.map((p) => {
      $projectArea.append(genCardHTML(p))
    })
  }

  populateProjectArea();
});

