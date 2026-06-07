/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//retrieve data frm query string if it exists
if(urlParams.has("day")){
    myDay = urlParams.get("day");
}

// changes string into integer
myDay = parseInt(myDay);

switch(myDay){

 	case 0:
    	today =  "Sunday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A pic of a dlicious hot caramel latte",
            color:"#dbb240",
            day:"Sunday",
            desc:`Caramel latte for the soul.`

        };

 	break;

     	case 1:
    	today =  "Monday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A pic of a black cold brew coffee.",
            color:"#47321a",
            day:"Monday",
            desc:`A cold brew strong enough to start the week!`

        };
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some Bubble Tea Tuesday!`

        };
 	break;

 	case 3:
    	today =  "Wednesday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of black coffee, drip, steaming hot java!",
            color:"brown",
            day:"Wednesday",
            desc:`Hump day calls for drip.`

        };
 	break;

    case 4:
    	today =  "Thursday";
        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A picture of a blended, ice cold frappaccino.",
            color:"#256925",
            day:"Thursday",
            desc:`Frappaccino for Friday eve, why not?`

        };
 	break;

 	case 5:
    	today =  "Friday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A picture of a warm tasty mocha.",
            color:"tan",
            day:"Friday",
            desc:`You made it to Friday, celebrate with a chocolatey mocha!`

        };
 	break;

 	case 6:
    	today =  "Saturday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A pic of a seasonal PSL",
            color:"#df7f31",
            day:"Saturday",
            desc:`Saturday is the best day, why not celebrate with a PSL!!`

        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);

//alert(coffeeTemplate(coffee));

//Adds coffee to page?
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//xhanges background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

// change strong tags in template to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {    el.style.color = coffee.color;});

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
        <p>
			<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
			<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, 
			 ${coffee.desc}!
		</p>
    `;

    return myReturn;
}
