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



//Test Cases
console.log("Test Case Below:")
console.log('=>',createEmployeeRecord(['sean', 'martin', 'producer', 150]));

console.log("------")

console.log(obj)



