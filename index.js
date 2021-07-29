//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//SCROLL HOME
sr.reveal( '.img_container', {});
sr.reveal('.scroll-p',{delay: 200});
sr.reveal('.title',{delay: 200});
sr.reveal('.date_container', {delay: 200});

//RULES SCROLL
sr.reveal('.number-item-1', {delay:100});
sr.reveal('.number-item-2', {delay:200});
sr.reveal('.number-item-3', {delay:300});
sr.reveal('.white-box', {delay:600});


//SCROLL CATEGORIES 
sr.reveal('.categories_container', {interval:200});

//SCROLL FORMS
sr.reveal('.form-white-box-1', {delay: 200});
sr.reveal('.form-white-box-2',{delay:400});
sr.reveal('.form-white-box-3', {delay: 500});
sr.reveal('.form-white-box-4', {delay:600});

//SCROLL SUBMIT
sr.reveal('.submit-button', {delay: 200});

