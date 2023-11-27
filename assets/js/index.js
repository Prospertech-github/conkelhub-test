/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 480) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.querySelector(".nav");
  // const header = document.querySelector(".header");
  // var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
}

window.addEventListener("scroll", scrollHeader);

/*==================== TOGGLE MENU MOBILE ====================*/
const navMenu = document.querySelector(".nav-menu");

function toggleMenu() {
  navMenu.classList.toggle("toggle-nav-menu");
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nml");

function linkAction() {
  const navMenu = document.querySelector(".nav-menu");
  // When we click on each nav__link, we remove the toggle-nav-menu class
  navMenu.classList.remove("toggle-nav-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== TOGGLE FAQs ====================*/
const fqc = document.querySelectorAll(".fqc");
const fArrow = document.querySelectorAll("#fqc-arrow");

fqc.forEach((work) => {
  work.addEventListener("click", () => {
    fqc.forEach((item) => {
      item != work && item.classList.remove("active");
    });

    work.classList.toggle("active");

    fArrow.forEach((fitem) => {
      fitem.classList.remove("fqc-arrow-active");
    });

    fArrow[index].classList.add("fqc-arrow-active");
  });
});

/* ------------- TOGGLE EVENTS ------------- */
const sTab = document.querySelectorAll(".sct");
const sCard = document.querySelectorAll(".sc");

// Add a click event listener to each sidebar element
sTab.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar elements
    sTab.forEach((tab) => {
      tab.classList.remove("sct-active");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("sct-active");

    // Remove active class from all containers
    sCard.forEach((card) => {
      card.classList.remove("sc-active");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    sCard[index].classList.add("sc-active");
  });
});

/*==================== TOGGLE MODAL ====================*/

const modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("toggle-modal");
}
