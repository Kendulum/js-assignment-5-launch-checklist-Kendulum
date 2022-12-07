// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
             `
}

// validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 
function validateInput(testInput) {
	
	if (testInput === "") {
    return "Empty"; 
			
   } else if (isNaN(testInput) === true) {
    return "Not a Number";
			
   } else if (isNaN(testInput) === false) {
    return "Is a Number";
   }

}

// formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");
   
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
       alert("All fields are required! Please populate empty field or fields.");

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field! Name should be text and Fuel/Cargo should be numers.");

    } else {
        pilotStatus.innerHTML = `Pilot, ${pilot}, is ready.`;
        copilotStatus.innerHTML = `Co-Pilot, ${copilot}, is ready.`;
    
        faultyItems.style.visibility = "visible";

        } if (fuelLevel < 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level too low for the journey.";
        cargoStatus.innerHTML = "Cargo level too high for take off."
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";

        } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for the journey.";
        cargoStatus.innerHTML = "Cargo level is low enough for take off."
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";
        
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) { 
        fuelStatus.innerHTML = "Fuel level high enough for the journey.";
        cargoStatus.innerHTML = "Cargo level too high for take off."
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";

        } else { 
        fuelStatus.innerHTML = "Fuel level is high enough for the journey.";
        cargoStatus.innerHTML = "Cargo level is low enough for take off."
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        launchStatus.style.color = "green";
   }
}

 //  myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}


// pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index.
function pickPlanet(planets) {
    
    // There are 0-5 indexes in the planets.json file
    let index = Math.floor(Math.random() * 6);
    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
