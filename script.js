let button

button = document.querySelector("button");

button.addEventListener("click", changeColor)
let hexColors=["#fcba03","#fc0b03","#e6605c","#b19eff","#ff9edd"];
document.body.style.backgroundColor = "#ed7d6d"


function changeColor (){
  let hexColors=["#fcba03","#fc0b03","#e6605c","#b19eff","#ff9edd"];
  let hexColor=hexColors[Math.floor(Math.random()*hexColors.length )];

  document.body.style.background = hexColor;
  document.getElementById("text-uppercase").innerHTML = "Hex Color " + hexColor;

  
};