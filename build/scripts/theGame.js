function CountdownTimer(elm, tl, mes) {
    this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
    initialize: function (elm, tl, mess) {
        this.elem = document.getElementById(elm);
        this.tl = tl;
        this.mes = mess;
    }, countDown: function () {
        var timer = '';
        var today = new Date();
        var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        var me = this;

        if (( this.tl - today ) > 0) {
            timer += '' +
                '<div class="badge-counter__list">' +
                    '<div class="badge-counter__item badge-counter__item--min">' + this.addZero(min) + '</div>' +
                    '<div class="badge-counter__item badge-counter__item--min">' + this.addZero(sec) + '</div>' +
                '</div>';

            var test1 = setInterval('addReadyClass()', 10000);
            var test2 = setInterval('removeReadyClass()', 20000);

            setTimeout(function () {
                clearInterval(test1);
                clearInterval(test2);
            }, 15000);


            this.elem.innerHTML = timer;
            tid = setTimeout(function () {
                me.countDown();
            }, 10);
        } else {
            this.elem.innerHTML = this.mes;
            return;
        }
    }, addZero: function (num) {
        return ('0' + num).slice(-2);
    }
}
function addReadyClass() {
    $('.badge-image__locker').addClass('badge-image__locker--ready');
}
function removeReadyClass() {
    $('.badge-image__locker').removeClass('badge-image__locker--ready');
}
function counter() {
    var tl = new Date('2019/01/01 00:00:00');
    var mess = console.log('time is over')
    var timer = new CountdownTimer('counter', tl, mess);

    timer.countDown();
}

window.onload = function () {
    counter();

};

