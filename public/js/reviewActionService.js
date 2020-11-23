// ----------------------------------Review  Section

$(document).ready(function () {

    var http = new XMLHttpRequest();
    //    var url = 'http://localhost:3001/getRating/' + bookTitle; // TODO change URL
    var url = 'http://writeitoutpublishingllc.com/getRating/' + bookTitle;

    http.open("GET", url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //            http.send();

    http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            var rating = JSON.parse(http.responseText);

            if (rating.length === 0 || rating === null || rating === undefined) {

                var noReviews = '';
                noReviews += '<div class="noReviews">' +
                    '<h2>No Reviews yet</h2>' +
                    '<h2>Rate to write a review.</h2>' +
                    '</div>';

                //  $(".reviews-container").append(noReviews);
            }


            rating.forEach(function (review) {

            });


        };
    }
});




// Star Rating
$('.stars-row').on('click', function (e) {
    console.log('clicked');

    $(this).removeClass('pulse');

    $(this).closest('.stars').next('.book-desc-btn-container').hide(); // Book description

    $(this).siblings('.rev-box').addClass('rev-box-show'); // Review Container

    $(this).closest('.book-cell').css('height', '350px'); // Book Cell

    $(this).closest('.book-content').siblings('.book-img').find('.book-photo').css('height', '100%'); // Book image

});



// Review Close Button
$('.close-review').on('click', function (e) {

    $(this).closest('.rev-box').removeClass('rev-box-show'); // Review Container

    $(this).closest('.stars').next().show(); // Star Container

    $(this).siblings('.review').val(''); // Review Box

    $(this).closest('.book_form').trigger('reset'); // Book Form

    $(this).closest('.book-cell').css('height', '275px'); // Book Cell

    $(this).closest('.book-content').siblings('.book-img').find('.book-photo').css('height', '120%'); // Book image

});


// Submit Button
$('.submit-review-btn').on('click', function (e) {

    e.preventDefault();

    if ($.trim($(this).siblings('.review').val()) && $.trim($(this).siblings('.reviewName').val())) {

        //submitReview($(this)); // Submit Form

        $(this).closest('.stars').next().show(); // Book description

        $(this).closest('.rev-box').removeClass('rev-box-show'); // Review Container

        $(this).siblings('.review').val(''); // Review Box

        $(this).closest('.book-cell').css('height', '275px'); // Book Cell

        $(this).closest('.book-content').siblings('.book-img').find('.book-photo').css('height', '120%'); // Book image

    }

    return false;
});

$('.book_form').submit(function (e) {
    e.preventDefault();

    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Nice, thanks for sharing! Your comment will be live shortly.',
        width: 500
    });

    //    return false;
});



// Submit Review to Backend Server
function submitReview(submitBtn) {

    var form = submitBtn.closest('.book_form').submit();
    submitBtn.closest('.book_form').reset();
    //    form.trigger('submit'); // Submit the form
    //    form.trigger('reset'); // Reset all form data including 'stars'

    //    Swal.fire({
    //        position: 'center',
    //        type: 'success',
    //        title: 'Nice, thanks for sharing! Your comment will be live shortly.',
    //        width: 500
    //    });
    //
    //    return false;
}







// ----------------------------------Subscribe Section

function submitForm() {

    if (validateEmail(document.getElementById('subscribeText').value)) {

        let frm = document.getElementsByName('subForm')[0];
        frm.submit(); // Submit the form
        frm.reset(); // Reset all form data

        // Display popup
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Nice! You are now subscribed!',
            showConfirmButton: false,
            width: 600,
            timer: 2500
        });

        $('#errorId').hide();

        return false; // Prevent page refresh
    } else {
        //Invalid Email
        document.getElementById('subscribeText').select();
        $('#errorId').show();

    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function textboxListener() {
    if (validateEmail(document.getElementById('subscribeText').value)) {
        $('#errorId').hide();
    }
}
