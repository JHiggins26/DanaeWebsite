$(document).ready(function () {

    setTimeout(
        function () {
            $('.wiggle')[0].click();

            $('body').css('overflow', 'hidden');
        },
        1000);


    $('.lightbox-submit').on('click', function () {

        if ($('.lightbox-input').val().length > 0) {

            $('body').css('overflow', 'visible');

            $('#close-lightbox')[0].click();

            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'You are now subscribed!',
                width: 500,
                timer: 2500

            });
        }
    });


    $('#close-lightbox').on('click', function () {
        $('body').css('overflow', 'visible');
    });



    if ($(window).width() < 768) {

        $('.lightbox-input').on('focus', function () {
            $('.lightbox').css('top', '0%');
        });

        $('.lightbox-input').on('blur', function () {
            $('.lightbox').css('top', '10%');
        });
    }


});
