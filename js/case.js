// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;

// })                                                                                   //normal way without using function

// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
// })

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;                                            // using function
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
});