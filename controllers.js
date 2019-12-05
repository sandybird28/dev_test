import { draw } from './index';

//gravity

const incGrav = document.getElementById("incGrav");
const decGrav = document.getElementById("decGrav");
const gravValue = document.getElementById("gravValue");

export let gravity = 4;

incGrav.onclick = () => {
  gravity++;
  gravValue.textContent = gravity;
}

decGrav.onclick = () => {
  gravity--;
  if(gravity < 0){gravity++}
  gravValue.textContent = gravity;
}

gravValue.textContent = gravity;

// numbre of shapes


export const numbreOfShapes = document.getElementById("numbreOfShapes");
numbreOfShapes.textContent = 0

// shapes per second

const incSpS = document.getElementById("incSpS");
const decSpS = document.getElementById("decSpS");
const spsValue = document.getElementById("SpSValue");

let SpS = 2
spsValue.textContent = SpS;

function changeSpSInterval(SpS){
  
  spsValue.textContent = SpS;
  clearInterval(window.run)
  window.run = setInterval(draw, 1000/SpS)
}

incSpS.onclick = () => {
  SpS++;
  changeSpSInterval(SpS)
}

decSpS.onclick = () => {
  SpS--;
  if(SpS == 0){ SpS = 1 }
  changeSpSInterval(SpS)
}

