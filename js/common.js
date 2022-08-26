function getPriceValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementAmmountString = element.innerText;
    const elementAmmount = parseInt(elementAmmountString);
    return elementAmmount;
}

function setTotalValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function totalPrice() {
    const phonePrice = getPriceValueById('phone-total');
    const casePrice = getPriceValueById('case-total');
    const subTotal = phonePrice + casePrice;

    setTotalValueById('subtotal-ammount', subTotal);

    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);

    setTotalValueById('tax-ammount', tax);

    const totalPrice = subTotal + tax;

    setTotalValueById('total-ammount', totalPrice);
}