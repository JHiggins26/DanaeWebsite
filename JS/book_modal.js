$(document).ready(function () {

    $('.book-cover-container').on('click', function (event) {

        event.preventDefault();
        var e = $(this);

        var bookModalTitle = e.find('.book-info').data("modal-title");

        var bookModalDescription = e.find('.book-info').data("modal-description");

        var html = ' ';


        html += '<div class="modal fade in text-center col-lg-6 col-md-8 col-sm-8 col-xs-10" id="modal-books" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="">' +

            '<div class="modal-header-container" id="headerId"> <img id="modal-backdrop-img"/>' +
            '<div class="modal-header-info">' +


            '<button type="button" class="close" data-dismiss="modal" aria-label="Close" data-spy="affix" data-offset="0" ><span aria-hidden="true">×</span></button>' +

            '<h3 class="modal-title" id="title"></h3>' +

            '<img id="imgId" height="200px" style="border:5px solid white;">' +

            '<h3 class="modal-price">$14.95</h3>' +

            '<h3 class="modal-date" id="dateId"></h3>' +

            '</div></div>' +

            '<div class="modal-body" id="bodyId">' +

            '<p class="modal-desc" id=desc></p>' +

            '</div>' +
            '</div>' +
            '</div>';

        $("body").append(html);

        //Set title
        document.getElementById('title').innerHTML = bookModalTitle;


        //Set Book cover
        if (bookModalTitle === 'Sunny North to Sunny South') {

            document.getElementById('modal-backdrop-img').src = "Style/img/SNSS-Book-Cover.jpg";
            document.getElementById('imgId').src = "Style/img/SNSS-Book-Cover.jpg";
            document.getElementById('dateId').innerHTML = "Coming in 2019";
        } else if (bookModalTitle === 'Little Black Boy') {

            document.getElementById('modal-backdrop-img').src = "Style/img/LBG-Book-Cover.png";
            document.getElementById('imgId').src = "Style/img/coming_soon_book_cover.jpg";
            document.getElementById('dateId').innerHTML = 'Coming in December 2018';

        } else if (bookModalTitle === 'Universal Goddess') {

            document.getElementById('modal-backdrop-img').src = "Style/img/SNSS-Book-Cover.jpg";
            document.getElementById('imgId').src = "Style/img/coming_soon_book_cover.jpg";
            document.getElementById('dateId').innerHTML = 'Coming in December 2018';

        } else if (bookModalTitle === 'Little Black Girl') {

            document.getElementById('modal-backdrop-img').src = "Style/img/LBG-Book-Cover.png";
            document.getElementById('imgId').src = "Style/img/LBG-Book-Cover.png";
            //document.getElementById('dateId').innerHTML = 'Buy Now';

            document.getElementById('dateId').innerHTML = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">' +
                '<input type="hidden" name="cmd" value="_s-xclick">' +
                '<input type="hidden" name="hosted_button_id" value="DE5JHEDHV4TB2">' +
                '<input class="order-btn" type="image" src="Style/img/Buy-Now-Btn.png" style="width:35%" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
                '</form>';

        } else {
            document.getElementById('modal-backdrop-img').src = "Style/img/SNSS-Book-Cover.jpg";
            document.getElementById('imgId').src = "Style/img/coming_soon_book_cover.jpg";
            document.getElementById('dateId').innerHTML = 'Coming in December 2018';

        }

        document.getElementById('desc').innerHTML = bookModalDescription;

        $('#modal-books').modal();

        //        var modal = document.getElementById('title');
        //
        //        // Click outside of modal to close
        //        window.onclick = function(e) {
        //   
        //            if (e.target != modal) {
        //                //alert('ddddddd');
        //                modal.style.backgroundColor = 'blue';
        //    //            modal.style.display = "none";
        //            }
        //        }

        $(document).click(function (e) {
            if ($(e.target).is('#modal-books')) {

                alert('hhhhh');

            }

        });
    });



});
