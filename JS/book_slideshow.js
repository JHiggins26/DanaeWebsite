var angle = 0;

function galleryspin(sign) {
    var spinner = document.querySelector("#spinner");
    if (!sign) {
        angle = angle + 72;
    } else {
        angle = angle - 72;
    }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

document.getElementById("leftArrowId").addEventListener('click', function (e) {
    galleryspin('-');

});

document.getElementById("rightArrowId").addEventListener('click', function (e) {
    galleryspin('');

});
