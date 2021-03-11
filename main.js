var mediaMenu = $(".header-right > a");
var openMenu = $(".hamburger-menu");
var closeMenu = $(".close");

// apertura menu al click
mediaMenu.click(
  function () {
    openMenu.show(500);
  }
);

// chiusura menu al click
closeMenu.click(
  function () {
    openMenu.hide(500);
  }
);
