function getAndConfigureVideo(id){
    let video = document.getElementById(id);
    video.playbackRate = 0.5;
    video.currentTime = 0;
    video.style.visibility = "visible";
    return(video)
}

function decorTransitionPeriod(periodFrom, periodTo) {
    var $video = getAndConfigureVideo('door_' + periodFrom);

    $video.play();
    $("#decor_hider").fadeIn(1000);
    setTimeout(function () {
        document.getElementById("bg-decor").setAttribute('src', 'img/decors/decor_' + periodTo + '.webp');
    }, 1200);

    setTimeout(function () {
        var $nextvideo = getAndConfigureVideo('door_' + periodTo + '_rev');

        $video.style.visibility = "hidden";

        $nextvideo.play();
        setTimeout(function () {
            $("#decor_hider").fadeOut(1000);
        }, 1000);

        $nextvideo.addEventListener('ended', () => {
            $nextvideo.style.visibility = "hidden";
        }, false);
    }, 500);
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
