(function ($) {
    $(function () {
        var $authPopup = $('#popup-auth');
        var $authBtn = $('#btn-auth');
        var $regPopup = $('#popup-registration');

        var $regBtn = $('#btn-registration');
        var $screen = $('.screen');

        var $forgetBtn = $('#btn-forget');
        var $screenInside = $('.screen--inside');
        var $forgotPopup = $('#popup-forgot');

        $forgetBtn.on('click', function (e) {
            e.preventDefault();
            var top = $(window).scrollTop();
            $screenInside
                .show()
                .on('click', function (e) {
                    e.preventDefault();
                    $screenInside.hide();
                    $forgotPopup.hide();
                });
            $forgotPopup.show().css('top', 100 + 'px');

            $forgotPopup.find('.close-block__link')
                .on('click', function (e) {
                    e.preventDefault();
                    $forgotPopup.hide();
                    $screenInside.hide();
                });
        });

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
            $authPopup.show().css('top', 100 + 'px');

            $authPopup.find('.close-block__link')
                .on('click', function (e) {
                    e.preventDefault();
                    $authPopup.hide();
                    $screen.hide();
                });
        });
        $regBtn.on('click', function (e) {
            e.preventDefault();
            var top = $(window).scrollTop();
            $screen
                .show()
                .on('click', function (e) {
                    e.preventDefault();
                    $screen.hide();
                    $regPopup.hide();
                });
            $regPopup.show().css('top', 10 + 'px');

            $regPopup.find('.close-block__link')
                .on('click', function (e) {
                    e.preventDefault();
                    $regPopup.hide();
                    $screen.hide();
                });
        });
    });
})(jQuery);
