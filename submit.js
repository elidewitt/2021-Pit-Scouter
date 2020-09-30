
function validateAndSubmit() {
  let xmlDoc, fileName, fileText, theForm, formName;
  formName = "scouter";

  let valid = validate();
  if (valid.bool == true) {
    fileName = document.getElementById("Team Number").value + "_P.xml";
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
  return {
    bool: true,
    msg: "Great Job"
  }
}
