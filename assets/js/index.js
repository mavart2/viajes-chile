/* global jQuery, $ */

jQuery(document).ready(function ($) {
    // 1. Inicializar todos los Tooltips de Bootstrap en la página
    $('[data-toggle="tooltip"]').tooltip();

    // 2. Inicializar todos los Popovers de Bootstrap
    $('[data-toggle="popover"]').popover();

    // 3. Modificación del comportamiento del Carrusel vía JavaScript
    $('.carousel').carousel({
        interval: 3000, 
        pause: "hover"  // Pausa el auto-play cuando el usuario pasa el mouse por encima
    });
});