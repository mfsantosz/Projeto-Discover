function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
     //se tiver no light mode, trocar a imagem
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver no dark mode, manter a imagem
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}