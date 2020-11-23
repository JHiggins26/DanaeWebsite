function populateSlides(photoUrls, id) {

    var html = '';

    for (let i = 0; i < photoUrls.length; i++) {
        if (photoUrls[i].toString().includes('jpg') || photoUrls[i].toString().includes('png') ||
            photoUrls[i].toString().includes('svg') || photoUrls[i].toString().includes('jpeg')) {

            html += '<div class=""><img src="' + photoUrls[i] + '" alt=""></div>';
        }
    }

    $(id).append(html);
    $(id).owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
    });

}
