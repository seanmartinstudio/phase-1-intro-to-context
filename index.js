// Your code here

// function createEmployeeRecord(array) {
//     let obj = {}
//     let timeInEvents = []
//     let timeOurEvents = []
//     // array[0] = firstName
//     obj.familyName = familyName
//     obj.title = title
//     obj.payPerHour = payPerHour
// }

let twoArrays = [
    ['ashley', 'corbin', 'photog', 200],
    ['dan', 'keezer', 'dev', 300]
]

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
// accept array of multiple arrays
// parse each array by index value 
array.forEach((elements) => {
    createEmployeeRecord(elements)
    
    
})
return array
}



//Test cases
console.log("Test Case for createEmployyRecord:")
console.log('=>',createEmployeeRecord(['sean', 'martin', 'producer', 150]));

console.log("------")

console.log("Test Case for createEmployeeRecords:")

// let twoArrays = [
//     ['ashley', 'corbin', 'photog', 200],
//     ['dan', 'keezer', 'dev', 300]
// ]
createEmployeeRecords(twoArrays)





