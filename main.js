//create the div containing everything with a id
target = addItem("div");
target.id = "questions";

// create the row divs and define their sizing based on how many card in the row
let rows = [];
let rowContent = [];
for (let i = 0; i < rowLen.length; i++) {
  rows[i] = target.appendChild(addItem("div"));
  rows[i].classList.add("row");
  rowContent[i] = [];
  for (let j = 0; j < rowLen[i]; j++) {
    rowContent[i][j] = rows[i].appendChild(addItem("div"));
    rowContent[i][j].style.width = 100 / rowLen[i] + "%";
  }
}

//translates a 2d array into a 1d list of all elements in order
Array.prototype.translate2d = function() {
  let array2d = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      array2d.push(this[i][j]);
    }
  }
  return array2d;
}

// looks for the different tabs (robot info, auto, tele-op ect)
let cardNum = 0;
for (i in pitScouter) {
  //assign each tab to the correct column
  tab = rowContent.translate2d()[cardNum].appendChild(addItem("div"));
  tab.id = i;
  tab.classList.add("tab");
  tabHeader = tab.appendChild(addItem("h1", i));

  //looks for the different cards within each tab (team number, robot size ect)
  for (j in pitScouter[i]) {
    card = tab.appendChild(addItem("div"));
    card.classList.add("card");
    //card.style.backgroundColor = "hsl(" + hue + ", 100%, 30%)";

    // if the card header exists, draw it, otherwise don't give it a header
    if (j) {
      cardHeader = card.appendChild(addItem("h2", j));
    }

    //look at each question within each card (height, weight, drivetrain ect)
    for (k in pitScouter[i][j]) {
      //create a div to contain pairs of labels and inputs
      subdiv = card.appendChild(addItem("div"));
      subdiv.classList.add("row");

      //create the label in it own div if it is found in the source.js
      labelColumn = subdiv.appendChild(addItem("div"));
      labelColumn.classList.add("column");
      // labelColumn.style.width = "20%";
      if (k) {
        label = labelColumn.appendChild(addItem("p", k));
        label.classList.add("label");
        label.style.display = "inline-block";
      }

      //create the input in it own div if it is found in the source.js
      inputColumn = subdiv.appendChild(addItem("div"));
      inputColumn.classList.add("column");
      input = inputColumn.appendChild(addItem(pitScouter[i][j][k].element, ""));

      //add the defined type and id for each div
      input.type = pitScouter[i][j][k].type;
      input.id = k;

      // if it is an image, give it a source
      //set the width of inputs to 100% of the container if it isnt a checkbox
      if (input.type == "image") input.src = pitScouter[i][j][k].src;


      if (input.type != "checkbox") {
        input.style.width = "100%";
        inputColumn.style.width = "100%";
      }
      if (input.type == "number" && k) {
        increment = subdiv.appendChild(addItem("div"));
        increment.classList.add("column");
        increment.style.width = "12vw";
        increment.style.height = "8vw";
        increment.style.backgroundColor = "#ffffff";
        increment.setAttribute("name", k);
        increment.onclick = function(){
          document.getElementById(this.getAttribute("name")).value ++;
        }
        incP = increment.appendChild(addItem("p"));
        incP.classList.add("numButton");
        incP.innerHTML = " ↑ ";
        decrement = subdiv.appendChild(addItem("div"));
        decrement.classList.add("column");
        decrement.style.width = "12vw";
        decrement.style.height = "8vw";
        decrement.style.backgroundColor = "#ffffff";
        decrement.setAttribute("name", k);
        decrement.onclick = function(){
          if (document.getElementById(this.getAttribute("name")).value > 0) {
            document.getElementById(this.getAttribute("name")).value --;
          }
        }
        decP = decrement.appendChild(addItem("p"));
        decP.classList.add("numButton");
        decP.innerHTML = " ↓ ";

      }

      //give each input a name with thie regex thing I don't understand
      input.name = k.replace(/[ \?\(\)]/g, "");

      //add the available options if there are any to each select element
      if (pitScouter[i][j][k].element == "select" && pitScouter[i][j][k].options) {
        option = input.appendChild(addItem("option"));
        option.innerHTML = "";
        option.disabled = true;
        for (let l = 0; l < pitScouter[i][j][k].options.length; l++) {
          option = input.appendChild(addItem("option"));
          option.innerHTML = pitScouter[i][j][k].options[l];
        }
      }
    }
  }
  cardNum ++;
}

//find submit button as set the innerHTML
document.querySelectorAll("BUTTON:last-child")[0].innerHTML = "Submit";

//create a shortcut function for adding elements
function addItem(tag, innerHTML) {
  elt = document.createElement(tag);
  if (innerHTML) {
    elt.appendChild(document.createTextNode(innerHTML));
  }
  return document.getElementById("scouter").appendChild(elt);
}
