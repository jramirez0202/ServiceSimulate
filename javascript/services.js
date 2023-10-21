import { serviceSuccess } from "./integrations/toastify.js";
// Array de servicios
  let services = [
    {
      id: 1,
      serviceType: 'Desarrollo web',
      priceHour: 10,
      category: 'Programación',
      firstName: 'alguien',
      email: 'user@example.com',
    },
    {
      id: 2,
      serviceType: 'Cálculo de Impuestos',
      priceHour: 20,
      category: 'Contabilidad y Administración',
      firstName: 'alguien',
      email: 'user@example.com',
    },
    {
      id: 3,
      serviceType: 'Construcción de muebles',
      priceHour: 50,
      category: 'Carpintería',
      firstName: 'alguien',
      email: 'user@example.com',
    },
    {
      id: 4,
      serviceType: 'Fabricacion de prendas',
      priceHour: 5,
      category: 'Costura',
      firstName: 'alguien',
      email: 'user@example.com',
    },
    {
      id: 5,
      serviceType: 'Diseño gráfico',
      priceHour: 15,
      category: 'Diseño',
      firstName: 'alguien',
      email: 'user@example.com',
    },
    {
      id: 6,
      serviceType: 'Servicio de limpieza',
      priceHour: 8,
      category: 'Limpieza',
      firstName: 'alguien',
      email: 'user@example.com',
    }
  ];

  console.log(services)

  const serviceSelect = document.getElementById('categorySelect'); // Agrega la referencia al select

  // Formulario
  const serviceForm = document.getElementById('serviceForm');

  serviceForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Obtener los valores de los campos del formulario
    const serviceType = document.querySelector('input[name="serviceType"]').value;
    const priceHour = parseFloat(document.querySelector('input[name="priceHour"]').value);
    const category = document.querySelector('input[name="category"]').value;
    const firstName = document.querySelector('input[name="firstName"]').value;
    const email = document.querySelector('input[name="email"]').value;
  

    if (!serviceType || !priceHour || !category || !firstName || !email) {
      alert('Error: Todos los campos del formulario deben estar completos');
      return;
    }
  
    const newService = {
      serviceType: serviceType,
      priceHour: priceHour,
      category: category,
      firstName: firstName,
      email: email,
      id: services.length + 1
    };
  
    services.push(newService);
    
    serviceForm.reset();
  
    // Añade la nueva opción al select
    const newOption = document.createElement('option');
    newOption.value = newService.id;
    newOption.textContent = newService.category;
    serviceSelect.appendChild(newOption);
  
    serviceSuccess()
  });
  
export default services;



