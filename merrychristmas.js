/* BEGIN merryChristmas script */
//set the merryChristmasMusic to play
var merryChristmasMusic = new Audio('https://www.wasql.com/christmas.wav');
merryChristmasMusic.type = 'audio/wav';
merryChristmasMusic.loop = false;
merryChristmasMusic.finish=0;
merryChristmasMusic.addEventListener("ended", function(){
     this.currentTime = 0;
     this.finish=1;
});
function merryChristmas(){
  if(undefined == this.firsttime || this.firsttime==0){
    this.firsttime=1;
    merryChristmasPlaymerryChristmasMusic();
    console.log('%cMerry Christmas from us to you. https://www.wasql.com','font: 2em cursive; color: #6b6a89;');
  }
  if(merryChristmasMusic.finish==0){
    merryChristmasBorder();
    merryChristmasBackground();
    setTimeout(function(){merryChristmas();},200);
    //console.log(merryChristmasMusic.currentTime);
  }
  else{
    merryChristmasStopmerryChristmasMusic();
    merryChristmasReset();
    this.firsttime=0;
    merryChristmasMusic.finish=0;
  }
  return false;
}
async function merryChristmasPlaymerryChristmasMusic() { 
try {
    await merryChristmasMusic.play();
  }
  catch (err) {
    console.log('unable to play merryChristmasMusic. sorry');
  }
}
function merryChristmasStopmerryChristmasMusic() { 
  merryChristmasMusic.pause();
  merryChristmasMusic.currentTime = 0;
}
//asyncronous so we do not have to wait for it
async function merryChristmasBorder(){
  // Get all elements on the page
  let all = document.getElementsByTagName("*");
  for(let i = 0; i < all.length; i++) {
    //no need to change elements that are not visible
    if(!merryChristmasIsHidden(all[i])){
      if(undefined == all[i].oriborder){
        all[i].oriborder=all[i].style.border;
      }
      let c=merryChristmasRandomColor();
      let bc='2px dashed '+c;
      //turn the body border into larger lights
      if(document.body == all[i]){
        bc='10px dotted '+c;
      }
      all[i].style.border=bc;
    }
  }
}
//asyncronous so we do not have to wait for it
async function merryChristmasBackground(){
// Get all elements on the page
let all = document.getElementsByTagName("*");
  for(let i = 0; i < all.length; i++) {
    //no need to change elements that are not visible
    if(!merryChristmasIsHidden(all[i])){
      if(undefined == all[i].oribackground){
        all[i].oribackground=all[i].style.background;
      }
      let c=merryChristmasRandomColor();
      //soften the color by adding alpha of 80 (50%)
      let bg=c+'26';
      all[i].style.background=bg;
    }
  }
}
function merryChristmasReset(){
  // Get all elements on the page
  let all = document.getElementsByTagName('*');
  for (let i = 0; i < all.length; i++){
    if(undefined != all[i].oriborder){
      all[i].style.border=all[i].oriborder;
    }
    if(undefined != all[i].oribackground){
      all[i].style.background=all[i].oribackground;
    }
  }
}

function merryChristmasIsHidden(el) {
    let style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'));
}
function merryChristmasRandomColor() {
let letters = '123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/* END merryChristmas Light show */