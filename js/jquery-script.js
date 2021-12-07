// Anatomy of JQuery
// Shortcuts - JQuery with a $
// Listener
// Function as a parameter/argument - Callback functions

$(document).ready(function() {
    $('h1').click(function() {
        // Some event handlers take in parameters
        // fadeOut, fadeIn, hide, show
        // https://www.w3schools.com/jquery/jquery_fade.asp
        $('img').animate({ right: '250px' }, 'slow');
    })

    $('img').click(function() {
        alert('You clicked on an image')
    })
})