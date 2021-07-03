const canvas = document.getElementById("result");
const ctx = canvas.getContext("2d");
const outputImage = document.getElementById("imgDisplayed");
const uploaded_image = document.getElementById("uploaded__image");
const inputElement = document.getElementById("file");
const outputElement = document.getElementById("resize-file");
const showResults = document.getElementById("Upload");

inputElement.onchange = function () {
  uploaded_image.src = URL.createObjectURL(event.target.files[0]);
};

const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

function prev() {
  const imWidth = document.getElementById("imWidth").value;
  const imHeight = document.getElementById("imHeight").value;

  canvas.width = imWidth;
  canvas.height = imHeight;

  ctx.drawImage(outputImage, 0, 0, imWidth, imHeight);

  form = document.querySelector("form");
  form.reset();
}
outputImage.src = URL.createObjectURL(event.target.files[0]);

const down = document.querySelector("#down");
down.addEventListener("click", downloadImage);

function downloadImage() {
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "resizedImage.png");
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();

    a.download = "resizedImage.png";
    a.click();

    document.body.removeChild(a);
  }

  window.location.reload();
}
