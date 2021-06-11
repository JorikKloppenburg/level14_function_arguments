const paint = function (wallName, colour) {
    console.log("The " + wallName + " wall has been painted " + colour)
};

const coulourRed = "red";
const coulourGreen = "green";
const wallNorth = "north";
const wallSouthEast = "south-east";

paint(wallSouthEast, coulourGreen);


//what happens if we call the function without an argument?
// >> coulour will be logged as "undefined"
paint();

//does the order of the arguments matter when calling the function?
// >> YES

//what happens if you switch them in the function definition?
// Dan worden de kleur en naam van de muur omgedraaid.

//what happens if you change the order of the arguments in the function definition and when calling the function?
// Dan worden de kleur en naam van de muur omgedraaid.