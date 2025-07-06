// var toggle = document.getElementById('dark_container');
// var body = document.getElementById('body');

// toggle.onclick = function(){
//     toggle.classList.toggle('active');
//     body.classList.toggle('active');
// }

var toggle = document.getElementById('dark_container');
var body = document.getElementById('body');
var currentLang = 'es'; // español por defecto

toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');

    currentLang = (currentLang === 'es') ? 'en' : 'es';
    translatePage(currentLang);
};

function translatePage(lang) {
    const elements = document.querySelectorAll('.translatable');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}
