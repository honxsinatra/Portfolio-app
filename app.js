const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  //Function to handle the changes of className of the clicked button
  function handleClick() {
    let currentBtn = document.querySelectorAll(".active-btn");
    currentBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
  }
  //Active button
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", handleClick);
  }

  //Active section
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      sections.forEach((sections) => {
        sections.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTransitions();
