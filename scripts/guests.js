//import getGuests array for guest data
import { getGuests } from "./database.js";

// invoke getGuests and store it in a variable
const ourGuests = getGuests()

// create a function that displays the html for currentGuests
export const currentGuests = () => {
    let html = "<ul>"

    for (const guest of ourGuests) {
        html += `<li id="guest--${guest.name}">${guest.name}</li>`
    }
    html += "</ul>"
    return html
}
    //First and Last Name
    //These should be displayed as an unordered list 
    //return the html