import services from "../javascript/services.js";
  const serviceSelect = document.getElementById('serviceSelect');
  const priceHour = document.getElementById('priceHour');
  const inputHours = document.getElementById('hours');
  const kindService = document.getElementById('kindService');
  const errorMessage = document.getElementById('errorMessage');
  const result = document.getElementById("simulatePrice");



  // Agregar opciones al elemento select
  services.forEach(service => {
    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.category;
    
    serviceSelect.appendChild(option);
  });


  let selectedServicePrice = 0; // Variable para almacenar el precio del servicio seleccionado
  let showKindService = ""

  function serviceId() {
    result.textContent = ""  
    const selectedServiceId = parseInt(serviceSelect.value);
    // find service //
    const selectedService = services.find(service => service.id === selectedServiceId);

    if (selectedService) {
      // Actualizar el contenido del precio por hora
      selectedServicePrice = selectedService.priceHour;
      showKindService = selectedService.serviceType
      priceHour.textContent = `Precio por Hora: $${selectedServicePrice}`; // extrae la hora del objeto//
      kindService.textContent = `Servicio: ${showKindService}`;
      inputHours.value = ''; // elimino el valor del input al cambiar de servicio//
      
    } else {
      priceHour.textContent = '';
      inputHours.value = '';
      showKindService = '';
      return 0;
    }
  }
  export const simulatePriceHours = () => {
    errorMessage.textContent = "";
    console.clear("");
    const numHours = Math.floor(parseInt(inputHours.value));

    // Validacion + Convertir el objeto en una cadena JSON y guardarlo en el storage //
    if (!isNaN(numHours) && !isNaN(selectedServicePrice) && (numHours >= 1)) {
      const totalPrice = selectedServicePrice * numHours;
      result.textContent = `El costo total por ${numHours}H del servicio ${showKindService} es de $${totalPrice}`;
      
      const quotes = {
        showKindService: showKindService,
        numHours: numHours,
        totalPrice: totalPrice
      };
      const quotesJSON = JSON.stringify(quotes);
      sessionStorage.setItem('quoteService', quotesJSON);
  
      return totalPrice;
    } else {
      result.textContent = "";
      errorMessage.textContent = "Las horas no pueden ser cero ni negativas";
      return 0;
    }
  }

  // Llama a la función para actualizar la información del servicio al cargar la página
  serviceId();
  
  // Agrega un evento de cambio al elemento select para que se actualice la información al seleccionar un servicio
  serviceSelect.addEventListener('change', serviceId);



