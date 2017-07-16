
(function ($) {
    $(function () {
        var $authPopup = $('#popup-auth');
        var $authBtn = $('#btn-auth');
        var $regPopup = $('#popup-registration');
        var $regBtn = $('#btn-registration');
        var $screen = $('.screen');

        $authBtn.on('click', function (e) {
            e.preventDefault();
            var top = $(window).scrollTop();
                $screen
                    .show()
                    .on('click', function (e) {
                        e.preventDefault();
                        $screen.hide();
                        $authPopup.hide();
                    });
                $authPopup.show().css('top',top+50+'px');

                $authPopup.find('.close-block__link')
                .on('click', function (e) {
                    e.preventDefault();
                    $authPopup.hide();
                    $screen.hide();
                });
        });
    });
})(jQuery);