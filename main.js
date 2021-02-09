//-------------- Main menu scroll -----------------
// window.onscroll = function() {scrollFunction();}
const scrollMenu = document.querySelector('.navbar');
window.onscroll = function() {

  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    scrollMenu.style.transition = 'all 400ms ease-in-out';
    scrollMenu.style.background = 'rgba(0, 0, 0, 1)';
    scrollMenu.style.padding = '40px 0';
    scrollMenu.style.borderBottom = '1px solid rgba(128, 128, 128, 0.4)';

  } else {
    scrollMenu.style.background = 'rgba(0, 0, 0, 0)';
    scrollMenu.style.borderBottom = '1px solid rgba(128, 128, 128, 0)';

  }
}

// --------------| Variables |------------------

const htmlSkill = document.querySelector('#htmlSkill');
const cssSkill = document.querySelector('#cssSkill');
const jsSkill = document.querySelector('#jsSkill');
const phpSkill = document.querySelector('#phpSkill');
// Skill
const skill = document.querySelectorAll('.skill');
const skillText = document.querySelectorAll('.skill-text');
// Skill progress percent
const percent = document.querySelectorAll('.percent');
// Skill progress
const progress = document.querySelectorAll('.progress');
// See more button
const seeMore = document.querySelectorAll('.button-list');
// See more skill lists
const skillLists = document.querySelectorAll('.li');
// Progress container
const progressWrap = document.querySelectorAll('.progress-wrap');
// HCJP Heading
const hcjp = document.querySelectorAll('.hcjp');
// Skill Name
const skillName = document.querySelectorAll('.skill-name');
// Skill UL Left
const skillUlLeft = document.querySelector('#skillUlLeft');
// Skill UL Right
const skillUlRight = document.querySelector('#skillUlRight');
// List S0S
const htmlJS = document.getElementById('htmlJS');
const cssPHP = document.getElementById('cssPHP');
// MQ 500PX screen
const px500 = window.matchMedia('(max-width: 918px)');

// ---------------------------------------------

// HCJP Color
hcjp[0].style.color = 'red';
hcjp[1].style.color = 'var(--lightblue)';
hcjp[2].style.color = 'green';
hcjp[3].style.color = 'var(--primary)';

// Skill name
skillName[0].style.color = 'red';
skillName[1].style.color = 'blue';
skillName[2].style.color = 'green';
skillName[3].style.color = 'black';
// Functions
function hideSeeMore() {
  for(let i = 0; i < seeMore.length; i++){
    seeMore[i].style.display = 'none';
  }
}
function showSeeMore() {
  for(let i = 0; i < seeMore.length; i++){
    seeMore[i].style.display = 'inline-block';
  }
}
//--------------| Events Listeners |------------

// HTML5
htmlSkill.addEventListener('mouseover', function(){
  skillText[0].style.fontSize = '0.9rem';
  skillText[0].style.transition = 'font-size 500ms ease';
  seeMore[0].style.right = '15px';
  seeMore[0].style.transition = 'right 500ms ease-in-out';
  percent[0].classList.remove('bar-percent2');
  percent[0].classList.add('bar-percent');
  progress[0].style.gridRow = '2/3';
  progress[0].style.gridColumn = '1/2';
  progressWrap[0].style.gridTemplateColumns = '90% 10%';
});
// CSS3
cssSkill.addEventListener('mouseover', function(){
  skillText[1].style.fontSize = '0.9rem';
  skillText[1].style.transition = 'font-size 500ms ease';
  seeMore[1].style.right = '15px';
  seeMore[1].style.transition = 'right 500ms ease-in-out';
  percent[1].classList.remove('bar-percent2');
  percent[1].classList.add('bar-percent');
  progress[1].style.gridRow = '2/3';
  progress[1].style.gridRow = '2/3';
  progress[1].style.gridColumn = '1/2';
  progressWrap[1].style.gridTemplateColumns = '90% 10%';
});
// JS
jsSkill.addEventListener('mouseover', function(){
  skillText[2].style.fontSize = '0.9rem';
  skillText[2].style.transition = 'font-size 500ms ease';
  seeMore[2].style.right = '15px';
  seeMore[2].style.transition = 'right 500ms ease-in-out';
  percent[2].classList.remove('bar-percent2');
  percent[2].classList.add('bar-percent');
  progress[2].style.gridRow = '2/3';
  progress[2].style.gridColumn = '1/2';
  progressWrap[2].style.gridTemplateColumns = '90% 10%';
});
// PHP
phpSkill.addEventListener('mouseover', function(){
  skillText[3].style.fontSize = '0.9rem';
  skillText[3].style.transition = 'font-size 500ms ease';
  seeMore[3].style.right = '15px';
  seeMore[3].style.transition = 'right 500ms ease-in-out';
  percent[3].classList.remove('bar-percent2');
  percent[3].classList.add('bar-percent');
  progress[3].style.gridRow = '2/3';
  progress[3].style.gridColumn = '1/2';
  progressWrap[3].style.gridTemplateColumns = '90% 10%';
});

