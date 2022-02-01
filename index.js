
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
    // console.log(timeStampElements)
    let timeInObject = {  
    type: "TimeIn",
    hour: parseInt(timeStampElements[1]),
    date: timeStampElements[0]
    }
    object.timeInEvents.push(timeInObject)
    return object
}

function createTimeOutEvent(object, timeStamp) {
    let timeStampElements = timeStamp.split(' ')
    console.log(timeStampElements)
    let timeOutObject = {  
        type: "TimeOut",
        hour: parseInt(timeStampElements[1]),
        date: timeStampElements[0]
        }
        object.timeOutEvents.push(timeOutObject)
        return object
}

function hoursWorkedOnDate(object, dateWorked) {

let date = object.timeInEvents


let timeInObject = date.find((element) => {
return element.date === dateWorked
})
console.log("timeInObject -- Hour", timeInObject)
let timeIn = object.timeInEvents[0].hour
let timeOut = object.timeOutEvents[0].hour
let hours = timeIn - timeOut
return Math.abs(hours) / 100
}


function wagesEarnedOnDate(object, dateWorked) {
let wage = object.payPerHour
return hoursWorkedOnDate(object) * wage
}









//Test cases
// console.log("Test Case for createEmployyRecord:")
// console.log('=>',createEmployeeRecord(['sean', 'martin', 'producer', 150]));

// console.log("------")

// console.log("Test Case for createEmployeeRecords:")

let twoArrays = [
    ['ashley', 'corbin', 'photog', 200],
    ['dan', 'keezer', 'dev', 300]
]
console.log(createEmployeeRecords(twoArrays))

let object = {
    firstName: 'dan',
    familyName: 'keezer',
    title: 'dev',
    payPerHour: 300,
    timeInEvents: [],
    timeOutEvents: []
  }

let timeStamp = "2014-02-28 1400"

let date = '2014-02-28'

console.log("Test Case for creatTimeInEvent")

console.log("=>", createTimeInEvent(object, timeStamp))

console.log("Test Case for createTimeOutEvent")

console.log("=>", createTimeOutEvent(object, timeStamp))

console.log("Test Case for function hoursWorkedOnDate")

console.log("=>", hoursWorkedOnDate(object, date))

console.log("Test Case for function wagesEarnedOnDate")

console.log("=>", wagesEarnedOnDate(object, date))





