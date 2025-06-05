const html = document.documentElement;
const themeTaggler = document.getElementById("theme-taggler");
const theme = localStorage.getItem("theme");
document.getElementById("year").textContent=new Date().getFullYear()

if (theme) {
  html.dataset.theme = theme;
  themeTaggler.checked = html.dataset.theme == "synthwave" ? true : false;
}

themeTaggler.addEventListener("click", () => {
  html.dataset.theme =
    html.dataset.theme == "halloween" ? "synthwave" : "halloween";
  localStorage.setItem("theme", html.dataset.theme);
  themeTaggler.checked = html.dataset.theme == "synthwave" ? true : false;
});

const showArgentina = document.getElementById("show-argentina");
const modalArgentina = document.getElementById("modal-argentina");
const closeArgentina = document.getElementById("close-argentina");
const overlay = document.getElementById("overlay");

const addHidden = () => {
  modalArgentina.classList.add("hidden");
  overlay.classList.add("hidden");
};

showArgentina.addEventListener("click", () => {
  modalArgentina.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeArgentina.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

const showGreece = document.getElementById("show-greece");
const modalGreece = document.getElementById("modal-greece");
const closeGreece = document.getElementById("close-greece");

const addHiddenGreece = () => {
  modalGreece.classList.add("hidden");
  overlay.classList.add("hidden");
};

showGreece.addEventListener("click", () => {
  modalGreece.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeGreece.addEventListener("click", addHiddenGreece);

overlay.addEventListener("click", addHiddenGreece);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHiddenGreece();
  }
});

const showNorway = document.getElementById("show-norway");
const modalNorway = document.getElementById("modal-norway");
const closeNorway = document.getElementById("close-norway");

const addHiddenNorway = () => {
  modalNorway.classList.add("hidden");
  overlay.classList.add("hidden");
};

showNorway.addEventListener("click", () => {
  modalNorway.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeNorway.addEventListener("click", addHiddenNorway);

overlay.addEventListener("click", addHiddenNorway);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHiddenNorway();
  }
});

const showThailand = document.getElementById("show-thailand");
const modalThailand = document.getElementById("modal-thailand");
const closeThailand = document.getElementById("close-thailand");

const addHiddenThailand = () => {
  modalThailand.classList.add("hidden");
  overlay.classList.add("hidden");
};

showThailand.addEventListener("click", () => {
  modalThailand.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeThailand.addEventListener("click", addHiddenThailand);

overlay.addEventListener("click", addHiddenThailand);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHiddenThailand();
  }
});
