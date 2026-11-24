const text = document.getElementById("text");
const list = document.getElementById("list");
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = text.value.trim();
  if (!v) return;
  const li = document.createElement("li");
  li.textContent = v;
  list.appendChild(li);
  text.value = "";
});
