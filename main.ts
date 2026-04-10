input.onPinPressed(TouchPin.P0, function () {
    music.play(music.createSoundExpression(
    WaveShape.Noise,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(6)
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(0)
    radio.sendString("Hello")
})
