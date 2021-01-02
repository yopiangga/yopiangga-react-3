
$(document).ready(function(){

    $('.btn-menu').click(function(){
        $('nav .menu').toggleClass('active');
        
    });

    $('section').click(function(){
        $('nav .menu').removeClass('active');
    });


    $('.sign-in-sign-up .content .content-right .sign-up .btn-sign-up').click(function(){
        $('.sign-in-sign-up .content').toggleClass('active');

        $('.sign-in-sign-up .content .content-left .sign-in').addClass('animate__animated animate__fadeInRight');
        $('.sign-in-sign-up .content .content-right .sign-up-2').addClass('animate__animated animate__fadeInLeft');
    });

    $('.sign-in-sign-up .content .content-left .sign-in-2 .btn-sign-in').click(function(){
        $('.sign-in-sign-up .content').toggleClass('active');

        $('.sign-in-sign-up .content .content-right .sign-up').addClass('animate__animated animate__fadeInLeft');
        $('.sign-in-sign-up .content .content-left .sign-in-2').addClass('animate__animated animate__fadeInRight')

    });

    $('.home-intro .btn-right').click(function(){
        $('.home-intro .slide-1').removeClass('active');
        $('.home-intro .slide-2').addClass('active animate__animated animate__fadeIn');
    });

    $('.home-intro .btn-left').click(function(){
        $('.home-intro .slide-1').addClass('active animate__animated animate__fadeIn');
        $('.home-intro .slide-2').removeClass('active');
    });





    $('.home-product .content .title .button .btn-all').click(function(){
        $('.home-product .content .body .fruits').removeClass('unActive');
        $('.home-product .content .body .vegetables').removeClass('unActive');
        $('.home-product .content .body .garlics').removeClass('unActive');
        $('.home-product .content .body .seafoods').removeClass('unActive');
        $('.home-product .content .body .meets').removeClass('unActive');

        $('.home-product .content .title .button .btn-all').addClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlics').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-fruits').click(function(){
        $('.home-product .content .body .fruits').removeClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').addClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlics').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-vegetables').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').removeClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').addClass('active');
        $('.home-product .content .title .button .btn-garlics').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-garlics').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').removeClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlics').addClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-seafoods').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').removeClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlics').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').addClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-meets').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').removeClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlics').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').addClass('active');
    });

    $('.home-product .content .body .produk .add-shopping').click(function(){
        $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce');
    });

    $('.home-product .content .body .produk .add-shopping').hover(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    });



    // Product page
    $('.products-product .content .title .button .btn-all').click(function(){
        $('.products-product .content .body .fruits').removeClass('unActive');
        $('.products-product .content .body .vegetables').removeClass('unActive');
        $('.products-product .content .body .garlics').removeClass('unActive');
        $('.products-product .content .body .seafoods').removeClass('unActive');
        $('.products-product .content .body .meets').removeClass('unActive');

        $('.products-product .content .title .button .btn-all').addClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-fruits').click(function(){
        $('.products-product .content .body .fruits').removeClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').addClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-vegetables').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').removeClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').addClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-garlics').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').removeClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').addClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-seafoods').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').removeClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').addClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-meets').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').removeClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').addClass('active');
    });

    $('.products-product .content .body .produk .add-shopping').click(function(){
        $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce');
    });

    $('.products-product .content .body .produk .add-shopping').hover(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    });
    // End Product page

    
    $('.product-detail-related .content .content-body .produk .produk-img .menu .add-shopping').click(function(){
        $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce');
    });

    $('.product-detail-related .content .content-body .produk .produk-img .menu .add-shopping').hover(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    });

    $('.product-detail-home .content .left .small-img .small-img-1').click(function(){
        $('.product-detail-home .content .left .big-img .big-img-1').addClass('active');
        $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
    });

    $('.product-detail-home .content .left .small-img .small-img-2').click(function(){
        $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-2').addClass('active');
        $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
    });

    $('.product-detail-home .content .left .small-img .small-img-3').click(function(){
        $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-3').addClass('active');
        $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
    });

    $('.product-detail-home .content .left .small-img .small-img-4').click(function(){
        $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-4').addClass('active');
        $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
    });

    $('.product-detail-home .content .left .small-img .small-img-5').click(function(){
        $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
        $('.product-detail-home .content .left .big-img .big-img-5').addClass('active');
    });


    $('nav .content .icon .search').click(function(){
        $('.nav-search').toggleClass('active');
        $('.navbar').toggleClass('search-active');
    });

    $('section').click(function(){
        $('.nav-search').removeClass('active');
        $('.navbar').removeClass('search-active');
    });


    $('.table-cart .content table .tr-1 .td-1').click(function(){
        $('.table-cart .content table .tr-1').addClass('unActive');
        $('.table-cart .content table .tr-2').addClass('animate__animated animate__fadeInUp');
        $('.table-cart .content table .tr-3').addClass('animate__animated animate__fadeInUp');
    });

    $('.table-cart .content table .tr-2 .td-2').click(function(){
        $('.table-cart .content table .tr-1').addClass('animate__animated animate__fadeInUp');
        $('.table-cart .content table .tr-2').addClass('unActive');
        $('.table-cart .content table .tr-3').addClass('animate__animated animate__fadeInUp');
    });

    $('.table-cart .content table .tr-3 .td-3').click(function(){
        $('.table-cart .content table .tr-1').addClass('animate__animated animate__fadeInUp');
        $('.table-cart .content table .tr-2').addClass('animate__animated animate__fadeInUp');
        $('.table-cart .content table .tr-3').addClass('unActive');
    });

});




