$(document).mousemove( (e) => {
    var posX = e.clientX/100;
    var posY = e.clientY/100;
    $(".project--item--img--thumbnail").css({"left": 2 + posX/6 + "%"})
    $(".thumbnail--supp--1").css({"right": 6 - posX/6 + "%"})
    $(".thumbnail--supp--2").css({"left": 2 + posX/6 + "%"})
    $(".project--item--img--thumbnail").css({"top": posY + "%"})
    $(".thumbnail--supp--1").css({"bottom": -10 - posY/4 + "%"})
    $(".thumbnail--supp--2").css({"bottom": -25 + posY/2 + "%"})
});