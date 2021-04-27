$('#vehicleTypeContainer').click(e => {
    //localStorage.clear();
    if (e.target.classList.contains('cars')) {
        localStorage.setItem('type', 'Cars')
    } else if (e.target.classList.contains('pickups')) {
        localStorage.setItem('type', 'Pickups')
    } else if (e.target.classList.contains('bikes')) {
        localStorage.setItem('type', 'Motorcycles')
    }
});

$(document).ready(function () {
    $('body').fadeIn('slow');
});