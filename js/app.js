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
	lastSection++;
	const newSection = `<section id="section${lastSection}" data-nav="Section ${lastSection}">
    <div class="landing__container">
    <h2>Section ${lastSection}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    mainSection.insertAdjacentHTML("beforeend", newSection);
}

/*
 	@functionName: createNavItem
 	@descreption : add new item to the navigation menu with the name of section and link to the section in the page
 	@para        : none
*/
function createNavItem(){
     navMenu.innerHTML = '';
     const sections = document.querySelectorAll('section');

     sections.forEach(function(section){
          const sectionName = section.getAttribute('data-nav');
          const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${sectionName}</a></li>`;
          navMenu.insertAdjacentHTML("beforeend",listItem);
     });
}

/*
 	@functionName: randomImages
 	@descreption : toggle photos in the head section every 5 seconds randomly
 	@para        : none
*/
function randomImages(){
	let image = document.querySelector('.main__hero');

	let imagesArr = ["1.jpg","2.jpg"];
  setInterval(function(){
  	let randomNum = Math.floor(Math.random() * imagesArr.length);

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
topBtn.addEventListener("click",function(){window.scrollTo(0,0)});


//add the active class to the active section in the viewport 
//add top button
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
		
	if(active.getBoundingClientRect().top >= -450 && active.getBoundingClientRect().top <= 100){
    	active.classList.add("your-active-class");
    }
    else{
         active.classList.remove("your-active-class");
        }
	}
    );
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
