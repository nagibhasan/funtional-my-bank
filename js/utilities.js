function getInputFieldValueById(inputFieldId){
    const inputfield = document.getElementById(inputFieldId);
    const inputFieldValueString = inputfield.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldId.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById( elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}