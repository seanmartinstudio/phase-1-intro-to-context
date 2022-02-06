
function createEmployeeRecord(array) {
    let obj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: new Array(),
    timeOutEvents: new Array()
    }
    return obj
}

function createEmployeeRecords(array) {
return array.map((elements) => {
    return createEmployeeRecord(elements)
})
}

function createTimeInEvent(object, timeStamp) {
    let timeStampElements = timeStamp.split(' ')
    let timeInObject = {  
    type: "TimeIn",
    hour: parseInt(timeStampElements[1]),
    date: timeStampElements[0]
    }
    object.timeInEvents.push(timeInObject)
    return object
}

function createTimeOutEvent(object, timeStampOut) {
    let timeStampElements = timeStampOut.split(' ')
    let timeOutObject = {  
        type: "TimeOut",
        hour: parseInt(timeStampElements[1]),
        date: timeStampElements[0]
        }
        object.timeOutEvents.push(timeOutObject)
        return object
}

// function hoursWorkedOnDate(object, dateWorked) {
// let date = object.timeInEvents
// let timeInObject = date.find((element) => {
// return element.date === dateWorked
// })
// let timeOut = object.timeOutEvents[0].hour
// console.log("TimeOUt", timeOut)
// let hours = timeOut - timeInObject.hour
// return hours / 100
// }

function hoursWorkedOnDate(object, dateWorked) {
    let dateIn = object.timeInEvents
    let timeInObject = dateIn.find((element) => {
    return element.date === dateWorked
    })

    let dateOut = object.timeOutEvents
    let timeOutObject = dateOut.find((element) => {
    return element.date === dateWorked
    })
    console.log("timeInObject", timeInObject)
    console.log("timeOutObject", timeOutObject)

    let timeOut = object.timeOutEvents[0].hour
    let hours = timeOutObject.hour - timeInObject.hour
    console.log("hours", hours)
    return hours / 100
    }

function wagesEarnedOnDate(object, dateWorked) {
let wage = object.payPerHour
return hoursWorkedOnDate(object, dateWorked) * wage
}

function allWagesFor(object) {
let total = []
let sum = 0
for(let i = 0; i < object.timeInEvents.length; i++) {
    console.log("ThisShouldMatch", object.timeInEvents[i].date)
    let allWages = wagesEarnedOnDate(object, object.timeInEvents[i].date)
    total.push(allWages)
    let sum = total.reduce((previousValue, currentValue) => previousValue + currentValue)
    return sum
    
}
return sum
}








// Test cases
console.log("Test Case for createEmployyRecord:")
console.log('=>',createEmployeeRecord(['sean', 'martin', 'producer', 150]));

console.log("------")

console.log("Test Case for createEmployeeRecords:")

let twoArrays = [
    ['ashley', 'corbin', 'photog', 200],
    ['dan', 'keezer', 'dev', 300]
]

let object = {
    firstName: 'dan',
    familyName: 'keezer',
    title: 'dev',
    payPerHour: 300,
    timeInEvents: [],
    timeOutEvents: []
  }

let timeStamp = "2014-02-28 1400"
let timeStampOut = "2014-02-28 1800"


let date = '2014-02-28'

console.log("=> Test Case for creatTimeInEvent")

console.log("=>", createTimeInEvent(object, timeStamp))

console.log("=> Test Case for createTimeOutEvent")

console.log("=>", createTimeOutEvent(object, timeStamp))

console.log("=> Test Case for function hoursWorkedOnDate")

console.log("=>", hoursWorkedOnDate(object, date))

console.log("=> Test Case for function wagesEarnedOnDate")

console.log("=>", wagesEarnedOnDate(object, date))

console.log("=> Test Case for function allWagesFor")

console.log("=>", allWagesFor(object))





