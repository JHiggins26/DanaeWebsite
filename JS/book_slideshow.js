new Vue({
    el: '#carousel',
    data: {
        slides: 5
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }
})

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    var carousel = document.getElementById('carousel-Id');

    //carousel.setAttribute("autoplay-timeout", "1000");

    setTimeout(function () {

        carousel.pause();

        carousel.play();

    }, 1000);

}
