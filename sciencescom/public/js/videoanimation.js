function getAndConfigureVideo(id){
    let video = document.getElementById(id);
    video.playbackRate = 0.5;
    video.currentTime = 0;
    $(video).show();
    return(video)
}

function decorTransitionPeriod(periodFrom, periodTo) {
    let $video = getAndConfigureVideo('door_' + periodFrom);

    $video.play();
    $("#decor_hider").fadeIn(1000);
    setTimeout(function () {
        document.getElementById("bg-decor").setAttribute('src', 'img/decors/decor_' + periodTo + '.webp');
    }, 1200);

    setTimeout(function () {
        let $nextvideo = getAndConfigureVideo('door_' + periodTo + '_rev');

        $($video).hide();

        $nextvideo.play();

        $nextvideo.addEventListener('ended', () => {
            $($nextvideo).hide();
        }, false);
    }, 500);

    setTimeout(function () {
        $("#decor_hider").fadeOut(1000);
    }, 1500);
}


function getPeriodFromImgSrc(string){
    let split = string.split('_');
    split = split[split.length-1];
    split = split.split('.');
    split = split[0];
    return(split)
}

function decorTransition(srcFrom, srcTo) {
    return decorTransitionPeriod(getPeriodFromImgSrc(srcFrom), getPeriodFromImgSrc(srcTo))
}
