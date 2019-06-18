var n = 0

$('button').eq(0).click(function () {
  n++
  change()
})

$('button').eq(1).click(function () {
  n--
  change()
})

let timer = setInterval(function () {
  n--
  console.log(n)
  change()
}, 3000)

$('ul').hover(function () {
  window.clearInterval(timer)
}, setTimer)


function setTimer() {
  timer = setInterval(function () {
    n--
    console.log(n)
    change()
  }, 3000)
}

function change() {
  $('ul').removeClass('state1 state2 state3')
  $('ul').addClass('state' + Math.abs((n % 3)))
}