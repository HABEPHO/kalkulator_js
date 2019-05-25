maxlen = 20
nub = 0
last = null
lenliczby = 0
error = "liczba poza zakresem max/min"
function Click(number) {
  if (nub<=maxlen) {
    my_display.value += number
    last = number
    nub++
  }
}
function Result() {
  var x = eval(my_display.value)
  my_display.value = x
  nub = 1
}
function Separator(znak) {
  if (nub != 0 && typeof(last) != typeof(znak)) {
    my_display.value += znak
    last = znak
    nub = 0
  }
}
function Clear() {
  my_display.value = ''
  nub=0
}
