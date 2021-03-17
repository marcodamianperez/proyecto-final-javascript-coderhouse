const vehicleTypeContainer = document.getElementById('vehicleTypeContainer');
vehicleTypeContainer.addEventListener('click', e => {
    localStorage.clear();
    if (e.target.classList.contains('cars')) {
        localStorage.setItem('type', 'auto')
    } else if (e.target.classList.contains('pickups')) {
        localStorage.setItem('type', 'utilitario')
    } else if (e.target.classList.contains('bikes')) {
        localStorage.setItem('type', 'moto')
    }
});