const imgContainer = document.querySelector(".picture-container");

for (let i = 0; i < pictures.length; i++) {
  let currentImage = document.createElement("img");
  currentImage.src = pictures[i].urls.regular;
  currentImage.setAttribute("alt", pictures[i].alt_description);
  imgContainer.appendChild(currentImage);
}
