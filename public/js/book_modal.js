$(document).ready(function () {

    $('.book-see').on('click', function (event) {
        event.preventDefault();

        //Ensure modal is at the top most position
        $('#modal-books').on('shown.bs.modal', function () {
            $('#modal-books').scrollTop(0);
        });
        let e = $(this);

        let bookModalTitle = e.find('.book-info').data("modal-title");

        console.log(bookModalTitle);

        let bookModalDescription = e.find('.book-info').data("modal-description");

        let html = ' ';


        html += '<div class="modal fade text-center col-lg-6 col-md-8 col-sm-8 col-xs-10" id="modal-books" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +

            '<div class="modal-dialog">' +
            '<div class="modal-content">' +

            '<div class="modal-header-container" id="headerId"> ' +

            //Product Listing
            '<img class="modal-backdrop-img"/>' +
            '<div class="modal-header-info">' +

            '<button type="button" class="close" id="closeId" data-dismiss="modal" data-backdrop="false" aria-label="Close"><span aria-hidden="true">×</span></button>' +

            '<h3 class="modal-title" id="title"></h3>' +

            '<img id="imgId" height="200px" style="border:5px solid white;">' +

            '<h3 class="modal-price" id="price"></h3>' +
            //            '<h3 class="modal-price"><span style="color: white;"> + 15% off</span></h3>' +

            '<h3 class="modal-date" id="dateId"></h3>' +

            '</div></div>' +

            '<div class="modal-body" id="bodyId">' +

            '<p class="modal-desc" id=desc></p>' +

            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        $("body").append(html);


        //Set title
        document.getElementById('title').innerHTML = bookModalTitle;

        console.log('title:  ' + bookModalTitle)

        //Set Book cover
        if (bookModalTitle === 'Sunny North to Sunny South') {

            document.getElementsByClassName('modal-backdrop-img').src = "/img/SNSS-Book-Cover.jpg";
            document.getElementById('imgId').src = "/img/SNSS-Book-Cover.jpg";
            document.getElementById('dateId').innerHTML = "Coming Soon";
            document.getElementById('price').innerHTML = "";


        } else if (bookModalTitle === 'Little Black Boy') {

            document.getElementsByClassName('modal-backdrop-img').src = "/img/LBB-Book-Cover.jpg";
            document.getElementById('imgId').src = "/img/LBB-Book-Cover.jpg";
            document.getElementById('price').innerHTML = "$16.99";

            // PAID SHIPPING
            document.getElementById('dateId').innerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PK27P4KZA2CN2" target="_blank">' +
                '<img class="modal-order-btn" src="/img/Buy-Now-Btn.png" ></a>';


        } else if (bookModalTitle === 'Universal Goddess') {

            document.getElementsByClassName('modal-backdrop-img').src = "/img/coming_soon_book_cover-spotlight.jpg";
            document.getElementById('imgId').src = "/img/coming_soon_book_cover.jpg";
            document.getElementById('dateId').innerHTML = 'Coming Soon';
            document.getElementById('price').innerHTML = "";

        } else if (bookModalTitle === 'Little Black Girl') {

            document.getElementsByClassName('modal-backdrop-img').src = "/img/LBG-Book-Cover.png";
            // No Discount
            document.getElementById('imgId').src = "/img/LBG-Book-Cover.png";

            // Discount
            // document.getElementById('imgId').src = "/img/LBG-Book-Cover-Discount.png";

            document.getElementById('price').innerHTML = "$14.99";

            // FREE SHIPPING
            /*document.getElementById('dateId').innerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7PAG2JE2KWFZS" target="_blank">' +
                '<img class="modal-order-btn" src="Style/img/Buy-Now-Btn.png" ></a>';*/

            // PAID SHIPPING
            document.getElementById('dateId').innerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J7Y4EZX764KTL" target="_blank">' +
                '<img class="modal-order-btn" src="/img/Buy-Now-Btn.png" ></a>';

            // Discount
            /*document.getElementById('dateId').innerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VMKMC2D84T4F2" target="_blank">' +
                '<img class="modal-order-btn" src="Style/img/Buy-Now-Btn.png" ></a>';*/

        } else {
            document.getElementsByClassName('modal-backdrop-img').src = "/img/coming_soon_book_cover-spotlight.jpg";
            document.getElementById('imgId').src = "/img/coming_soon_book_cover.jpg";
            document.getElementById('dateId').innerHTML = 'Coming Soon';
            document.getElementById('price').innerHTML = "";
        }

        $("body").append(html);

        document.getElementById('desc').innerHTML = bookModalDescription;

        $('#modal-books').modal();



    });
});
