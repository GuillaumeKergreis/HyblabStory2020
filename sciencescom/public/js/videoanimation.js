function playAnimation(id) {
    var $video = document.getElementById(id);
    $video.playbackRate = 0.5;
    $video.currentTime = 0;
    $video.style.visibility = "visible";

    setTimeout(function () {
        $video.play();
    }, 0);

    setTimeout(function () {
        $video.style.visibility = "hidden";
    }, 900);
}


function decorTransition(decorFrom, decorTo, videoOut, videoIn, jumps) {
    var $video = document.getElementById(videoOut);

    $video.playbackRate = 0.5;
    $video.currentTime = 0;
    $video.style.visibility = "visible";

    $video.play();
    $("#decor_hider").fadeIn(1000);
    setTimeout(function () {
        document.getElementById(decorFrom).style.visibility = "hidden";
        document.getElementById(decorTo).style.visibility = "visible";
    }, 1200);


    $video.addEventListener('ended', () => {
        var $nextvideo = document.getElementById(videoIn);
        $nextvideo.playbackRate = 0.5;
        $nextvideo.currentTime = 0;
        $nextvideo.style.visibility = "visible";

        $video.style.visibility = "hidden";

        $nextvideo.play();
        setTimeout(function () {
            $("#decor_hider").fadeOut(1000);
        }, 1000);

        $nextvideo.addEventListener('ended', () => {
            $nextvideo.style.visibility = "hidden";
        }, false);

    }, false);



    for (i = 0; i < jumps; i++) {
        $('#oneperframe').sly('next');
    }
}


function nowToSeventies(jumps) {
    decorTransition("decor", "decor2", "doornow", "door70s_rev", jumps);
}