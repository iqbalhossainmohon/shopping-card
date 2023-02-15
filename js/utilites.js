function getTextValueById(elementById) {
    const phoneTotalElement = document.getElementById(elementById);
    const phoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementBy, value){
    const subTotalElement = document.getElementById(elementBy);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // calculate sub total 
    const currentPhoneTotal = getTextValueById('phone-total');
    const currentCaseTotal = getTextValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubTotal);
    // calculate tax 
    const taxAmountString = (currentSubTotal *0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-amount', finalAmount);
}