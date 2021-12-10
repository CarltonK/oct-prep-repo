// Anatomy of JQuery
// Shortcuts - JQuery with a $
// Listener
// Function as a parameter/argument - Callback functions

var globalVar;

$(document).ready(function() {
    // Tag name#id name
    $('button#light').click(function() {
        var buttonVariable;
        $('body').css('background-color', 'white')
    })
    $('button#dark').click(function() {
        // Add items to the top
        $('body').css('background-color', 'grey')
        $('ul#left').prepend('<li>Top</li>');
        $('ul#right').prepend('<li>Not Top</li>');
    })
    $('button#add').click(function() {
        $('ul#left').append('<li>New List Item added via JQuery</li>');
        $('ul#right').append('<li>This is the opposite</li>');

    })
    $('button#remove').click(function() {
        $('ul#left').children('li').first().click(function() {
            // this keyword
            $(this).remove();
        });
    })
})