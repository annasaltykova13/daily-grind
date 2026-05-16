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

//retrieve data from querystring, if exists
if(urlParams.has("day")){
    //retrieve data from querystring
    myDay = urlParams.get("day");
}

//turn string into integer
myDay = parseInt(myDay);

switch(myDay){

 	 case 0:
   		today = "Sunday";
        coffee = {
            name: "Frappaccino",
            pic: "frappaccino.jpg", 
            alt: "A pic of frappacino", 
            color: "purple", 
            day: "Sunday", 
            desc: `Frappacino Sundays will enegrize for the upcoming week!`
        };
 	break;

    case 1:
   		today = "Monday";
        coffee = {
            name: "Mocha",
            pic: "mocha.jpg", 
            alt: "A picture of mocha.", 
            color: "beige", 
            day: "Monday", 
            desc: `Mocha on Mondays!`
        };
 	break;

 	case 2:
   		today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "bubble-tea.jpg", 
            alt: "A picture of a yummy bubble tea.", 
            color: "pink", 
            day: "Tuesday", 
            desc: `I like me some Bubble Tea on Tuesdays!`
        };
 	break;

    case 3:
   		today = "Wednesday";
        coffee = {
            name: "Caramel Latte",
            pic: "caramel-latte.jpg", 
            alt: "A picture of caramel latte", 
            color: "yellow", 
            day: "Wednesdsy", 
            desc: `Caramel Latee on Wednesdays will give a boost!`
        };
 	break;

    case 4:
   		today = "Thursday";
        coffee = {
            name: "Cold Brew",
            pic: "cold-brew.jpg", 
            alt: "A picture of a cold brew", 
            color: "red", 
            day: "Thursday", 
            desc: `Thursday Cold Brew is everything!`
        };
 	break;

    case 5:
   		today = "Friday";
        coffee = {
            name: "Drip",
            pic: "drip.jpg", 
            alt: "A pic of drip coffee.", 
            color: "brown", 
            day: "Friday", 
            desc: `I need constant drip!`
        };
 	break;

     case 6:
   		today = "Saturday";
        coffee = {
            name: "Pumpkin-spice Latte",
            pic: "pumpkin-spice-latte.jpg", 
            alt: "A pic of pumpkin-spice latte.", 
            color: "green", 
            day: "Saturday", 
            desc: `Pumpkin-spice Latte on Saturdays is a reward!`
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log();

//alert(coffeeTemplate(coffee));

//adds coffee to page?
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//change background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

//change strong tags in template to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
        <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
    </p>

    `;

    return myReturn;
}

