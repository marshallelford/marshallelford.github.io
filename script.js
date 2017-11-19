/*jslint browser: true*/
/*global $, jQuery*/

window.onload = function () {
    "use strict";
    
    $('#aboutText').click(function () {
        jQuery(this).text('close');
        
        if ($('#about').is(':hidden')) {
            jQuery(this).text('Close');
            document.getElementById("about").style.display = "block";
        } else {
            jQuery(this).text('Who am I');
            document.getElementById("about").style.display = "none";
        }
        
        return false;
    });
};