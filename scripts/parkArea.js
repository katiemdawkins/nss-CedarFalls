//import parkArea array for park area info
//import serviceOptions for service data
import { getparkAreas } from "./database.js";
import { getservicesOptions } from "./database.js";

// invoke parkArea and store it in a variable
// invoke serviceOptions and store it in a variable
const ourParkAreas = getparkAreas()
const servicesOption = getservicesOptions()

// create a function that displays the html for parkAreas

export const parkAreas = () => {
    let html = "<section>"

    for (const area of ourParkAreas){
            html +=`<header>${area.areaName} ${area.location}</header>`
            
    }
    html += "</section>"
    return html

}
// declare a variable of html 
// set it to a string with an opening secion tag

    //loop through parkArea
    //loop through service options
    //if park areaID and serviceID match 
        //append html with a header for area Name and Location make sure to add an id to use in the click event
        //append html with unordered list items of services
    
    //close the html section tag 
    //return the html variable

//create a function that counts the guests in an area guestCounter
//it should take a parameter of ???
//it should loop through parkAreas? i'm not sure how to count, but i think i did this in scrimba 


// create a click event - when you click on an area title
// it should display the number of guests in the area 