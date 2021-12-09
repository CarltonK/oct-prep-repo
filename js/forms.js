$(document).ready(function() {
    // Submit, focus, val
    $("#blanks form").submit(function(event) {
        // Input
        var email = $('input#email').val()
        var password = $('input#password').val()
        var signin = $('input:radio[name=signin]:checked').val();

        console.log('Remember Me? ', signin)

        //  Output
        $('.email').append(email);
        $('.password').append(password);

        event.preventDefault();
    });
});