//create the div containing everything with a id
target = addItem("div");
target.id = "questions";

// define the lengths of each row
let rowLen = [1, 2, 2];

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

      //set the width of inputs to 100% of the container if it isnt a checkbox
      if (input.type != "checkbox" && k) {
        if (input.type != "number") {
            inputColumn.style.width = "100%";
        } else {
          inputColumn.style.width = "80%";

          increment = subdiv.appendChild(addItem("div"));
          increment.classList.add("column");
          increment.style.width = "10%";
          increment.style.height = "50px";
          increment.style.backgroundColor = "#ffffff";
          increment.setAttribute("name", k);
          increment.onclick = function(){
            document.getElementById(this.getAttribute("name")).value ++;
          }

          decrement = subdiv.appendChild(addItem("div"));
          decrement.classList.add("column");
          decrement.style.width = "10%";
          decrement.style.height = "50px";
          decrement.style.backgroundColor = "#ffffff";
          decrement.setAttribute("name", k);
          decrement.onclick = function(){
            if (document.getElementById(this.getAttribute("name")).value > 0) {
              document.getElementById(this.getAttribute("name")).value --;
            }
          }
        }
      }

      // for all inputs that aren't checkboxes, make their width the size of the container minus the width of the label (that way the right edge of all inputs line up)
      // if (input.type != "checkbox" && k) {
      //   switch (input.type) {
      //     case "number":
      //       input.style.width = (subdiv.offsetWidth - label.offsetWidth) - (subdiv.offsetWidth/2) + "px";
      //       break;
      //     default:
      //       input.style.width = (subdiv.offsetWidth - label.offsetWidth) - 40 + "px";
      //   }
      // }

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
