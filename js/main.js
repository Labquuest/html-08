$ (document).ready(function() {
    $('.menu-button').click(function(event) {
        $('.menu__burger').addClass('active');
    });
});
$ (document).ready(function() {
    $('.close__menu').click(function(event) {
        $('.menu__burger').removeClass('active');
    });
});