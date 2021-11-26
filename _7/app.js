let coordinates = {
 x: 12,
 y: 99
}

function returnCoordinates() {
 console.log("X: "+this.x);
 console.log("Y: "+this.y);
}

let getCoordinates = returnCoordinates.bind(coordinates)
getCoordinates();