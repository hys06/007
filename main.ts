let _111 = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    _111 = randint(0, 10)
    basic.showNumber(_111)
    if (_111 > 5) {
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        music.playMelody("C D E F G A B C5 ", 120)
    }
    basic.clearScreen()
})
