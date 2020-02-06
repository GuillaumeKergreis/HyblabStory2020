'use strict';

jQuery(function ($) {
    // -------------------------------------------------------------
    //   One Item Per Frame
    // -------------------------------------------------------------
    (function () {
        var $frame = $('#oneperframe');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 0,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBy: 1,
            speed: 1000,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
            next: $('#firstpage-slide'),
        }, {
            active: function (evt, index) {
                console.log('Active item : ' + index);
                console.log(this.items[index].el.classList);
                if (index === 1) {
                    setTimeout(function () {
                        var x = document.getElementsByClassName("logo");
                        var i;
                        for (i = 0; i < x.length; i++) {
                            x[i].src = x[i].src.replace("_w", "_b");
                        }
                    }, 300);
                    setTimeout(function () {
                        window.location.href = window.location.href + 'story';
                    }, 800);
                };

                if (this.items[index].el.classList.contains('stop-scroll')) {
                    $frame.sly('set', {
                        scrollBy: 0,
                        dragHandle: 0,
                        dynamicHandle: 0,
                        clickBar: 0,
                        mouseDragging: 0,
                        touchDragging: 0,
                    });
                }
                else {
                    $frame.sly('set', {
                        scrollBy: 1,
                        dragHandle: 1,
                        dynamicHandle: 1,
                        clickBar: 1,
                        mouseDragging: 1,
                        touchDragging: 1,
                    });
                }
            }
        }
        );

    }());
});