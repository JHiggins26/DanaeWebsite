$(document).ready(function () {

    $('.book-reviews').on('click', function (event) {
        event.preventDefault();

        // $('body').css('overflow','hidden');

        //Ensure modal is at the top most position
        $('#modal-reviews').on('shown.bs.modal', function () {
            $('#modal-reviews').scrollTop(0);
        });

        var bookTitle = '';
        var html = '';
        var cells = '';
        $(".reviews-container").html('');

        html += '<div class="modal fade col-lg-6 col-md-8 col-sm-8 col-xs-10" id="modal-reviews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +


            '<div class="reviewHeader col-lg-12 col-md-12 col-sm-12 col-xs-12">' +

            '<div class="reviewsTitle col-lg-11 col-md-11 col-sm-11 col-xs-12">' +
            '<h1 class="custReviewTitle">Customer Reviews</h1>' +
            '</div>' +

            '<button type="button" class="closeReviews " id="closeId" data-dismiss="modal" data-backdrop="false" aria-label="Close"><span aria-hidden="true"">×</span></button>' +

            '<div class="reviewSubHeader col-lg-12 col-md-12 col-sm-12 col-xs-12">' +

            '<h2 class="bookNameReviewTitle"></h2>' +
            '<img class="starRatingAvgImg col-lg-3 col-md-3 col-sm-4 col-xs-5 col-lg-offset-4 col-md-offset-4 col-sm-offset-3 col-xs-offset-2" src="" />' +
            '<h2 class="numberOfReviews"></h2>' +


            '</div>' + //reviewSubHeader
            '</div>' + //reviewHeader

            '<div class="reviews-container col-lg-12 col-md-12 col-sm-12 col-xs-12">' +

            '</div>' + // reviews-container

            '</div>'; // modal

        $("body").append(html);


        bookTitle = $(this).data("modal-title");
        var url = 'http://localhost:3000/getReviews/' + bookTitle; // TODO change URL
        // var url = 'https://writeitoutpublishingllc.com/getReviews/' + bookTitle;
        
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
          
            var customerReviewObj = data;

                $('.bookNameReviewTitle').html(bookTitle);

                if (customerReviewObj.length === 0 || customerReviewObj === null || customerReviewObj === undefined) {
                    var noReviews = '';
                    noReviews += '<div class="noReviews">' +
                        '<p>No Reviews yet</p>' +
                        '<p>Rate to write a review.</p>' +
                        '</div>';

                    $(".reviews-container").append(noReviews);
                }

                var averageRating = 0;
                var totalRating = 0;
                var numberOfReviews = 0;
                var starRatingImg;
                var overallStarRatingImg;

                customerReviewObj.forEach(function (review) {

                    numberOfReviews++;
                    totalRating += review.rating;


                    // Format date
                    // resets the month index to Zero
                    var tempDate = new Date(review.date);

                    var day = tempDate.getDate();
                    var month = tempDate.getMonth() + 1;
                    var year = tempDate.getFullYear();
                    var date = month + '/' + day + '/' + year;


                    // Set Star Rating image
                    if (review.rating === 1) {
                        starRatingImg = '/img/1-star-rating.png';
                    } else if (review.rating === 2) {
                        starRatingImg = '/img/2-star-rating.png';
                    } else if (review.rating === 3) {
                        starRatingImg = '/img/3-star-rating.png';
                    } else if (review.rating === 4) {
                        starRatingImg = '/img/4-star-rating.png';
                    } else {
                        starRatingImg = '/img/5-star-rating.jpg';
                    }


                    cells += '<div class="reviewerCell col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<div class="reviewerName col-lg-4 col-md-5 col-sm-12 col-xs-12">' + review.reviewer_name + '</div>' +
                        '<div class="col-lg-4 col-md-4 col-sm-9 col-xs-9">' +
                        '<img class="reviewerStarRating" src="' + starRatingImg + '" />' +
                        '</div>' +
                        '<div class="reviewerDate col-lg-4 col-md-4 col-sm-3 col-xs-3" name="date">' + date + '</div>' +
                        '<div class="reviewerDesc col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-4 col-md-offset-4">' + review.description + '</div>' +
                        '<div class="reviewerSeparaterContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<hr class="reviewerSeparater">' +
                        '</div>' +
                        '</div>';
                });

                // Calculate Rating
                averageRating = Math.round(totalRating / numberOfReviews);
                console.log('Star Review rating: ' + averageRating);

                // Set Overall Star Rating image for Book
                if (averageRating === 1) {
                    overallStarRatingImg = '/img/1-star-rating.png';
                } else if (averageRating === 2) {
                    overallStarRatingImg = '/img/2-star-rating.png';
                } else if (averageRating === 3) {
                    overallStarRatingImg = '/img/3-star-rating.png';
                } else if (averageRating === 4) {
                    overallStarRatingImg = '/img/4-star-rating.png';
                } else if (averageRating === 5) {
                    overallStarRatingImg = '/img/5-star-rating.jpg';
                } else {
                    overallStarRatingImg = '';
                }

                $('.starRatingAvgImg').attr("src", overallStarRatingImg);
               
                if (numberOfReviews == 1) {
                    $('.numberOfReviews').html(numberOfReviews + ' Review');
                } else if(numberOfReviews > 1) {
                    $('.numberOfReviews').html(numberOfReviews + ' Reviews');
                } else {
                    $('.numberOfReviews').html('');

                }

                $(".reviews-container").append(cells);
           
        })
        .catch(function(error) {
            console.log(error);
        });





        /*axios.get(url, {
            
          })
          .then(function (response) {
            console.log(response.data);


            var customerReviewObj = response.data;

                $('.bookNameReviewTitle').html(bookTitle);

                if (customerReviewObj.length === 0 || customerReviewObj === null || customerReviewObj === undefined) {
                    var noReviews = '';
                    noReviews += '<div class="noReviews">' +
                        '<h2>No Reviews yet</h2>' +
                        '<h2>Rate to write a review.</h2>' +
                        '</div>';

                    $(".reviews-container").append(noReviews);
                }

                var averageRating = 0;
                var totalRating = 0;
                var numberOfReviews = 0;
                var starRatingImg;
                var overallStarRatingImg;

                customerReviewObj.forEach(function (review) {

                    numberOfReviews++;
                    totalRating += review.rating;


                    // Format date
                    // resets the month index to Zero
                    var tempDate = new Date(review.date);

                    var day = tempDate.getDate();
                    var month = tempDate.getMonth() + 1;
                    var year = tempDate.getFullYear();
                    var date = month + '/' + day + '/' + year;


                    // Set Star Rating image
                    if (review.rating === 1) {
                        starRatingImg = '/img/1-star-rating.png';
                    } else if (review.rating === 2) {
                        starRatingImg = '/img/2-star-rating.png';
                    } else if (review.rating === 3) {
                        starRatingImg = '/img/3-star-rating.png';
                    } else if (review.rating === 4) {
                        starRatingImg = '/img/4-star-rating.png';
                    } else {
                        starRatingImg = '/img/5-star-rating.jpg';
                    }


                    cells += '<div class="reviewerCell col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<div class="reviewerName col-lg-4 col-md-5 col-sm-12 col-xs-12">' + review.reviewer_name + '</div>' +
                        '<div class="col-lg-4 col-md-4 col-sm-9 col-xs-9">' +
                        '<img class="reviewerStarRating" src="' + starRatingImg + '" />' +
                        '</div>' +
                        '<div class="reviewerDate col-lg-4 col-md-4 col-sm-3 col-xs-3" name="date">' + date + '</div>' +
                        '<div class="reviewerDesc col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-4 col-md-offset-4">' + review.description + '</div>' +
                        '<div class="reviewerSeparaterContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<hr class="reviewerSeparater">' +
                        '</div>' +
                        '</div>';
                });

                // Calculate Rating
                averageRating = Math.round(totalRating / numberOfReviews);
                console.log('Star Review rating: ' + averageRating);

                // Set Overall Star Rating image for Book
                if (averageRating === 1) {
                    overallStarRatingImg = '/img/1-star-rating.png';
                } else if (averageRating === 2) {
                    overallStarRatingImg = '/img/2-star-rating.png';
                } else if (averageRating === 3) {
                    overallStarRatingImg = '/img/3-star-rating.png';
                } else if (averageRating === 4) {
                    overallStarRatingImg = '/img/4-star-rating.png';
                } else if (averageRating === 5) {
                    overallStarRatingImg = '/img/5-star-rating.jpg';
                } else {
                    overallStarRatingImg = '';
                }

                $('.starRatingAvgImg').attr("src", overallStarRatingImg);

                if (numberOfReviews > 0) {
                    $('.numberOfReviews').html(numberOfReviews + ' Reviews');
                } else {
                    $('.numberOfReviews').html('');

                }



                $(".reviews-container").append(cells);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });*/


        /*$.get( url, function(data) {
            var customerReviewObj = data;

                $('.bookNameReviewTitle').html(bookTitle);

                if (customerReviewObj.length === 0 || customerReviewObj === null || customerReviewObj === undefined) {
                    var noReviews = '';
                    noReviews += '<div class="noReviews">' +
                        '<h2>No Reviews yet</h2>' +
                        '<h2>Rate to write a review.</h2>' +
                        '</div>';

                    $(".reviews-container").append(noReviews);
                }

                var averageRating = 0;
                var totalRating = 0;
                var numberOfReviews = 0;
                var starRatingImg;
                var overallStarRatingImg;

                customerReviewObj.forEach(function (review) {

                    numberOfReviews++;
                    totalRating += review.rating;


                    // Format date
                    // resets the month index to Zero
                    var tempDate = new Date(review.date);

                    var day = tempDate.getDate();
                    var month = tempDate.getMonth() + 1;
                    var year = tempDate.getFullYear();
                    var date = month + '/' + day + '/' + year;


                    // Set Star Rating image
                    if (review.rating === 1) {
                        starRatingImg = '/img/1-star-rating.png';
                    } else if (review.rating === 2) {
                        starRatingImg = '/img/2-star-rating.png';
                    } else if (review.rating === 3) {
                        starRatingImg = '/img/3-star-rating.png';
                    } else if (review.rating === 4) {
                        starRatingImg = '/img/4-star-rating.png';
                    } else {
                        starRatingImg = '/img/5-star-rating.jpg';
                    }


                    cells += '<div class="reviewerCell col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<div class="reviewerName col-lg-4 col-md-5 col-sm-12 col-xs-12">' + review.reviewer_name + '</div>' +
                        '<div class="col-lg-4 col-md-4 col-sm-9 col-xs-9">' +
                        '<img class="reviewerStarRating" src="' + starRatingImg + '" />' +
                        '</div>' +
                        '<div class="reviewerDate col-lg-4 col-md-4 col-sm-3 col-xs-3" name="date">' + date + '</div>' +
                        '<div class="reviewerDesc col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-4 col-md-offset-4">' + review.description + '</div>' +
                        '<div class="reviewerSeparaterContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<hr class="reviewerSeparater">' +
                        '</div>' +
                        '</div>';
                });

                // Calculate Rating
                averageRating = Math.round(totalRating / numberOfReviews);

                // Set Overall Star Rating image for Book
                if (averageRating === 1) {
                    overallStarRatingImg = '/img/1-star-rating.png';
                } else if (averageRating === 2) {
                    overallStarRatingImg = '/img/2-star-rating.png';
                } else if (averageRating === 3) {
                    overallStarRatingImg = '/img/3-star-rating.png';
                } else if (averageRating === 4) {
                    overallStarRatingImg = '/img/4-star-rating.png';
                } else if (averageRating === 5) {
                    overallStarRatingImg = '/img/5-star-rating.jpg';
                } else {
                    overallStarRatingImg = '';
                }

                $('.starRatingAvgImg').attr("src", overallStarRatingImg);

                if (numberOfReviews == 1) {
                    $('.numberOfReviews').html(numberOfReviews + ' Review');
                } else if(numberOfReviews > 1) {
                    $('.numberOfReviews').html(numberOfReviews + ' Reviews');
                } else {
                    $('.numberOfReviews').html('');

                }

                $(".reviews-container").append(cells);

          })
            .done(function() {
            })
            .fail(function() {
            })
            .always(function() {
            });*/




        /*var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.setRequestHeader('Content-Type', 'text/xml');

        http.overrideMimeType('text/xml');

        http.setRequestHeader('Access-Control-Allow-Origin', 'https://www.writeitoutpublishingllc.com/');

        http.send();


        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                var customerReviewObj = JSON.parse(http.responseText);

                $('.bookNameReviewTitle').html(bookTitle);

                if (customerReviewObj.length === 0 || customerReviewObj === null || customerReviewObj === undefined) {
                    var noReviews = '';
                    noReviews += '<div class="noReviews">' +
                        '<h2>No Reviews yet</h2>' +
                        '<h2>Rate to write a review.</h2>' +
                        '</div>';

                    $(".reviews-container").append(noReviews);
                }

                var averageRating = 0;
                var totalRating = 0;
                var numberOfReviews = 0;
                var starRatingImg;
                var overallStarRatingImg;

                customerReviewObj.forEach(function (review) {

                    numberOfReviews++;
                    totalRating += review.rating;


                    // Format date
                    // resets the month index to Zero
                    var tempDate = new Date(review.date);

                    var day = tempDate.getDate();
                    var month = tempDate.getMonth() + 1;
                    var year = tempDate.getFullYear();
                    var date = month + '/' + day + '/' + year;


                    // Set Star Rating image
                    if (review.rating === 1) {
                        starRatingImg = '/img/1-star-rating.png';
                    } else if (review.rating === 2) {
                        starRatingImg = '/img/2-star-rating.png';
                    } else if (review.rating === 3) {
                        starRatingImg = '/img/3-star-rating.png';
                    } else if (review.rating === 4) {
                        starRatingImg = '/img/4-star-rating.png';
                    } else {
                        starRatingImg = '/img/5-star-rating.jpg';
                    }


                    cells += '<div class="reviewerCell col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<div class="reviewerName col-lg-4 col-md-5 col-sm-12 col-xs-12">' + review.reviewer_name + '</div>' +
                        '<div class="col-lg-4 col-md-4 col-sm-9 col-xs-9">' +
                        '<img class="reviewerStarRating" src="' + starRatingImg + '" />' +
                        '</div>' +
                        '<div class="reviewerDate col-lg-4 col-md-4 col-sm-3 col-xs-3" name="date">' + date + '</div>' +
                        '<div class="reviewerDesc col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-4 col-md-offset-4">' + review.description + '</div>' +
                        '<div class="reviewerSeparaterContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<hr class="reviewerSeparater">' +
                        '</div>' +
                        '</div>';
                });

                // Calculate Rating
                averageRating = Math.round(totalRating / numberOfReviews);
                console.log('Star Review rating: ' + averageRating);

                // Set Overall Star Rating image for Book
                if (averageRating === 1) {
                    overallStarRatingImg = '/img/1-star-rating.png';
                } else if (averageRating === 2) {
                    overallStarRatingImg = '/img/2-star-rating.png';
                } else if (averageRating === 3) {
                    overallStarRatingImg = '/img/3-star-rating.png';
                } else if (averageRating === 4) {
                    overallStarRatingImg = '/img/4-star-rating.png';
                } else if (averageRating === 5) {
                    overallStarRatingImg = '/img/5-star-rating.jpg';
                } else {
                    overallStarRatingImg = '';
                }

                $('.starRatingAvgImg').attr("src", overallStarRatingImg);

                if (numberOfReviews > 0) {
                    $('.numberOfReviews').html(numberOfReviews + ' Reviews');
                } else {
                    $('.numberOfReviews').html('');

                }



                $(".reviews-container").append(cells);

            }
        }*/


        $('#modal-reviews').modal();



    });
});
