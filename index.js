// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
    let newArray = array.slice(0,2)
    return newArray
}

const returnLastTwoDrivers = (array) => {
    let newArray = array.slice(-2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return function(fare) {
        return  fare * multiplier 
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)




const selectDifferentDrivers = (arrayOfDrivers, myFunction) => {
    return myFunction(arrayOfDrivers)
}