$(document).ready(function () {

    var regForm = $('#contactForm1');

    regForm.submit(function (e) {

        e.preventDefault();

        console.log(regForm.attr('action'));

        $.ajax({
            type: regForm.attr('method'),
            url: regForm.attr('action'),
            data: regForm.serialize(),
            success: function (data) {
                console.log('Submission was successful.');
                console.log(data);
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });
    });

});