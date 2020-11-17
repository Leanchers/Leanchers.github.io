'use strict';

$('document').ready(function () {
    (function () {
        var quizModal = new Kmodal('#quiz');

        $('[data-change-question-to]').on('click', function () {
            var question = $(this).attr('data-change-question-to');
            $('.quiz__group').removeClass('quiz__group_active');
            $('[data-question="' + question + '"]').addClass('quiz__group_active');
        });
    })();
});