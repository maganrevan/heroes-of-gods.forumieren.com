$(document).ready(function () {
    setTimeout(function () {
        /*Beginn Postsicherung*/
        if ($('.sceditor-container').find('textarea').length !== 0) {
            if (localStorage.getItem("post") !== '' && localStorage.getItem("post") !== null) {
                var bConfirm = confirm("Möchten Sie den letzten Post wieder laden?");
            }

            $('.submit-buttons').find('.button2, .button1').bind('click', function () {
                fctDeletePost("post");
            });

            if (bConfirm === true) {
                $('.sceditor-container').children('textarea').val(localStorage.getItem('post').replace(/<br[^>]*>/g, "\n"));
                fctDeletePost("post");
            } else {
                fctDeletePost("post");
            }

            $('.sceditor-container').children('textarea').bind('keyup', function () {
                localStorage.setItem("post", $(this).val().replace(/\n/g, '<br/>'));
            });
        }
        /*Ende Postsicherung*/
    }, 1000);
});

fctDeletePost = function (name) {
    localStorage.setItem(name, '');
};

