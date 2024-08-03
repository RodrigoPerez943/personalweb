window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};

// Función para cerrar el popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }