const colors = document.querySelectorAll(".color-circle");
const selectedColor = document.getElementById("selectedColor");

colors.forEach(color=>{
  color.addEventListener("click", ()=>{
    colors.forEach(c=>c.classList.remove("active"));
    color.classList.add("active");
    selectedColor.value = color.dataset.color;
  });
});
