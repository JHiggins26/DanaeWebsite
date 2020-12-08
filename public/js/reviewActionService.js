// ----------------------------------Review  Section


// Star Rating
$('.stars-row').on('click', function (e) {
    console.log('clicked');

    $(this).removeClass('pulse');

    $(this).closest('.stars').next('.book-desc-btn-container').hide(); // Book description

    $(this).siblings('.rev-box').addClass('rev-box-show'); // Review Container

    $(this).closest('.book-content').siblings('.book-img').find('.book-photo').css('height', '100%'); // Book image

    if ($(window).width() < 768) {
        $(this).closest('.book-slide').next().next().css('margin-top', '23%');
    } else {
        $(this).closest('.book-slide').next().next().css('margin-top', '12%');
    }

});



// Review Close Button
$('.close-review').on('click', function (e) {

    $(this).closest('.rev-box').removeClass('rev-box-show'); // Review Container

    $(this).closest('.stars').next().show(); // Star Container

    $(this).siblings('.review').val(''); // Review Box

    $(this).closest('.book_form').trigger('reset'); // Book Form

    $(this).closest('.book-content').siblings('.book-img').find('.book-photo').css('height', '110%'); // Book image

    $(this).closest('.book-slide').next().next().css('margin-top', '5%');

});


// Submit Button
$('.submit-review-btn').on('click', function (e) {

    if ($.trim($(this).siblings('.review').val()) && $.trim($(this).siblings('.reviewName').val())) {

        submitReview($(this)); // Submit Form

        $(this).closest('.stars').next().show(); // Book description

        $(this).closest('.rev-box').removeClass('rev-box-show'); // Review Container

        $(this).siblings('.review').val(''); // Review Box

        $(this).closest('.book-content').siblings('.book-img').find('.book-photo').css('height', '110%'); // Book image

        $(this).closest('.book-slide').next().next().css('margin-top', '5%');

    }

    return false;
});



// Submit Review to Backend Server
function submitReview(submitBtn) {

    var form = submitBtn.closest('.book_form');
    form.trigger('submit'); // Submit the form
    form.trigger('reset'); // Reset all form data including 'stars'

    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Nice, thanks for sharing! Your comment will be live shortly.',
        width: 500
    });
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
