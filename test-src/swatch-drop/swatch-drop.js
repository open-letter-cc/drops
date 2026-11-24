const colours = ["#B5332E", "#E07A2E", "#E0C22E", "#5AA34A", "#2E7DB5", "#6A4AB5", "#B54A8F", "#7A7A7A"];
const grid = document.getElementById("grid");
const hex = document.getElementById("hex");
for (const c of colours) {
  const b = document.createElement("button");
  b.type = "button";
  b.style.background = c;
  b.setAttribute("aria-label", c);
  b.addEventListener("click", () => {
    for (const o of grid.children) o.classList.remove("chosen");
    b.classList.add("chosen");
    hex.textContent = c;
  });
  grid.appendChild(b);
}
