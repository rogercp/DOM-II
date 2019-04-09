// Your code goes here
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick



//1
//mouseover
let nava= document.querySelector(".nav");
nava.addEventListener("mouseover", function(event) {   
    event.target.style.color = "blue";
});
nava.addEventListener("click",function(e){
    event.preventDefault();
})


//2
//click
let logo=document.querySelector("h1");
logo.addEventListener("click",function(e){
    e.target.textContent="Vrrroooommm!";
    e.stopPropagation();
});

let pic1=document.querySelector(".content-section img");
pic1.addEventListener("click",function(e){
    e.target.src="img/fun.jpg";
    e.stopPropagation();
});


//3
//bldclick
let pic2=document.querySelector(".inverse-content img")
pic2.addEventListener("dblclick",function(e){
    e.target.src="img/adventure.jpg";
});


 //4
let forms=document.querySelector('input[type="text"]');
forms.style.marginBottom="20px";
forms.addEventListener("focus",(event)=>{
    event.target.style.background="yellow";
});


//5
window.addEventListener("keyup",keyPressUp,false);
function keyPressUp(key){
    if(key.keyCode=="69"){
        alert("You pressed enter");
    }
}


//6
//keydown
window.addEventListener("keydown",keyPress,false);
function keyPress(key){
    if(key.keyCode=="80"){
        alert("Jump back on the fun bus");
    }
}


//7
//load
let load=document.querySelector(".home .intro");
let txt1=document.createElement('p');
txt1.textContent="The fun bus page has loaded";
window.addEventListener("load", function (e){
load.appendChild(txt1);
});

//8
///select

// let newp=document.createElement("p");
// newp.id="new1";
// newp.textContent="hello";

// let appender=document.querySelector(".intro p");
// appender.appendChild(newp);

// function logSelection(e){
//     let log=document.getElementById('new1');
//     let selection=e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
//     log.textContent=`You selected: ${selection}`;
// }

// let input = document.querySelector('#slct1')
// input.addEventListener("onChange",logSelection);


//9
//resize
window.addEventListener('resize', function(e) {
console.log('The window has been resized');
 }, 100);

