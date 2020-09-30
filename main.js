for (i in pitScouter) {
  tab = addItem("div");
  tab.id = i;
  let hue = Math.random()*360;
  tab.style.backgroundColor = "hsl(" + hue + ", 100%, 40%)";
  tabHeader = tab.appendChild(addItem("h1", i));
  for (j in pitScouter[i]) {
    card = tab.appendChild(addItem("div"));
    card.style.backgroundColor = "hsl(" + hue + ", 100%, 30%)";
    if (j) cardHeader = card.appendChild(addItem("h2", j));
    for (k in pitScouter[i][j]) {
      p = card.appendChild(addItem("p", k));
      input = card.appendChild(addItem(pitScouter[i][j][k].element, ""));

      input.type = pitScouter[i][j][k].type;
      input.id = k;

      input.name = k.replace(/[ \?\(\)]/g, "");

      if (pitScouter[i][j][k].options) {
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
}
let submitButton = addItem("button", "Submit");




function addItem(tag, innerHTML) {
  elt = document.createElement(tag);
  if (innerHTML) {
    elt.appendChild(document.createTextNode(innerHTML));
  }
  return document.getElementById("scouter").appendChild(elt);
}
