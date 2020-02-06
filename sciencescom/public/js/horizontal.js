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
                launchSpeech(index);
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


/**
 * Launch the text for the slide associated to the index
 * @param {int} index
 */
function launchSpeech(index) {
    index = parseInt(index);
    switch(index) {
        case 2:
            break;
        case 3:
            break;
        case 5:
            speak('Pablo', index);
            break;
        case 6:
            speak('Pablo', index);
            break;
        default:
            speak('Emma', index);
            break;
    }
}

/**
 *
 * @param personne
 * @param {int} slide
 * @param {int} paragraph
 */
function speak(personne, slide, paragraph= 0) {
    if (![2, 3].includes(slide)) {
        if (slide === 1) {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue_periode_1;
        } else if ([4, 5, 6].includes(slide) && personne === 'Emma') {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue_periode_2;
        } else document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue;


        let options = {
            strings: Personnage[personne].dialogues[slide][paragraph].texte,
            typeSpeed: 30
        };

        if (Personnage[personne].dialogues[slide][paragraph].suivant) options.onComplete = (self) => {
            self.destroy();
            speak(
                Personnage[personne].dialogues[slide][paragraph].suivant.personnage,
                Personnage[personne].dialogues[slide][paragraph].suivant.slide,
                Personnage[personne].dialogues[slide][paragraph].suivant.paragraphe
            );
        };
        else if ([0, 3, 4, 6, 7, 9].includes(slide)) options.onComplete = () => {
            self.destroy();
            inviteToScroll();
        };

        new Typed('#textBoxTyped' + slide, options);
    }
}

function inviteToScroll() {
    document.getElementById('mouse-scroll-tip').style.display = 'inline';
}
