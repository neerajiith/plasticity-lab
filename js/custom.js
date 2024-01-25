$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li.active').removeClass('active');

        var $parent = $(this).parent();
        var $targetUrl = $(this).prop("href");
       
        window.location = $targetUrl;
        e.preventDefault();
        $parent.addClass('active');
    });
});