function playStartSound(){
    var audio = new Audio('../sound/a6_sine_250ms.ogg');
    audio.play();
}

function playStopSound(){
    var audio = new Audio('../sound/a6_sine_100ms_end.ogg');
    audio.play();
}

function playIntervalSound(){
    var audio = new Audio('../sound/a6_sine_750ms.ogg');
    audio.play();
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};