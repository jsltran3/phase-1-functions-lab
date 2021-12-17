// Code your solution in this file!

const distanceFeet = 264; 
const startPoint = 42; 

function distanceFromHqInBlocks(bk) {
    let numOfBlocks = startPoint - bk; 
    return Math.abs(numOfBlocks);
}

function distanceFromHqInFeet (ft) {
    return distanceFromHqInBlocks(ft) * distanceFeet; 
}

function distanceTravelledInFeet(st, ed) {
    let blocksTravelled = ed - st; 
    return Math.abs(blocksTravelled) * distanceFeet; 
}

function calculatesFarePrice(a, b) {
    let afterFreeSample = Math.abs(distanceTravelledInFeet(a, b) - 400) 
    if (Math.abs(distanceTravelledInFeet(a, b)) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(a, b) > 401 && distanceTravelledInFeet(a, b) <= 2000) {
        //return Math.abs((distanceTravelledInFeet(a, b) - freeSample) * 0.02);
        return Math.abs(afterFreeSample * 0.02);
    } else if (distanceTravelledInFeet(a, b) > 2000 && distanceTravelledInFeet(a, b) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(a, b) > 2500) {
        return 'cannot travel that far'
    }
}