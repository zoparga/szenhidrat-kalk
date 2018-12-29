var starterCh = 0;
var starterChGr = 0;
var resultCh = 0;
var resultChGr = 0;

function calcSubmit(){

  starterCh = document.getElementById('calcForm').elements[0].value; // input/output button
  starterChGr = document.getElementById('calcForm').elements[1].value;// input/output button
  resultCh = document.getElementById('calcForm').elements[2].value; // input/output button
  resultChGr = document.getElementById('calcForm').elements[3].value; // input/output button


  if(starterCh === ""){
    starterChResult = starterChGr / resultChGr * resultCh;
    document.getElementById("resultMsg").innerHTML = starterCh;
    
  }
  if (starterChGr === "") {
    starterChGr = starterCh / resultCh * resultChGr;
    document.getElementById("resultMsg").innerHTML = starterChGr;
    
  }
  if (resultCh === "") {
    resultCh = resultChGr / starterChGr * starterCh;
    document.getElementById("resultMsg").innerHTML = resultCh;
   
  }
  if (resultChGr === "") {
    resultChGr = resultCh / starterCh * starterChGr;
    document.getElementById("resultMsg").innerHTML = resultChGr;
    
  }
}