const allSections = [...document.querySelectorAll("section")];
const unOrderedList = document.querySelector("ul");
const container = document.createDocumentFragment();

const createNavList = (() => {
  allSections.forEach((section) => {
    const sectionElemnent = document.createElement("li");
    const linkElement = document.createElement("a");
    const sectionAddress = section.getAttribute("data-nav");
    const linkElementA = section.getAttribute("id");
    linkElement.href = `#${linkElementA}`;
    
    linkElement.classList.add("menu__link");
    linkElement.textContent = sectionAddress;
    
    linkElement.addEventListener(
      "click",
      (evt) => {
        section.scrollIntoView({
          behavior: "smooth",
        });
       
        evt.preventDefault();
      },
      false
    );
    sectionElemnent.appendChild(linkElement);
    container.appendChild(sectionElemnent);
  });
})();
unOrderedList.appendChild(container);

const links = document.querySelectorAll("a");
window.addEventListener("scroll", (event) => {
  for (const section of allSections) {
    let sectionInView = section.getBoundingClientRect().top;
    if (sectionInView >= 0 && sectionInView <= 350) {
      section.classList.add("your-active-class");
      for (let link of links) {
        link.classList.remove("your-active-class");
        if (link.textContent === section.dataset.nav) {
          link.classList.add("your-active-class");
        } else {
          link.classList.remove("your-active-class");
        }
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
});

function hamburger() {
  const hambMenu = document.getElementById("navbar__list");
  hambMenu.classList.add("navlist");
  if (hambMenu.className === "navlist") {
    hambMenu.className += " responsive";
  } else {
    hambMenu.className = "navlist";
  }
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
