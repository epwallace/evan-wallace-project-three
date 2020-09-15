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
liteBrite.resizeBoard = () => {
    const squareWidth = $(".square").width();
    $(".square").height(squareWidth);
    const gameBoardWidth = $('.board').width();
    $('.board').height(gameBoardWidth);
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
liteBrite.toggleGlow = () => {
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

// hide and show color tiles
liteBrite.hideColorTiles = () => {
    $('#colorTiles').hide();
}

liteBrite.showColorTiles = () => {
    $('#colorTiles').show();
}

// propagate color choices made through the dropdown menu to the color selection tiles
liteBrite.propagateKeyboardColorChoice = () => {
    // determine which color was selected in the dropdown
    const selection = ($('#colorDropdown').val());

    // select color tile with ID matching the value from the dropdown
    const colorTile = $(`#${selection}`);

    // set the active color as the color tile had been clicked by mouse
    liteBrite.setColor(colorTile);
}

liteBrite.init = function() {
    liteBrite.displayBoard();

    // listen for window being resized
    $(window).on('resize', liteBrite.resizeBoard);

    // listen for dropdown menu being focused and unfocused
    $('#colorDropdown').on('focus', liteBrite.hideColorTiles);
    $('#colorDropdown').on('focusout', liteBrite.showColorTiles);

    // listen for color choice from the keyboard-accessible dropdown menu
    $('#colorDropdown').on('change', this.propagateKeyboardColorChoice);

    // listen for color selection tiles being clicked
    $('.colorChoice').on('click', function() {
        liteBrite.setColor($(this));
    });

    // listen for grid squares being clicked
    $('.square').on('click', function() {
        liteBrite.toggleDot($(this));
    });

    // listen for lightswitch being toggled
    $('#lightswitch').on('change', liteBrite.toggleGlow);
}

$(document).ready(function() {
    liteBrite.init();
})