jQuery(document).ready(function() {
    jQuery(".js-video-button").modalVideo({
        channel: 'vimeo'
    });
    $(".floting-icon").click(function() {
        $(".floating-div").toggleClass("float")
    })
});