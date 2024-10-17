
const printData = document.getElementById("printResult")

function printNumber(data){
    printData.value += data
}

function clearResult() {
    printData.value = ""
    }

function calculateResult(){
     
    if (eval(printData.value) === undefined){
        printData.value = 'Error, No parameters'
    } else {
        printData.value = eval(printData.value)
    }
    }
