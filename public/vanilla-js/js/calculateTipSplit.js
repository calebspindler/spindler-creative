// Tip and Split Calculation App

// Input bill total and tax rate via front end
function calculateTip(billTotal = parseFloat(document.getElementById('beforeTax').value), tipAmount = parseFloat(document.getElementById('serviceQuality').value)) {
    // Calculate bill total * tip percentage
    const total = billTotal + billTotal * tipAmount;
    // Round up to two decimal places
    const totalPlusTip = total.toFixed(2);
    // Display total + tip on front end
    document.getElementById("totalWithTip").innerHTML = totalPlusTip;
    document.getElementById("totalWithTipContainer").style.display = "block";
    // Display split bill button
    document.getElementById("splitBillBtn").style.display = "block";
}

// Removes the value so that the user can enter however many they want.
document.querySelector("#splitQuantity").addEventListener('click', function() {
    document.querySelector("#splitQuantity").value = "";
});

// Error Modal - get modal and close button
const errorModal = document.querySelector("#errorModal");


// Close Error Modal
document.querySelector(".closeModal").addEventListener('click', function() {
    errorModal.style.display = "none";
});

// Close Error Modal when user clicks outside of modal.
window.addEventListener('click', function(event) {
    if (event.target === errorModal) {
        errorModal.style.display = "none";
    }
});

// Run calculateTip app when "Crunch!" button is clicked. Show an alert box if nothing or 0 is entered.
document.querySelector("#crunchBill").addEventListener('click', function() {
    const checkInput = document.querySelector("#beforeTax").value;
    if (checkInput === "" || checkInput === "0" || isNaN(checkInput)) {
        errorModal.style.display = "block";
    } else {
        calculateTip();
        document.getElementById("resetCalculateApp").style.display = "block";
    }
});

// Show split bill input when "Need to split?" is clicked.
document.querySelector('#splitBillBtn').addEventListener('click', function() {
    document.getElementById("splitBillQuantity").style.display = "flex";
});

// Input division for split payments on front end
function splitBill(totalWithTip = parseFloat(document.getElementById("totalWithTip").innerHTML), people = parseInt(document.getElementById('splitQuantity').value)) {
    let totalPerPerson = totalWithTip / people;
    totalPerPerson = totalPerPerson.toFixed(2);
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;
}

// Run splitBill app when "Split!" button is clicked.
document.querySelector("#splitBill").addEventListener('click', function() {
    splitBill();
});

// Reset button for resetting entire app
document.querySelector('#resetButton').addEventListener('click', function() {
    document.getElementById("splitBillBtn").style.display = "none";
    document.getElementById("totalWithTipContainer").style.display = "none";
    document.getElementById("splitBillQuantity").style.display = "none";
    document.getElementById("resetCalculateApp").style.display = "none";
    document.getElementById("calculateTipForm").reset();
});

// Not perfect, because it rounds, if the total is an odd number. If the total is 201.27 and split between two people, it shows 100.64, which is 201.28.