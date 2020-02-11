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
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBy: 1,
            speed: 2500,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 0,
            dynamicHandle: 1,
            clickBar: 0,
            scrollTrap: 1
        }, {
            active: function(evt, index) {
                let timeSlider = document.getElementById("timeSlider");
                let moveSliderIndexes = [0, 1, 4, 7, 8];

                if (moveSliderIndexes.includes(index)) {
                    timeSlider.value = moveSliderIndexes.indexOf(index);
                }

                let select = this.items[index].el.getElementsByClassName("inslide-decor");
                if (select.length > 0) {
                    let srcFrom = document.getElementById("bg-decor").getAttribute('src');
                    let srcTo = select[0].getAttribute('src');
                    if (srcFrom !== srcTo){
                        decorTransition(srcFrom, srcTo);
                    }
                }


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
                        dragHandle: 0,
                        dynamicHandle: 1,
                        clickBar: 0,
                        mouseDragging: 1,
                        touchDragging: 1,
                    });
                }
                launchSpeech(index);
                hideInviteToScroll();
            }
            }
        );

        // Pause button
        $wrap.find('.next2').on('click', function () {
            $frame.sly('next');
            $frame.sly('next');
        });

        $wrap.find('.next').on('click', function () {
            $frame.sly('next');
        });

        $wrap.find('.prev').on('click', function () {
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
        case 5:
            speak('Pablo', index);
            break;
        case 6:
            speak('Pablo', index);
            break;
        case 10:
            speak('Emma', index, 2);
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
    slide = parseInt(slide);
    if (![2, 3, 8, 9].includes(slide)) {
        if (slide === 1) {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue_periode_1;
        } else if ([4, 5, 6].includes(slide) && personne === 'Emma') {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue_periode_2;
            document.getElementById('textBox' + slide).style.width = '26vw';
            document.getElementById('textBox' + slide).style.left = '4vw';
        } else if (personne === 'Alain') {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue;
            document.getElementById('textBox' + slide).style.width = '28vw';
            document.getElementById('textBox' + slide).style.left = '2vw';
        } else {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue;
            document.getElementById('textBox' + slide).removeAttribute("style");
        }


        let options = {
            strings: Personnage[personne].dialogues[slide][paragraph].texte,
            typeSpeed: 30,
            fadeOut: true
        };

        if (Personnage[personne].dialogues[slide][paragraph].suivant) options.onComplete = (self) => {
            self.destroy();
            speak(
                Personnage[personne].dialogues[slide][paragraph].suivant.personnage,
                Personnage[personne].dialogues[slide][paragraph].suivant.slide,
                Personnage[personne].dialogues[slide][paragraph].suivant.paragraphe
            );
        };
        else if (slide === 0) {
            inviteToScroll();
        }
        else if (slide === 1) {
            options.onComplete = (self) => {
                document.getElementById('lettre-icon').classList.add('bounce');
                document.getElementById('livre-icon').classList.add('bounce');
                document.getElementById('lettre-icon').addEventListener('click', () => self.destroy());
                document.getElementById('livre-icon').addEventListener('click', () => self.destroy());
            }
        }
        else if (slide === 4) {
            options.onComplete = (self) => {
                document.getElementById('alain').classList.add('bounce');
                document.getElementById('martine').classList.add('bounce');
                document.getElementById('alain').addEventListener('click', () => self.destroy());
                document.getElementById('martine').addEventListener('click', () => self.destroy());
            }
        }
        else if (slide === 5) {
            options.onComplete = (self) => {
                document.getElementById('martineNext').classList.add('bounce');
                document.getElementById('martineNext').addEventListener('click', () => self.destroy());
                inviteToScroll();
            }
        }
        else if (slide === 6) {
            options.onComplete = (self) => {
                document.getElementById('alainNext').classList.add('bounce');
                document.getElementById('alainNext').addEventListener('click', () => self.destroy());
                inviteToScroll();
            }
        }
        else if (slide === 7) {
            options.onComplete = (self) => {
                document.getElementById('video-icon').classList.add('bounce');
                document.getElementById('carte-icon').classList.add('bounce');
                document.getElementById('video-icon').addEventListener('click', () => self.destroy());
                document.getElementById('carte-icon').addEventListener('click', () => self.destroy());
                document.getElementById('Emma-slide-7').style.transform = 'scaleX(-1)';
            }
        }
        else if (slide === 10) {
            showCreditLink();
            hideInviteToScroll();
        }
        else options.onComplete = (self) => self.destroy();

        new Typed('#textBoxTyped' + slide, options);
    }
    else inviteToScroll();
}

function inviteToScroll() {
    document.getElementById('mouse-scroll-tip').style.display = 'inline';
}

function hideInviteToScroll() {
    document.getElementById('mouse-scroll-tip').style.display = 'none';
}

function showCreditLink() {
    document.getElementById('credits').style.opacity = '1';
}
