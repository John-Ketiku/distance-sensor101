let DistanceTOObject = 0
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.forever(function () {
    DistanceTOObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(DistanceTOObject)
})
