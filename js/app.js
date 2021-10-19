/*
	FWD landing page project 
	edit by: Marsellino Medhat
*/

/* start declare global variables */

let lastSection = 0;
const mainSection = document.querySelector('main');
const navMenu = document.getElementById('navbar__list');
const topBtn = document.getElementById('top-btn');

                     //=========================> start declaring functions <==========================//

/*
 	@functionName: createNewSection
 	@descreption : create a new section that will be added to the page when the button clicked
	@para        : none
*/
function createNewSection() {
	//increment the counter of sections
	lastSection++;

	//create a new section
	let section = document.createElement("section");

	//set attributes (id and data-nav) to the created section
	section.setAttribute("id",`section${lastSection}`);
	section.setAttribute("data-nav",`section ${lastSection}`);

	//create div and set the class atrribute with the landing__container class
	let div = document.createElement("div");
	div.setAttribute("class","landing__container");

	//create h2 header and write the name of the section in it
	let h2 = document.createElement("h2");
	h2.textContent = `section ${lastSection}`;

	//create a paragraph and write in it any thing
	let p = document.createElement("p");
	p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";

	//append in div multiple elements(h2 and p)
	div.append(h2,p);

	//append the whole div to the created section
	section.append(div);

	//and finally append the section to the main in html 
	mainSection.append(section);

}

/*
 	@functionName: createNavItem
 	@descreption : add new item to the navigation menu with the name of section and link to the section in the page
 	@para        : none
*/
function createNavItem(){
	//make the nav menu empty to avoid repeating of the sections every time adding new section
     navMenu.innerHTML = '';

     //the variable sections has all section's tag
     const sections = document.querySelectorAll('section');

     //iterate over all sections to add them to the navigation menu as a new list item 
     sections.forEach(function(section){
          const sectionName = section.getAttribute('data-nav');
          
          //create a new list item
          let item = document.createElement("li");

          //create a link to the place of the section in the page
          const link = document.createElement("a");
          link.setAttribute("href",`#${section.id}`);
          link.setAttribute("data-nav",`${section.id}`);
          link.setAttribute("class","menu__link");
          link.innerHTML = sectionName;

          //append the link with the name of the section to the list item
          item.append(link);

          //finally append the list item to the navigation menu
          navMenu.append(item);

     });
}

/*
 	@functionName: randomImages
 	@descreption : toggle photos in the head section every 5 seconds randomly
 	@para        : none
*/
function randomImages(){
	let image = document.querySelector('.main__hero');

    //array with the name of images
	let imagesArr = ["1.jpg","2.jpg"];

	//choose random photo to apeear every 5 seconds
  setInterval(function(){
  	let randomNum = Math.floor(Math.random() * imagesArr.length);

  	//style the photo dynamically with js
  	image.style.cssText = 'object-fit: fill; obacity: 0.5; background-size: 100% 100%; background-repeat:no-repeat;';
	image.style.backgroundImage = 'url("jpg/' + imagesArr[randomNum] + '")';
     },5000);
}


/*
 	@functionName: start
 	@descreption : call all functions and start the program
 	@para        : none
*/
function start(){

//call the randomImages function
setTimeout(randomImages(),0);

// begin the page with at least 4 sections
for (let i = 0; i < 4; i++) {
    createNewSection();
    }   

// add the 4 sections to navigation menu
createNavItem();            

// add event: when the button is pressed a new section is created and added to the navigation menu
document.getElementById("btn").addEventListener("click", function(){
  createNewSection();
  createNavItem();
});

//add event: when the top button is clicked move the viewport the top again
topBtn.addEventListener("click",function(){
	window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});

navMenu.addEventListener("click",function(event){
	event.preventDefault();

	let location = document.getElementById(`${event.target.dataset.nav}`);

    location.scrollIntoView({ behavior: "smooth" });
});
//add the active class to the active section in the viewport 
//add top button
window.onscroll = function() {

	//first part to add the active class to the active section
	document.querySelectorAll("section").forEach(function(active) {
		
	if(active.getBoundingClientRect().top >= -450 && active.getBoundingClientRect().top <= 100){
    	active.classList.add("your-active-class");
    }
    else{
         active.classList.remove("your-active-class");
        }
	}
    );

    //second part to display the top button after scrolling 800px or more and hide it otherwise
    if(window.scrollY >= 800){
    	topBtn.style.display = 'block';
    }
    else{
    	topBtn.style.display = 'none';
    }
};
}


                //=========================> end declaring functions <==========================//

                //==========================> start of the program  <===========================//

start();
