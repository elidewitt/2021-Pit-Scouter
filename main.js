for (i in pitScouter) {
  tab = addItem("div");
  tab.id = i;
  tab.style.backgroundColor = "hsl(" + Math.random()*360 + ", 100%, 50%)";
  tabHeader = tab.appendChild(addItem("h1", i));
  for (j in pitScouter[i]) {
    card = tab.appendChild(addItem("div"));
    cardHeader = card.appendChild(addItem("h2", j));
    for (k in pitScouter[i][j]) {
      p = card.appendChild(addItem("p", k));
      input = card.appendChild(addItem(pitScouter[i][j][k].element, ""));
      input.type = pitScouter[i][j][k].type;
    }
  }
}
addItem("button", "Submit");




function addItem(tag, innerHTML) {
  elt = document.createElement(tag);
  if (innerHTML) {
    elt.appendChild(document.createTextNode(innerHTML));
  }
  return document.getElementById("scouter").appendChild(elt);
}
