//This isn't something functional for the request, 
//it just for trying the nodeJs environment
function sum(num1, num2) {
    return(num1+num2)
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(6,6, sum))

//------------------------------------------

function date(callback) {
    console.log(new Date)
    setTimeout(function () {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)