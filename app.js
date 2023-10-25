const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  //Active button
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  }

  //Active section
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  /*Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });*/

  //Change theme
  const themeBtn = document.querySelector(".theme-btn");
  const themes = ["light-mode", "dark-mode", "green-mode"];
  let currentThemeIndex = 2;

  themeBtn.addEventListener("click", () => {
    const element = document.body;

    // Remove the current theme class
    element.classList.remove(themes[currentThemeIndex]);

    // Increment the theme index and wrap it around if it exceeds the array length
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Add the new theme class
    element.classList.add(themes[currentThemeIndex]);
  });
}

pageTransitions();
