    const http = new XMLHttpRequest();
    const url = 'http://localhost:3001/products'; // Need to change TODO
    http.open("GET", url);
    http.send();

    let products;
    let html = '';

    http.onreadystatechange = (e) => {

        products = JSON.parse(http.responseText);


        // Remeber to put back to http.readyState === 4 
        //fdlefvdkln kjfejklnlnwflkenqlka
        //jbjk fjfwejklerkn
        if (http.readyState === 6 && http.status === 200) {

            html = '';

            for (var allProductsIndex in products.AllProducts) {

                for (var product in products.AllProducts[allProductsIndex]) {

                    for (var attributeIndex in products.AllProducts[allProductsIndex][product]) {

                        var attribute = products.AllProducts[allProductsIndex][product][attributeIndex];

                        if (attribute.isActive === true) {
                            html += '<div class="product col-lg-3 col-md-4 col-sm-6 col-xs-6">' +
                                '<div class="make3D">' +
                                '<div class="product-front">' +
                                '<div class="shadow"></div>' +
                                '<img src="' + attribute.img + '" alt="" />' +
                                '<div class="image_overlay"></div>' +
                                '<div class="add_to_cart">Add to cart</div>' +
                                '<div class="view_gallery">View gallery</div>' +
                                '<div class="stats">' +
                                '<div class="stats-container col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                                '<span class="product_name col-lg-12 col-md-12 col-sm-12 col-xs-12">' + attribute.name + '</span>' +
                                '<span class="product_price col-lg-12 col-md-12 col-sm-12 col-xs-12">' + attribute.price + '</span>' +
                                '<p>' + attribute.desc + '</p>' +
                                '<div class="product-options">' +
                                //                            '<strong>SIZES</strong>' +
                                //                            '<span>XS, S, M, L, XL, XXL</span>' +
                                '<strong>COLORS</strong>' +
                                '<div class="colors">' +
                                '<div class="c-blue"><span></span></div>' +
                                '<div class="c-red"><span></span></div>' +
                                '<div class="c-white"><span></span></div>' +
                                '<div class="c-green"><span></span></div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                        }
                    }
                }
            }

            $(html).appendTo(".product-container");
        }
    }


    // All Products
    $('.allProducts').on('click', function (event) {
        event.preventDefault();

        setActiveDiv(this);
        $(".product").remove();
        $(this).scrollTop();
        html = '';

        for (var allProductsIndex in products.AllProducts) {

            for (var product in products.AllProducts[allProductsIndex]) {

                for (var attributeIndex in products.AllProducts[allProductsIndex][product]) {

                    var attribute = products.AllProducts[allProductsIndex][product][attributeIndex];

                    if (attribute.isActive === true) {

                        html += '<div class="product col-lg-2 col-md-2 col-sm-2 col-xs-6">' +
                            '<div class="make3D">' +
                            '<div class="product-front">' +
                            '<div class="shadow"></div>' +
                            '<img src="' + attribute.img + '" alt="" />' +
                            '<div class="image_overlay"></div>' +
                            '<div class="add_to_cart">Add to cart</div>' +
                            '<div class="view_gallery">View gallery</div>' +
                            '<div class="stats">' +
                            '<div class="stats-container">' +
                            '<span class="product_price">' + attribute.price + '</span>' +
                            '<span class="product_name">' + attribute.name + '</span>' +
                            '<p>' + attribute.desc + '</p>' +
                            '<div class="product-options">' +
                            '<strong>SIZES</strong>' +
                            '<span>XS, S, M, L, XL, XXL</span>' +
                            '<strong>COLORS</strong>' +
                            '<div class="colors">' +
                            '<div class="c-blue"><span></span></div>' +
                            '<div class="c-red"><span></span></div>' +
                            '<div class="c-white"><span></span></div>' +
                            '<div class="c-green"><span></span></div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }
                }
            }
        }

        $(html).appendTo(".product-container");
    });


    // Sanitizers
    $('.sanitizer').on('click', function (event) {
        event.preventDefault();

        setActiveDiv(this);
        $(".product").remove();
        $(this).scrollTop();
        html = '';

        for (var allProductsIndex in products.AllProducts) {

            for (var sanitizerIndex in products.AllProducts[allProductsIndex].Sanitizers) {

                var attribute = products.AllProducts[allProductsIndex].Sanitizers[sanitizerIndex];

                if (attribute.isActive === true) {

                    html += '<div class="product col-lg-2 col-md-2 col-sm-2 col-xs-6">' +
                        '<div class="make3D">' +
                        '<div class="product-front">' +
                        '<div class="shadow"></div>' +
                        '<img src="' + attribute.img + '" alt="" />' +
                        '<div class="image_overlay"></div>' +
                        '<div class="add_to_cart">Add to cart</div>' +
                        '<div class="view_gallery">View gallery</div>' +
                        '<div class="stats">' +
                        '<div class="stats-container">' +
                        '<span class="product_price">' + attribute.price + '</span>' +
                        '<span class="product_name">' + attribute.name + '</span>' +
                        '<p>' + attribute.desc + '</p>' +
                        '<div class="product-options">' +
                        '<strong>SIZES</strong>' +
                        '<span>XS, S, M, L, XL, XXL</span>' +
                        '<strong>COLORS</strong>' +
                        '<div class="colors">' +
                        '<div class="c-blue"><span></span></div>' +
                        '<div class="c-red"><span></span></div>' +
                        '<div class="c-white"><span></span></div>' +
                        '<div class="c-green"><span></span></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }
            }
        }
        $(html).appendTo(".product-container");
    });


    // Face Masks
    $('.faceMask').on('click', function (event) {
        event.preventDefault();

        setActiveDiv(this);
        $(".product").remove();
        $(this).scrollTop();
        html = '';

        for (var allProductsIndex in products.AllProducts) {

            for (var faceMaskIndex in products.AllProducts[allProductsIndex].FaceMasks) {

                var attribute = products.AllProducts[allProductsIndex].FaceMasks[faceMaskIndex];

                if (attribute.isActive === true) {

                    html += '<div class="product col-lg-2 col-md-2 col-sm-2 col-xs-6">' +
                        '<div class="make3D">' +
                        '<div class="product-front">' +
                        '<div class="shadow"></div>' +
                        '<img src="' + attribute.img + '" alt="" />' +
                        '<div class="image_overlay"></div>' +
                        '<div class="add_to_cart">Add to cart</div>' +
                        '<div class="view_gallery">View gallery</div>' +
                        '<div class="stats">' +
                        '<div class="stats-container">' +
                        '<span class="product_price">' + attribute.price + '</span>' +
                        '<span class="product_name">' + attribute.name + '</span>' +
                        '<p>' + attribute.desc + '</p>' +
                        '<div class="product-options">' +
                        '<strong>SIZES</strong>' +
                        '<span>XS, S, M, L, XL, XXL</span>' +
                        '<strong>COLORS</strong>' +
                        '<div class="colors">' +
                        '<div class="c-blue"><span></span></div>' +
                        '<div class="c-red"><span></span></div>' +
                        '<div class="c-white"><span></span></div>' +
                        '<div class="c-green"><span></span></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }
            }
        }
        $(html).appendTo(".product-container");
    });


    // Book Bags
    $('.bookBag').on('click', function (event) {
        event.preventDefault();

        setActiveDiv(this);
        $(".product").remove();
        $(this).scrollTop();
        html = '';

        for (var allProductsIndex in products.AllProducts) {

            for (var bookBagIndex in products.AllProducts[allProductsIndex].BookBags) {

                var attribute = products.AllProducts[allProductsIndex].BookBags[bookBagIndex];

                if (attribute.isActive === true) {

                    html += '<div class="product col-lg-2 col-md-2 col-sm-2 col-xs-6">' +
                        '<div class="make3D">' +
                        '<div class="product-front">' +
                        '<div class="shadow"></div>' +
                        '<img src="' + attribute.img + '" alt="" />' +
                        '<div class="image_overlay"></div>' +
                        '<div class="add_to_cart">Add to cart</div>' +
                        '<div class="view_gallery">View gallery</div>' +
                        '<div class="stats">' +
                        '<div class="stats-container">' +
                        '<span class="product_price">' + attribute.price + '</span>' +
                        '<span class="product_name">' + attribute.name + '</span>' +
                        '<p>' + attribute.desc + '</p>' +
                        '<div class="product-options">' +
                        '<strong>SIZES</strong>' +
                        '<span>XS, S, M, L, XL, XXL</span>' +
                        '<strong>COLORS</strong>' +
                        '<div class="colors">' +
                        '<div class="c-blue"><span></span></div>' +
                        '<div class="c-red"><span></span></div>' +
                        '<div class="c-white"><span></span></div>' +
                        '<div class="c-green"><span></span></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }
            }
        }
        $(html).appendTo(".product-container");
    });


    // Bed Sets
    $('.bedSet').on('click', function (event) {
        event.preventDefault();

        setActiveDiv(this);
        $(".product").remove();
        $(this).scrollTop();
        html = '';

        for (var allProductsIndex in products.AllProducts) {

            for (var bedSetIndex in products.AllProducts[allProductsIndex].BedSets) {

                var attribute = products.AllProducts[allProductsIndex].BedSets[bedSetIndex];

                if (attribute.isActive === true) {

                    html += '<div class="product col-lg-2 col-md-2 col-sm-2 col-xs-6">' +
                        '<div class="make3D">' +
                        '<div class="product-front">' +
                        '<div class="shadow"></div>' +
                        '<img src="' + attribute.img + '" alt="" />' +
                        '<div class="image_overlay"></div>' +
                        '<div class="add_to_cart">Add to cart</div>' +
                        '<div class="view_gallery">View gallery</div>' +
                        '<div class="stats">' +
                        '<div class="stats-container">' +
                        '<span class="product_price">' + attribute.price + '</span>' +
                        '<span class="product_name">' + attribute.name + '</span>' +
                        '<p>' + attribute.desc + '</p>' +
                        '<div class="product-options">' +
                        '<strong>SIZES</strong>' +
                        '<span>XS, S, M, L, XL, XXL</span>' +
                        '<strong>COLORS</strong>' +
                        '<div class="colors">' +
                        '<div class="c-blue"><span></span></div>' +
                        '<div class="c-red"><span></span></div>' +
                        '<div class="c-white"><span></span></div>' +
                        '<div class="c-green"><span></span></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }
            }
        }
        $(html).appendTo(".product-container");
    });


    function setActiveDiv(el) {
        $('.product-type').removeClass('active');
        var element = $(el).closest('.product-type');
        element.toggleClass("active");
    }
