// // Act on clicks to a elements
// $(".order-btn").on('click', function (e) {
//
//     console.log("yes clicked")
//
//     e.preventDefault();
//     // capture the href attribute of the a element
//     var url = $(this).attr('href');
//
//     console.log($(this))
//     console.log(url)
//
//
//     // perform a get request using ajax to the captured href value
//     $.get(url, function () {
//         // success
//
//         console.log("yes we executed")
//     });
// });




$(document).on("click", "#addtocart", function (e) {

    e.preventDefault();


    var button = $(this);
    var cart = $('#cart');

    var cartTotal = cart.attr('data-totalitems');
    var newCartTotal = parseInt(cartTotal) + 1;

    button.addClass('sendtocart');

    setTimeout(function () {

        button.removeClass('sendtocart');

        cart.addClass('shake').attr('data-totalitems', newCartTotal);

        setTimeout(function () {
            cart.removeClass('shake');
        }, 500)
    }, 1000);


    var url = $(this).attr('href');

    console.log($(this))
    console.log(url)


    // perform a get request using ajax to the captured href value
    $.get(url, function () {
        // success

        console.log("yes we executed")
    });




});
