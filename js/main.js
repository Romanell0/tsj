$(function () {
    $(".fancybox").fancybox();

    var owl = $("#owl-slider");
    owl.owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "goDown"
    });
    $(".next").click(function () {
        owl.trigger('owl.next');
    });
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
});