// ================| Functions |====================

function skillOpacity() {
  let i = 0
  for(;i < skill.length;i++) {
    skill[i].style.opacity = '0.1';
  }
}
function skillOpacity1() {
  let i = 0
  for(;i < skill.length;i++) {
    skill[i].style.opacity = '1';
  }
}

// ---------| See more section |------------------

// Variables
const h4 = document.createElement('h4');

// -------------| See more HTML |--------------
// Create elements
const xBtn0 = document.createElement('button');
const htmlSOS = document.createElement('div');
seeMore[0].addEventListener('click', function(){

  // Style function
  skillOpacity();
  hideSeeMore();
  // Close button
  xBtn0.classList.add('close-button');
  xBtn0.textContent = 'x';
  xBtn0.style.top = '10px';
  xBtn0.style.right = '10px';
  // H4
  h4.classList.add('sos-heading');
  h4.textContent = 'Summary of skills in HTML5';
  // HTML Summary of skills
  htmlSOS.classList.add('li');
  htmlSOS.classList.add('sos');
  htmlSOS.innerHTML = 
  '<li>Able to implement HTML cssdsdvsvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvxsdvsdvodes. Able to use html.</li><li>fdfdfdfdfdsfsdfsdfs</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li>'
  ;
  // Adding effects
  setTimeout(()=>{  
    h4.appendChild(xBtn0);
  }, 6000);
  xBtn0.focus();

  setTimeout(()=>{
    htmlJS.appendChild(h4);
    htmlJS.appendChild(htmlSOS);
  }, 450);

  // HCJP Style
  hcjp[0].style.backgroundColor = 'rgba(255, 0, 0, 0.8';
  hcjp[0].style.transition = 'background-color 750ms ease';
  hcjp[0].style.color = 'white';
  // Show Skill UL
  skillUlLeft.style.height = '100%';
  skillUlLeft.style.width = '100%';
  // 500 px screen size
  if(px500.matches) {
    skillUlLeft.style.height = '100%';
    skillUlLeft.style.width = '100%';
  } else {
    skillUlLeft.style.height = '100%';
    skillUlLeft.style.width = '100%';
  }
  skillUlLeft.focus();
  // Close button
  xBtn0.addEventListener('click', function(){
    // Style Function
    skillOpacity1();
    showSeeMore()
    // List heading
    hcjp[0].style.backgroundColor = 'var(--color)';
    hcjp[0].style.color = 'red';
    // Skill UL
    skillUlLeft.style.height = '0';
    skillUlLeft.style.width = '0';
    // Remove elements
    xBtn0.remove()
    h4.remove()
    htmlSOS.remove()
  });
});
// -------------| See more CSS |--------------
// Create elements
const xBtn1 = document.createElement('button');
const cssSOS = document.createElement('div');
seeMore[1].addEventListener('click', function(){
  // Style function
  skillOpacity();
  hideSeeMore()
  // Close button
  xBtn1.classList.add('close-button');
  xBtn1.textContent = 'x';
  xBtn1.style.top = '10px';
  xBtn1.style.right = '10px';
  // H4
  h4.classList.add('sos-heading');
  h4.textContent = 'Summary of skills in CSS3';
  // CSS Summary of Skills
  cssSOS.classList.add('li');
  cssSOS.classList.add('sos');
  cssSOS.innerHTML = 
  '<li>Able to implement HTML cssdsdvsvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvxsdvsdvodes. Able to use html.</li><li>fdfdfdfdfdsfsdfsdfs</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li>'
  ;
  // Skill UL left
  // Add effects 
  setTimeout(()=>{  
    h4.appendChild(xBtn1);
  }, 6000);
  xBtn1.focus();

  setTimeout(()=>{
    cssPHP.appendChild(h4);
    cssPHP.appendChild(cssSOS);
  }, 450);
  // HCJP
  hcjp[1].style.backgroundColor = 'blue';
  hcjp[1].style.transition = 'background-color 750ms ease';
  hcjp[1].style.color = 'white';
  // Show Skill UL
  skillUlRight.style.height = '100%';
  skillUlRight.style.width = '100%'
  // 500 px screen size
  if(px500.matches) {
    skillUlRight.style.height = '100%';
    skillUlRight.style.width = '100%';
  } else {
    skillUlRight.style.height = '100%';
    skillUlRight.style.width = '100%';
  }
  // Close button Function
  xBtn1.addEventListener('click', function(){
    // Style Function
    skillOpacity1();
    showSeeMore()
    // List heading
    hcjp[1].style.backgroundColor = 'var(--color)';
    hcjp[1].style.color = 'blue';
    // Skill UL
    skillUlRight.style.height = '0';
    skillUlRight.style.width = '0';
    // Remove elements
    xBtn1.remove()
    h4.remove()
    cssSOS.remove()
  });
  // skillRight();

});
// ------| See more JS |------------
// Create elements
const xBtn2 = document.createElement('button');
const jsSOS = document.createElement('div');
seeMore[2].addEventListener('click', function(){

  // Style function
  skillOpacity();
  hideSeeMore();
  // Close button
  xBtn2.classList.add('close-button');
  xBtn2.textContent = 'x';
  xBtn2.style.top = '10px';
  xBtn2.style.right = '10px';
  // H4
  h4.classList.add('sos-heading');
  h4.textContent = 'Summary of skills in Javascript';
  // HTML Summary of skills
  jsSOS.classList.add('li');
  jsSOS.classList.add('sos');
  jsSOS.innerHTML = 
  '<li>Able to implement HTML cssdsdvsvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvxsdvsdvodes. Able to use html.</li><li>fdfdfdfdfdsfsdfsdfs</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li>'
  ;
  // Skill UL left
  // Adding effects
  setTimeout(()=>{  
    h4.appendChild(xBtn2);
  }, 6000);
  xBtn2.focus();

  setTimeout(()=>{
    htmlJS.appendChild(h4);
    htmlJS.appendChild(jsSOS);
  }, 450);

  // HCJP Style
  hcjp[2].style.backgroundColor = 'rgba(0, 255, 0, 0.8';
  hcjp[2].style.transition = 'background-color 750ms ease';
  hcjp[2].style.color = 'white';
  // Show Skill UL
  skillUlLeft.style.height = '100%';
  skillUlLeft.style.width = '100%'
  skillUlLeft.focus();
  // 500 px screen size
  if(px500.matches) {
    skillUlLeft.style.height = '100%';
    skillUlLeft.style.width = '100%';
  } else {
    skillUlLeft.style.height = '100%';
    skillUlLeft.style.width = '100%';
  }
  // Close button
  xBtn2.addEventListener('click', function(){
    // Style Function
    skillOpacity1();
    showSeeMore()
    // List heading
    hcjp[2].style.backgroundColor = 'var(--color)';
    hcjp[2].style.color = 'green';
    // Skill UL
    skillUlLeft.style.height = '0';
    skillUlLeft.style.width = '0';
    // Remove elements
    xBtn2.remove()
    h4.remove()
    jsSOS.remove()
  });
  // skillLeft()
});
// ----------| See more PHP |---------
// Create elements
const xBtn3 = document.createElement('button');
const phpSOS = document.createElement('div');
seeMore[3].addEventListener('click', function(){
  // Style function
  skillOpacity();
  hideSeeMore()
  // Close button
  xBtn3.classList.add('close-button');
  xBtn3.textContent = 'x';
  xBtn3.style.top = '10px';
  xBtn3.style.right = '10px';
  // H4
  h4.classList.add('sos-heading');
  h4.textContent = 'Summary of skills in PHP';
  // CSS Summary of Skills
  phpSOS.classList.add('li');
  phpSOS.classList.add('sos');
  phpSOS.innerHTML = 
  '<li>Able to implement HTML cssdsdvsvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvxsdvsdvodes. Able to use html.</li><li>fdfdfdfdfdsfsdfsdfs</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li><li>dfdfsdsgsgsgsdgsgsgd</li>'
  ;
  // Skill UL left

  // Add effects 
  setTimeout(()=>{  
    h4.appendChild(xBtn3);
  }, 6000);
  xBtn3.focus();

  setTimeout(()=>{
    cssPHP.appendChild(h4);
    cssPHP.appendChild(phpSOS);
  }, 450);
  // HCJP
  hcjp[3].style.backgroundColor = 'black';
  hcjp[3].style.transition = 'background-color 750ms ease';
  hcjp[3].style.color = 'white';
  // Show Skill UL
  skillUlRight.style.height = '100%';
  skillUlRight.style.width = '100%';
  // 500 px screen size
  if(px500.matches) {
    skillUlRight.style.height = '100%';
    skillUlRight.style.width = '100%';
  } else {
    skillUlRight.style.height = '100%';
    skillUlRight.style.width = '100%';
  }
  // Close button Function
  xBtn3.addEventListener('click', function(){
    // Style Function
    skillOpacity1();
    showSeeMore()
    // List heading
    hcjp[3].style.backgroundColor = 'var(--color)';
    hcjp[3].style.color = 'black';
    // Skill UL
    skillUlRight.style.height = '0';
    skillUlRight.style.width = '0';
    // Remove elements
    xBtn3.remove()
    h4.remove()
    phpSOS.remove()
  });
  // skillRight();

});


// -------------| Projects section |-----------------


// ==============| Production Room |===========

//------ PROJECT SECTION -------

// Variable----

// Functions----

// Events-------


console.log();
