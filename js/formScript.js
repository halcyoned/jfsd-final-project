var formList = [];

function resetError() {
    document.querySelector("#checkboxErrorMsg").innerHTML = "";
    document.querySelector("#itemCodeErrorMsg").innerHTML = "";
    document.querySelector("#itemNameErrorMsg").innerHTML = "";
    document.querySelector("#itemDescriptionErrorMsg").innerHTML = "";
}

function submitForm() {

    resetError();

    var itemCode = document.querySelector("#item-code").value;
    var itemName = document.querySelector("#item-name").value;
    var itemPrice = document.querySelector("#item-price").value;
    var itemDescript = document.querySelector("#item-description").value;
    // var itemImage = document.querySelector("#").value;                              //image??

    var checkboxArray = [];
    checkboxArray.push(document.querySelector("#checkBlack").checked);
    checkboxArray.push(document.querySelector("#checkBlue").checked);
    checkboxArray.push(document.querySelector("#checkBrown").checked);
    checkboxArray.push(document.querySelector("#checkPink").checked);
    checkboxArray.push(document.querySelector("#checkRed").checked);
    checkboxArray.push(document.querySelector("#checkWhite").checked);

    var foundColor = false;
    checkboxArray.forEach(item => {
        if (item) {
            foundColor = true;
        }
    });

    if (!foundColor) {
        document.querySelector("#checkboxErrorMsg").innerHTML = "Please select at least one color";
        document.querySelector("#checkboxErrorMsg").style.color = "#ff0000";
    }

    var foundCode = false;
    if (itemCode.length > 8) {
        document.querySelector("#itemCodeErrorMsg").innerHTML = "Item code should not be more than 8 characters";
    } else if (itemCode.indexOf(" ") > -1) {
        document.querySelector("#itemCodeErrorMsg").innerHTML = "Item code should not contain spaces";
    } else if (/[^a-zA-Z0-9\-\/]/.test(itemCode)) {
        document.querySelector("#itemCodeErrorMsg").innerHTML = "Item code should not contain special characters";
    } else {
        foundCode = true;
    }

    var foundName = false;
    if (itemName.length > 30) {
        document.querySelector("#itemNameErrorMsg").innerHTML = "Item name should be less than 30 characters";
    } else {
        foundName = true;
    }

    var foundDescript = false;
    if (itemDescript.length > 80) {
        document.querySelector("#itemDescriptionErrorMsg").innerHTML = "Item description should be less than 80 characters";
    } else {
        foundDescript = true;
    }

    if (foundColor && foundCode && foundName && foundDescript) {
        addToList(itemCode, itemName, checkboxArray, itemPrice, itemDescript);
        document.querySelector("#item_form").reset();
    }
}

function addToList(itemCode, itemName, checkboxArray, itemPrice, itemDescript) {
    const item = {
        iCode: itemCode,
        iName: itemName,
        black: checkboxArray[0],
        blue: checkboxArray[1],
        brown: checkboxArray[2],
        pink: checkboxArray[3],
        red: checkboxArray[4],
        white: checkboxArray[5],
        iPrice: itemPrice,
        iDescript: itemDescript
    }
    formList.push(item);
    listForm();
}

function listForm() {
    console.log(`Total items: ${formList.length}`);
    console.log(formList);
}