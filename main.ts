// 進球後，把球拿出來再按 A 再繼續比賽
input.onButtonPressed(Button.A, function () {
    可以射門 = 1
})
// 按 B 重新設定遊戲
input.onButtonPressed(Button.B, function () {
    分數 = 0
    可以射門 = 1
    basic.showNumber(分數)
})
let 可以射門 = 0
let 分數 = 0
分數 = 0
可以射門 = 1
basic.showNumber(分數)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        if (可以射門 == 1) {
            分數 += 1
            可以射門 = 0
        }
    }
})
