// show dropdown responsive////
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-user"]');
const menu = document.querySelector('#navbar-user');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Change Dark mode ///

function toggleDarkMode() {
  const body = document.body;
  const darkModeButton = document.getElementById('darkMode');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.add('dark-mode');
    darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
  }
}
const darkModeButton = document.getElementById('darkMode');
darkModeButton.addEventListener('click', toggleDarkMode);