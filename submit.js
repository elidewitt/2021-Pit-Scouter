
function validateAndSubmit() {
  let xmlDoc, fileName, fileText, theForm, formName;
  formName = "scouter";

  let valid = validate();
  if (valid.bool == true) {
    fileName = document.getElementById("Team Number").value.slice(0, 4) + "_P.xml";
    xmlDoc = createXML(formName);

    let serializer = new XMLSerializer();
    fileText = serializer.serializeToString(xmlDoc);
    download(fileName, fileText);
    window.alert("Success!");
  } else {
    window.alert("Failure!");
  }
  return valid.bool;
}


function validate() {
  let passed = true;
  let elements = document.getElementById("scouter").elements;
  for (i of elements) {
    switch (i.tagName) {
      case "SELECT" :
      case "INPUT" :
        if(!Boolean(String(i.value)) && (String(i.id) != "Comments")) passed = false;
        break;
    }
  }
  return {
    bool: passed,
    msg: "rip"
  }
}
