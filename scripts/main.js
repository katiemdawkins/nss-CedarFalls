// this will hold the html to go in the main container from index.html
// this page will display 6 containers with the park areas information
// this will be displayed aligned left 3 columns, 2 rows
    //each container or card will display Name + Location and a list of services
    //when you click on the area, it will tell you which guests are currently there
// on the right side of the page it will list Current Park Guests First and Last Name

// import currentGuests function from guests.js
import { currentGuests } from "./guests.js"
import { parkAreas } from "./parkArea.js"
// import 

// use the querySelector method to connect to the DOM (container id)
const mainContainer = document.querySelector("#container")
//declare a variable and set it equal to the contents of the page

const mainHTML = `
<h1>Cedar Falls</h1>
<article>
    <h3>Park Areas</h3>
    ${parkAreas()}
</article>
<article>
    <h3>Current Guests</h3>
    ${currentGuests()}
</article>
<footer>Phone: 555-555-5555 | Email : email@cedarfalls.com | 555 StreetName, Cedar Falls, State 33333</footer>
`
// include H1 for Cedar Falls
//two articles
    //article 1 h3? Park Areas
        //invoke Park Areas html function here
    //article 2 h3 Current Guests           
        //invoke the currentGuests html function here
//footer with all park info phone number email address  

mainContainer.innerHTML = mainHTML
//use innerHTML to put the content in to the main container