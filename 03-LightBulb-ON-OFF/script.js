const bulb = document.querySelector('.bulb');
const switchBtn = document.querySelector('.switch i');
switchBtn.addEventListener('click', function() {
    bulb.classList.toggle('on');
    
    if (bulb.classList.contains('on')) {
        switchBtn.classList.replace('fa-toggle-off', 'fa-toggle-on');
    } else {
        switchBtn.classList.replace('fa-toggle-on', 'fa-toggle-off');
    }
});