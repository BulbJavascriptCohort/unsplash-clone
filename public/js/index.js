const imgContainer = document.querySelector(".picture-container");

for (let i = 0; i < pictures.length; i++) {
  let listItem = document.createElement("li");
  let currentImage = document.createElement("img");
  currentImage.src = pictures[i].urls.regular;
  currentImage.setAttribute("alt", pictures[i].alt_description);
  listItem.appendChild(currentImage);
  imgContainer.appendChild(listItem);
}
