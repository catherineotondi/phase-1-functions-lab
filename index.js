// Code your solution in this file!
// function distanceFromHqInBlocks(someValue) {
//     return Maths.abs(someValue);
// }
//  distanceFromHqInBlocks(43)

function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue-42);
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264 ;
}

function distanceTravelledInFeet(start, destination) {
    let distTravelled= Math.abs(destination-start);
    return distTravelled*264; 
}

function calculatesFarePrice(start, destination){
    let distTrav2= distanceTravelledInFeet(start,destination);
    if(distTrav2<=400){ 
        return 0
    }else if(distTrav2>400 && distTrav2<=2000){
        return (distTrav2-400)*0.02;
    }else if(distTrav2>2000 && distTrav2<2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
