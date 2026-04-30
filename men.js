const pro = document.getElementById("product");
const cate = document.getElementById("categorias");
pro.addEventListener("mouseout", () => {
  cate.classList.remove(" font-extrabold");
});

pro.addEventListener("mouseenter", () => {
  cate.classList.add("font-extrabold");
});
