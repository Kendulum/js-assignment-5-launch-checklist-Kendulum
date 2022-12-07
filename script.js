// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
 
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image)
    })
    
    // Need to add "Submit event listener" and should include preventDefault, and call the formSubmission() from ScriptHelper.js 
    // TODO: need to use 6 parameters for the formSubmission()
    // TODO: use GetElementById and know that List = FaultyItems Div (Line 34 of Index)
    // TODO: make a test submit to alert the submit is ready
 
    let form = document.getElementById("launchForm");
    let list = document.getElementById("faultyItems");
    
    form.addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        let pilot = document.getElementById("PilotName").value;       
        let copilot = document.getElementById("copilotName").value;       
        let fuelLevel = document.getElementById("fuelLevel").value;       
        let cargoLevel = document.getElementById("cargoMass").value;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
     });
 
 });