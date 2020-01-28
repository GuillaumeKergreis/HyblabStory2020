'use strict';

jQuery(function($){
    // -------------------------------------------------------------
    //   One Item Per Frame
    // -------------------------------------------------------------
    (function () {
        var $frame = $('#oneperframe');
        var $wrap  = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            speed: 1000,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
        }, {
            active: function(evt, index) {
                console.log('Active item : ' + index);
                console.log(this.items[index].el.classList);
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

        // Pause button
        $wrap.find('.next2').on('click', function() {
            $frame.sly('next');
            $frame.sly('next');
        });

        $wrap.find('.next').on('click', function() {
            $frame.sly('next');
        });

        $wrap.find('.prev').on('click', function() {
            $frame.sly('prev');
        });

    }());
});
