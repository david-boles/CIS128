$(document).ready(function()    {
    $('#animate').on("click", animate);
});

function animate () {
    $('#main-header').animate({
        fontSize: 64,
        color: jQuery.Color({ saturation: 1, lightness: 0.5 })
    }, 1000).animate({
        color: jQuery.Color({ hue: 180 })
    }, 2500, function() {
        $('#main-header').animate({
            color: jQuery.Color({ hue: 359 })
        }, 2500);

        setTimeout(function() {
            $('#main-header').animate({
                fontSize: 32,
                color: jQuery.Color({ lightness: 0 })
            }, 1000)
        }, 1500);
    });

    $('#image').animate({
        "border-width": 10,
        "border-color": jQuery.Color({ saturation: 1, lightness: 0.5 })
    }, 1000).animate({
        "border-color": jQuery.Color({ hue: 180 })
    }, 2500, function() {
        $('#image').animate({
            "border-color": jQuery.Color({ hue: 359 })
        }, 2500);

        setTimeout(function() {
            $('#image').animate({
                "border-width": 0,
                "border-color": jQuery.Color({ lightness: 0 })
            }, 1000)
        }, 1500);
    });
}