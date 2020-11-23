let openEventModal = function () {

    let html = '';

    html += '<div class="modal fade text-center col-lg-6 col-md-8 col-sm-8 col-xs-12" id="modal-event-photos" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +

        '<button type="button" class="close" id="closeId" data-dismiss="modal" data-backdrop="false" aria-label="Close"><span aria-hidden="true">x</span></button>' +

        '<div id="owl" class="owl-carousel owl-theme">';

    for (let i = 0; i < photoUrlList.length; i++) {
        if (photoUrlList[i].toString().includes('jpg') || photoUrlList[i].toString().includes('png') ||
            photoUrlList[i].toString().includes('svg') || photoUrlList[i].toString().includes('jpeg')) {

            html += '<div class="item"><img src="' + photoUrlList[i] + '" alt=""></div>';

        } else if (photoUrlList[i].toString().includes('mp4')) {

            html += '<video class="item" controls style="width: 100%; height: auto; margin:0 auto; frameborder:0;" ' +
                '<source src="https://www.youtube.com/embed/W26JgQW7Uss" type="video/mp4">' +
                '</video>';
            // html += '<iframe class="item" src="' + photoUrlList[i] + '" allowfullscreen></iframe>';


            // <video controls id="video1" style="width: 100%; height: auto; margin:0 auto; frameborder:0;">
            //         <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">
            //         Your browser doesn't support HTML5 video tag.
            //     </video>
            console.log(photoUrlList[i]);
        }
    }

    html += '</div>' +

        '</div>'; // modal END


    $("body").append(html);

    $('#modal-event-photos').modal();


    // ---------------------------------------------------------------------------------------

    // Swipe capabilities
    $(".carousel").swipe({

        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

            if (direction === 'left') $(this).carousel('next');
            if (direction === 'right') $(this).carousel('prev');

        },
        allowPageScroll: "vertical"
    });


    // Detects when Modal closed and clears the modal's cache
    $('#modal-event-photos').on('hidden.bs.modal', function () {
        $('#modal-event-photos').remove();
    });


    // Owl Carousel Properties
    $("#owl").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        // itemsDesktop          : [1200,8],
        // itemsDesktopSmall     : [992,7],
        // itemsTablet           : [768,6],
        // itemsMobile           : [480,4]
    });


    // ---------------------------------------------------------------------------------------

};
