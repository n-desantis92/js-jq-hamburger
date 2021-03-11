var mediaMenu = $(".header-right > a");
var openMenu = $(".hamburger-menu");
var closeMenu = $(".close");

// // apertura menu al click
// mediaMenu.click(
//   function () {
//     openMenu.show(500);
//   }
// );

// // chiusura menu al click
// closeMenu.click(
//   function () {
//     openMenu.hide(500);
//   }
// );



// // apertura menu al click con aggiunta classe
mediaMenu.click(
  function () {
    openMenu.addClass("active");
  }
);

// chiusura menu al click
closeMenu.click(
  function () {
    openMenu.removeClass("active");
  }
);
