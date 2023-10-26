export const serviceSuccess = () => {
  Toastify({
    text: "Servicio Agregado con Exito",
    duration: 3000,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}
const darkModeAlert = () => {
  // Lógica para mostrar la alerta de modo oscuro
  Toastify({
      text: "Modo oscuro activado",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #667db6, #0082c8)"
      },
  }).showToast();
  
}

const darkModeButtons = document.getElementById("darkMode-button");
darkModeButtons.addEventListener("click", darkModeAlert);

