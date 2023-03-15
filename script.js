const hamburgerMenu = document.querySelector(".hamburger");
const navigationItems = document.querySelector(".navigation-items");
const closeButton = document.querySelector(".close-btn");

const toggleHamburgerMenu = () => {
  if (hamburgerMenu.getAttribute("aria-expanded") == "true") {
    closeMenu();
    return;
  }

  openMenu();
};

/**
 * Arrow function
 */
const openMenu = () => {
  // Hamburger menu
  hamburgerMenu.setAttribute("aria-expanded", true);

  // Navigation items
  navigationItems.classList.add('drawer')
};

const closeMenu = () => {
  // Hamburger menu
  hamburgerMenu.setAttribute("aria-expanded", false);

  // Navigation items
  navigationItems.classList.remove('drawer')
};

hamburgerMenu.addEventListener("click", toggleHamburgerMenu, false);

closeButton.addEventListener("click", closeMenu, false);
