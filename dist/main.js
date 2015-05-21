var but = document.getElementById("button");

var input = document.getElementById('input');
var keith = [];
but.addEventListener("click",doStuff);

function doStuff(apple){

keith.push(input.value);

console.log(keith);
}
var newString = "";
var section = document.getElementById("section");
but.addEventListener("click",render);




function render(asdf){
section.innerHTML = "";
house = keith.join(" ");
section.innerHTML = house;




// why doesn't this for loop work right?
//for(var i = 0;i<keith.length;i++){section.innerHTML = "";newString += keith[i];}
//section.innerHTML = "";
//section.innerHTML = newString;					
}	





//onkeyup


