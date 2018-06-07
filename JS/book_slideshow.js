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

    // alert('dd');



    var carousel = document.getElementById('carousel-Id');

    carousel.setAttribute(":autoplay", "false");



    //    carousel.autoplay = false;
    //    carousel.load();
}
