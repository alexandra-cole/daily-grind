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

switch(myDay){

 	case 0:
    	today =  "Sunday";
 	break;

 	case 2:
   	today = "Tuesday";
 	break;

 	default:
    	today = "Something went wrong!";

}

alert(today);