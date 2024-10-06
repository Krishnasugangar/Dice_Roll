let x;
let y;
let z;

x= document.getElementById("one");
y = document.getElementById("two");
z =document.getElementById("three");

document.getElementById("button").onclick= function(){
     x.innerHTML= Math.floor(Math.random()*6)+1;
     y.innerHTML = Math.floor(Math.random()*6)+1;
      z.innerHTML = Math.floor(Math.random()*6)+1;


}