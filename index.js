// Your code here


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

function createEmployeeRecords (array) {
return array.map((elements) => {
    return createEmployeeRecord(elements)
})
}

function createTimeInEvent(object, timeStamp) {

}


//Test cases
// console.log("Test Case for createEmployyRecord:")
// console.log('=>',createEmployeeRecord(['sean', 'martin', 'producer', 150]));

// console.log("------")

// console.log("Test Case for createEmployeeRecords:")

// let twoArrays = [
//     ['ashley', 'corbin', 'photog', 200],
//     ['dan', 'keezer', 'dev', 300]
// ]
// console.log(createEmployeeRecords(twoArrays))

let object = ['dan', 'keezer', 'dev', 300]
let timeStamp = "2014-02-28 1400"

console.log(createTimeInEvent(object, timeStamp))





