"use strict";
console.log("main js is here to scroll");

var header = $('#myHeader');
 

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// $(window).scroll(() => {
//     if ($(window).scrollTop() >= 300) {
//         header.addClass('sticky');
//     }
//     else {
//         header.removeClass('sticky');
//     }
// });

/* scrollTop() >= 240
   Should be equal the the height of the header
 */


function freeze() {
if (window.pageYOffset >= sticky) {
    header.addClass("sticky");
} else {
    header.removeClass("sticky");
}
}

$(window).scroll(freeze());