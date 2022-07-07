enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    receivedNumber,
    hackbitmotors.Motors.M1B,
    receivedNumber
    )
})
input.onButtonPressed(Button.A, function () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    150,
    hackbitmotors.Motors.M1B,
    150
    )
    radio.sendNumber(100)
})
input.onButtonPressed(Button.AB, function () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    0,
    hackbitmotors.Motors.M1B,
    0
    )
    radio.sendNumber(-100)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    0,
    hackbitmotors.Motors.M1B,
    0
    )
    radio.sendNumber(0)
})
radio.setGroup(1)
