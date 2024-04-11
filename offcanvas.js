document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            768: {
                perView: 2
            },
            576: {
                perView: 1
            }
        }
    }).mount();
});



// offcanvas.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const offcanvas = document.getElementById('offcanvas');
    const closeBtn = document.getElementById('close-btn');

    
    menuToggle.addEventListener('click', function() {
        offcanvas.classList.toggle('active');
    });

    
    closeBtn.addEventListener('click', function() {
        offcanvas.classList.remove('active');
    });
});
