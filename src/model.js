import home from "./pages/home.js";
import shop from "./pages/shop.js";
import guides from "./pages/guides.js";
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import login from "./pages/login.js";
import signup from "./pages/signup.js";

const pages = { home, shop, guides, about, contact, login, signup };

export function loadPage(pageID) {
  const selectedPage = pages[pageID] || pages.home;
  document.querySelector("#app").innerHTML = selectedPage();
  window.scrollTo(0, 0);
}

export function getPageID() {
  const pageID = window.location.hash.replace("#", "");
  return pages[pageID] ? pageID : "home";
}
