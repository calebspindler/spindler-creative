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

document.getElementById("splitQuantity").onclick = function() {
    document.getElementById("splitQuantity").value = "";
};

// Run calculateTip app when 'Crunch!' button is clicked. Show an alert box if nothing or 0 is entered.
document.getElementById("crunchBill").onclick = function() {
    if (document.getElementById('beforeTax').value === '' || document.getElementById('beforeTax').value === "0" ) {
        alert("Please enter a valid number.");
    } else {
        calculateTip();
        document.getElementById("resetCalculateApp").style.display = "block";
    }
};

// Show split bill input when 'Need to split?' is clicked. Default to two people.
document.getElementById("splitBillBtn").onclick = function() {
    document.getElementById("splitBillQuantity").style.display = "flex";
};

// Input division for split payments on front end
function splitBill(totalWithTip = parseFloat(document.getElementById("totalWithTip").innerHTML), people = parseInt(document.getElementById('splitQuantity').value)) {
    console.log(totalWithTip / people);
    let totalPerPerson = totalWithTip / people;
    totalPerPerson = totalPerPerson.toFixed(2);
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;
}

// Run splitBill app when Split! button is clicked.
document.getElementById("splitBill").onclick = function() {
    splitBill();
};

// Reset button for resetting entire app
document.getElementById("resetButton").onclick = function() {
    // Hides all sections
    document.getElementById("splitBillBtn").style.display = "none";
    document.getElementById("totalWithTipContainer").style.display = "none";
    document.getElementById("splitBillQuantity").style.display = "none";
    document.getElementById("resetCalculateApp").style.display = "none";
    //Removes values entered for "How much was your bill?" input.
    document.getElementById("beforeTax").value = "";
    // Not perfect. This removes even the "Choose an option" text.
    document.getElementById("serviceQuality").value = "";
};

// Not perfect, because it rounds, if the total is an odd number. If the total is 201.27 and split between two people, it shows 100.64, which is 201.28.