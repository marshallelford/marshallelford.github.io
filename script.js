/*jslint browser: true*/
/*global $, jQuery*/

window.onload = function () {
    "use strict";
    
    $("div.hover").each(function (index) {
        $(this).delay(400 * index).fadeIn(1000);
    });
    
    $('#aboutText').click(function () {
        jQuery(this).text('close');
        
        if ($('#about').is(':hidden')) {
            jQuery(this).text('Close');
            $("#about").fadeIn(500);
        } else {
            jQuery(this).text('Who am I');
            $("#about").fadeOut(500);
        }
        
        return false;
    });
};