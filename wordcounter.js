$(document).ready(function () {
    //trigger the current Input
    if ($('#textarea_content').length) {
        setTimeout(function () {
            if ($('#counter').length === 0) {
                $('<div><span id="counter">0</span>&nbsp;<span id="words">W&ouml;rter</span></div>').appendTo('.sceditor-container');
            }

            $('.sceditor-container').children('textarea').bind('keyup', function () {
                $(this).fctCountWords();
            });

            $('.sceditor-container').children('textarea').fctCountWords();
        }, 1000);
    }
});

$.fn.fctCountWords = function () {
    var sCurrent = $(this).val();
    var aCurrent = sCurrent.split(/[\s,]+/);

    if (!sCurrent.trim()) {
        var iCounter = 0;
    } else {
        var iCounter = sCurrent.split(/[\s,]+/).length;
    }
    if (aCurrent[aCurrent.length - 1] === '' && iCounter > 0) {
        iCounter = iCounter - 1;
    }

    $('#counter').html(iCounter);

    if (iCounter === 1) {
        $('#words').html('Wort');
    } else {
        $('#words').html('W&ouml;rter');
    }
};


