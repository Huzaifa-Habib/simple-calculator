

function valueButton (v) {
    var calculatedResult=document.getElementById("screen")
    calculatedResult.value += v

}

function toClear() {
    var calculatedResult = document.getElementById("screen");
    calculatedResult.value="" ;
}

function toGetResult () {
    var numbers  = document.getElementById("screen").value;
    var total = eval(numbers)
    document.getElementById("screen").value=total
  

}




