function createXML(rootNodeName) {
  let xmlDoc = document.implementation.createDocument("", "", null);
  let nodeRoot = xmlDoc.createElement(rootNodeName);

  let theForm = document.getElementById(rootNodeName);

  let inputElements = theForm.elements;
  addElementsToRootNode(inputElements, nodeRoot, xmlDoc);

  xmlDoc.appendChild(nodeRoot);

  return xmlDoc;
}

function addElementsToRootNode(inputElements, nodeRoot, xmlDoc) {
  let node;
  let element;

  for (let i = 0; i < inputElements.length; i++) {
    element = inputElements[i];

    switch (element.tagName) {
      case "SELECT" :
      case "TEXTAREA" :
        node = xmlDoc.createElement(element.name);
        node.innerHTML = element.value;
        nodeRoot.appendChild(node);
        break;
      case "INPUT" :
        switch (element.type) {
          case "radio" :
            if (element.checked) {
              node = xmlDoc.createElement(element.name);
							node.innerHTML = element.value;
							nodeRoot.appendChild(node);
            }
            break;
          case "checkbox" :
            node = xmlDoc.createElement(element.name);
            if (element.checked) {
              node.innerHTML = 1;
            } else {
              node.innerHTML = 0;
            }
            nodeRoot.appendChild(node);
            break;
          case "text":
  				case "number":
  				case "date":
  				case "range":
  				case "tel":
  				case "time":
  				case "url":
  				case "week":
  					node = xmlDoc.createElement(element.name);
  					node.innerHTML = element.value;
  					nodeRoot.appendChild(node);
						break;
          default :
            break;
        }
      default :
        break;
    }
  }
  return nodeRoot;
}

function download(fileName, text) {
  let element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
