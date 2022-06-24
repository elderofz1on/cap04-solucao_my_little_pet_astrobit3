input.onGesture(Gesture.Shake, function () {
    susto = 0
    if (brincar >= 10) {
        brincar += -10
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onSound(DetectedSound.Loud, function () {
    brincar = 0
    susto = 1
    soundExpression.slide.playUntilDone()
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
let susto = 0
let brincar = 0
brincar = 0
susto = 0
basic.forever(function () {
    if (susto == 0) {
        if (brincar <= 50) {
            basic.pause(1000)
            brincar += 1
        } else {
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                # # # # #
                . . . . .
                `)
            soundExpression.sad.playUntilDone()
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(500)
        }
    } else if (susto == 1) {
        susto = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . . . . #
            . . # # .
            `)
    }
})
