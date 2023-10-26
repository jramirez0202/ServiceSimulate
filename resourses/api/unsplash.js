
const accessKey = 'ycpCAJCjnTDsI2q516ShJeItUZ4DuFXjejvrQtIJc2s';
let page = 1;
let inputData = 'freelance';

async function searchImages() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  results.forEach((image, index) => {
    // Obtén la tarjeta correspondiente por su ID
    const card = document.getElementById(`card${index + 1}`);

    // Crea una nueva imagen para cada resultado
    if (card) {
      // Crea una nueva imagen para cada resultado

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container'); // Asigna la clase

      // Crea una nueva imagen
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description;
  
      imageContainer.appendChild(imgElement);

      // Agrega el div contenedor a la tarjeta
      card.appendChild(imageContainer);
  
      if (image.description) {
        // Crea un título si hay una descripción disponible
        // const titleElement = document.createElement('h1');
        // titleElement.textContent = image.description;
        card.appendChild(titleElement);
      }
    }
  });
}

// Llama a la función para buscar imágenes
searchImages();
