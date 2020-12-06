$(document).ready(function () {


    setTimeout(
        function () {
            $('.wiggle')[0].click();
        },
        1000);


    $('.lightbox-submit').on('click', function () {

        if ($('.lightbox-input').val().length > 0) {

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

});
