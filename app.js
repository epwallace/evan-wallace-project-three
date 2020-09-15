// create namespace for lite-brite app
const liteBrite = {};

// display an appropriately-sized game board populated with clickable squares
liteBrite.displayBoard = () => {
    const gameBoardWidth = $('.board').width();

    // resize game board's height to form a square
    $('.board').height(gameBoardWidth);

    // set the grid properties appropriately for the initial viewport
    const size = Math.floor(gameBoardWidth / 40);
    $('.board').css({
        'grid-template-columns': `repeat(${size}, 1fr`,
        'grid-template-rows': `repeat(${size}, 1fr`
    });

    // populate the grid with the grid square elements
    const cellCount = size * size;
    for (i = 0; i < cellCount; i++) {
        $('.board').append('<div class="square"></div>');
    }
}

// make the height of grid squares equal to the width
// TODO: refactor to resizeBoard
liteBrite.resizeSquares = () => {
    const newHeight = $(".square").width();
    $(".square").height(newHeight);
    const gameBoardWidth = $('.board').width();
    $('.board').css({'height': `${gameBoardWidth}px`});
}

// add or remove dot from the given square
liteBrite.toggleDot = (square) => {
    // if a dot is present in the square, remove it 
    if (square.children().length > 0) {
            square.empty();
        } else {
            // construct new dot with the correct color applied
            const currentColor = $('.colorChoice.active').attr('id');
            const newDot = $('<div class="dot">').addClass(currentColor);

            // if the lightswitch is on, make the new dot glow
            if ($('#lightswitch').prop('checked')) { 
                $(newDot).addClass('lightup');
            }

            // add the new dot to the DOM
            square.append(newDot);
        }
    }

// add or remove glow effect from dots depending on lightswitch state
liteBrite.toggleLightswitch = () => {
    if ($('#lightswitch').prop('checked')) {
        $('.dot').addClass('lightup');
    } else {
        $('.dot').removeClass('lightup');
    }
}

// set the user's color selection
liteBrite.setColor = (colorSelection) => {
        $('.colorChoice.active').removeClass('active');
        colorSelection.addClass('active');
}

liteBrite.init = function() {
    liteBrite.displayBoard();

    // listen for window being resized
    $(window).on('resize', liteBrite.resizeSquares);

    // listen for color selection tiles being clicked
    $('.colorChoice').on('click', function() {
        liteBrite.setColor($(this));
    })

    // listen for grid squares being clicked
    $('.square').on('click', function() {
        liteBrite.toggleDot($(this));
    });

    // listen for lightswitch being toggled
    $('#lightswitch').on('change', liteBrite.toggleLightswitch);
}

$(document).ready(function() {
    liteBrite.init();
})