# Project 3: Scope Proposal

## Description of Project
I plan on creating a digital version of the classic Lite-Brite game designed by
Hasbro. In this game, users create light-up art by inserting plastic pegs into
a backlit game board. Using jQuery, I will allow users to add digital pins to a
digital board and flick a digital light switch.

## MVP Goals
For my MVP, I would like to implement what I consider to be the barebones functionality of the Lite-Brite experience:
1) The user must be able to **select a peg colour**.
2) the user must be able to click the game board to **place or remove a coloured peg**.
3) The user must be able to **toggle the lights**, causing the pegs to light up or dim.

Additionally:
4) The game must be **responsive**: different sizes of grids will fit comfortable on mobile, tablet, and desktop, but the game should be comfortable to play on any device.

## Stretch Goals
1) **Templates**: Lite-Brite comes with template sheets that can be attached to the board to facilitate the creation of light-up masterpieces. These templates guide the users to place the correct pegs in the correct slots to recreate a desired image. If time permits, I will implement templates that help users draw light-up emoji. This would involve placing visual cues on each square (like an 'X') to show where pegs should be placed to recreate the image, as well as blocking off regions of the board that should be empty.
2) **Visual effects**: I would like to add lighting effects wherever possible. I think it would be cool if the pegs and the board twinkled/glowed dynamically when user turned the light switch on. I might also cause the light to affect HTML elements, like causing containers and buttons to cast shadows when the lights are on.
3) **Audio effects**: I would like to add sound effects for pegs clicking into place/being removed, the light switch clicking when it's toggled, and add a buzzing sound for the light bulb when the lights are on.

## Pseudocode
```
/* user is able to interact with a game board,
   a color selection panel, and a lightswitch */
 

// lights are off by default
set lightsOn = false

// user can turn lights on/off by clicking
detect click on lightswitch
toggle boolean value of lightsOn
if lightsOn === true ->
    add glow effect to all pegs currently in the board
else ->
    remove glow effect from all pegs currently in the board


// default color is red
set colorSelection = red

// user can change color 
detect click on color option
capture clicked color in variable -> newColorSelection
set colorSelection = newColorSelection

// add/remove a coloured peg when user clicks on game board
detect click on game board
if there’s a peg in clicked location ->
    remove peg
else ->
    if lightsOn ->
        add glowing peg with color colorSelection
    else ->
        add non-glowing peg with color colorSelection

```

## Wireframe
![A schematic of a website titled 'Evan's fantastic digital Lite-Brite](./assets/wireframe.svg)
