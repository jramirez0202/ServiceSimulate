import { simulatePriceHours } from './serviceSimulator.js';
const serviceShown = new Set();
const reloadButton = document.getElementById('reloadButton');
const submitHours = document.querySelector('#submitHours');


// refresh sessionStorage
reloadButton.addEventListener('click', function() {
  const userConfirmed = confirm("¿Desea eliminar los registros?");
  if (userConfirmed) {
    location.reload();
  }
});

//instructions modal //

  // Define las funciones open y close
  function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    } else {
      console.error("Modal not found: " + modalId);
    }
  }
  
  function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    } else {
      console.error("Modal not found: " + modalId);
    }
  }
  
  // Agrega un evento de clic al botón que abre el modal
  document.getElementById("openMediumModal").addEventListener("click", function () {
    openModal("medium-modal");
  });
  
  // Agrega un evento de clic a los botones que abren y cierran los modales
  document.addEventListener("click", function (e) {
    if (e.target && e.target.getAttribute("data-modal-toggle")) {
      openModal(e.target.getAttribute("data-modal-toggle"));
    }
    if (e.target && e.target.getAttribute("data-modal-hide")) {
      closeModal(e.target.getAttribute("data-modal-hide"));
    }
  });


  // Modal create service //
// Abre el modal al hacer clic en el botón "Formulario"
document.getElementById("openServiceForm").addEventListener("click", function () {
  document.getElementById("formModal").style.display = "block";
});

// Cierra el modal al hacer clic en la "X"
document.getElementById("closeServiceForm").addEventListener("click", function () {
  document.getElementById("formModal").style.display = "none";
});

// Cierra el modal si se hace clic fuera del modal
window.onclick = function (event) {
  let modal = document.getElementById("formModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Historial de servicio //

// create elements and show in DOM //
function createAndAppend(parent, text) {
  const element = document.createElement('p');
  element.textContent = text;
  parent.appendChild(element);
}

function createInfoCard() {
  const infoCard = document.createElement('div');
  infoCard.classList.add('info-card');
  return infoCard;
}

function showServiceInfo(quotes) {
  const quoteContainer = document.getElementById('quoteContainer');
  const infoCard = createInfoCard();
  //esta modificacion haceque se muestren los servicios mas recientes primero 
  quoteContainer.insertBefore(infoCard, quoteContainer.firstChild);

  createAndAppend(infoCard, `Servicio: ${quotes.showKindService}`);
  createAndAppend(infoCard, `Cantidad de Horas: ${quotes.numHours}`);
  createAndAppend(infoCard, `Precio Total: $${quotes.totalPrice}`);
}

// Define un conjunto para almacenar los servicios mostrados

const displayQuoteInfo = () => {
  const totalPrice = simulatePriceHours(); // Calcular el precio total
  console.log(`Total Prices: $${totalPrice}`);

  const getServiceSimulate = sessionStorage.getItem('quoteService');
  if (getServiceSimulate) {
    const quotes = JSON.parse(getServiceSimulate);

    // Verifica si el servicio ya se mostró previamente
    if (!serviceShown.has(quotes.totalPrice)) {
      // Agrega el servicio al conjunto de servicios mostrados
      serviceShown.add(quotes.totalPrice);

      // Muestra el servicio
      showServiceInfo(quotes);
    }
  } else {
    alert("Error al crear servicio");
  }
}

// form Create service //





// Calculate Event  //
submitHours.addEventListener('click', displayQuoteInfo);




