// https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");

    // https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers/onscroll
    window.onscroll = function () {
        afficher_bouton()
    };
    function afficher_bouton() {
        //console.log('afficher ou cacher bouton remonter');
        // https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
        var elem = document.getElementById('bouton_remonter');
        var nombrePixels = window.pageYOffset | document.body.scrollTop;
        // console.log('descendu de ' + nombrePixels + 'pixels');
        if (nombrePixels > 360) {
            elem.style.display = 'block';
        } else if (nombrePixels <= 360) {
            elem.style.display = 'none';
        }
    }
});
