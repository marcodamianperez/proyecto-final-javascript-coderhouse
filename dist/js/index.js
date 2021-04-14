$('#vehicleTypeContainer').click(e => {
    localStorage.clear();
    if (e.target.classList.contains('cars')) {
        localStorage.setItem('type', 'car')
    } else if (e.target.classList.contains('pickups')) {
        localStorage.setItem('type', 'pickup')
    } else if (e.target.classList.contains('bikes')) {
        localStorage.setItem('type', 'motorcycle')
    }
});