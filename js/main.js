$(function() {
    FastClick.attach(document.body);

    $(document).on('click','.tryAgain',function(){
        duckhunt.retry();
    });

    $(document).on('click','.doit',function(){
        let LCwaves = parseInt($("#LCwaves").val());
        let LCducks = parseInt($("#LCducks").val());
        let LCbullets = parseInt($("#LCbullets").val());
        let LCwavetime = parseInt($("#LCwavetime").val());
        let LCdif = parseInt($("#LCdif").val());

        duckhunt.clearField();

        duckhunt.loadLevel({
            id: 0,
            title: 'Nivel 1',
            waves: LCwaves,
            ducks: LCducks,
            pointsPerDuck: 200,
            speed: LCdif,
            bullets: LCbullets,
            time: LCwavetime
        })
    });

$(document).ready(function(){
    $('#StartButton').click(function() {
        duckhunt.init(); 
        duckhunt.loadLevel(levels[0]);
        $('#StartButton').toggle();
    });
});

});

function addCommas(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}