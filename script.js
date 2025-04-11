let popup = document.querySelectorAll('[popup]'),
    overlay = document.querySelector('#overlay'),
    modal = document.querySelector('#modal'),
    contactForm = document.querySelector('[contact-form]'),
    contactName = document.querySelector('[contact-name]'),
    contactEmail = document.querySelector('[contact-email]'),
    contactMessage = document.querySelector('[contact-message]'),
    contactSuccessMessage = document.querySelector('#contact-success-message'),
    closeSuccessMessage = document.querySelector('[close-success-message]');

popup.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        if(overlay.classList.contains('active')) {   
            overlay.classList.toggle('hidden');
            overlay.classList.toggle('active');
            modal.classList.toggle('active');
        } else {
            overlay.classList.toggle('hidden');
            overlay.classList.toggle('active');
            setTimeout(() => {
                modal.classList.toggle('active');
            }, 1000);
        }
    });
});

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelector('#user-name').textContent = contactName.value; 

    modal.classList.toggle('active');

    setTimeout(function() {
    contactSuccessMessage.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    contactSuccessMessage.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    }, 400);
});

closeSuccessMessage.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('active');
    contactSuccessMessage.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    contactSuccessMessage.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
});
