// Code your solution in this file!

const array = [1, 2, 3, 4, 5]
const returnFirstTwoDrivers = (array) =>{
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) =>{
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fare = 10
const createFareMultiplier = (x) =>{
    return (fare) =>{
        return fare *x
    }
}

const fareDoubler = (createFareMultiplier) =>{
    return createFareMultiplier *2
}

console.log(fareDoubler(fare))

const fareTripler = (createFareMultiplier) =>{
    return createFareMultiplier * 3
}

const selectDifferentDrivers = (array, fn) =>{
    return fn(array)
}

