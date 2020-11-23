$(document).on("click", "#addtocart", function (e) {

    e.preventDefault();

    var button = $(this);
    var cart = $('#cart');

    var cartTotal = cart.attr('data-totalitems');
    var newCartTotal = parseInt(cartTotal) + 1;


    var url = $(this).attr('href');

    console.log($(this))
    console.log(url)

    $.get(url, function () {
            console.log("success");

            button.addClass('sendtocart');

            setTimeout(function () {

                button.removeClass('sendtocart');
                cart.addClass('shake').attr('data-totalitems', newCartTotal);

                setTimeout(function () {
                    cart.removeClass('shake');
                }, 500)
            }, 200);

            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Added to Cart',
                width: 500
            });

        })
        .done(function () {})
        .fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                position: 'center',
                text: 'Something went wrong!',
            });
        })
        .always(function () {
            console.log("finished");
        });
});
