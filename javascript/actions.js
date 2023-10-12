import { simulatePriceHours } from './serviceSimulator.js';
const serviceShown = new Set();
const reloadButton = document.getElementById('reloadButton');
const darkMode = document.getElementById('darkMode');
// let tryMe = document.getElementById('tryMe');
// events //
// Calcula la suma de 2 numeros ///
// let click = document.getElementById('clickMe')

// const calculate = (a, b) => {
//   const suma = a + b
// console.log(suma)
// };

// click.addEventListener('click', () => {
//   calculate(1,2)
// })


// refresh sessionStorage
reloadButton.addEventListener('click', function() {
  const userConfirmed = confirm("¿Desea eliminar los registros?");
  if (userConfirmed) {
    location.reload();
  }
});

// genera un numero random entre 1 y 100 //
// function generarNumeroAleatorio() {
//   const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//   console.log(numeroAleatorio);
// }

// function clearAndReplace() {
//   console.clear();
//   generarNumeroAleatorio();
// }

// Change Dark mode ///

function response() {
  const body = document.body
  if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode')
      darkMode.textContent ='Dark Mode'
  } else {
    body.classList.add('dark-mode')
    darkMode.textContent= 'Ligth Mode'
  }
}

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

// Calculate Event  //
submitHours.addEventListener('click', displayQuoteInfo);
// tryMe.addEventListener('click', clearAndReplace);
darkMode.addEventListener('click', response)


let p = new Promise((resolve, reject) => {
    let sum = 1 + 1
  if(sum == 2) {
    resolve('Successs')
  } else {
    reject('Failed')
  }
})



p.then((message) => {
  console.log("Esto es positivo " + message)
}).catch((message) => {
  console.log('this is the catch ' + message)
})



