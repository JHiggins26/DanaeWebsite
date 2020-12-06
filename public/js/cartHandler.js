$(document).on("click", "#addtocart", function (e) {

    //    e.preventDefault();

    /* var button = $(this);
     var cart = $('#cart');

     var cartTotal = cart.attr('data-totalitems');
     var newCartTotal = parseInt(cartTotal) + 1;
 
     var url = $(this).attr('href');

     var http = new XMLHttpRequest();
     http.open("GET", url, true);
     http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     //http.send();

     http.onreadystatechange = function () {
         if (this.readyState === 4 && this.status === 200) {

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
         } else if (this.status > 299 && this.readyState == 4) {

             Swal.fire({
                 icon: 'error',
                 title: 'Oops...',
                 position: 'center',
                 text: 'Something went wrong!',
             });
         }
     }*/

    //    return false;
});
