var formList = [];

function submitForm() {
    var itemCode = document.querySelector("#item-code").value;
    var itemName = document.querySelector("#item-name").value;
    // var itemBlackQty = document.querySelector("#checkBlackQty").value;                           //quantity??
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

    var found = false;
    checkboxArray.forEach(item => {
        if (item) {
            found = true;
        }
    });

    if (!found) {
        document.querySelector("#checkboxErrorMsg").innerHTML = "Please select at least one color";
        document.querySelector("#checkboxErrorMsg").style.color = "#ff0000";
    }

    if (itemCode.length > 8) {
        document.querySelector("#itemCodeErrorMsg").innerHTML = "Item code should not be more than 8 characters";
    } else if (itemCode.indexOf(" ") > -1) {
        document.querySelector("#itemCodeErrorMsg").innerHTML = "Item code should not contain spaces";
    } else if (/[^a-zA-Z0-9\-\/]/.test(itemCode)) {
        document.querySelector("#itemCodeErrorMsg").innerHTML = "Item code should not contain special characters";
    }

    if (itemName.length > 30) {
        document.querySelector("#itemNameErrorMsg").innerHTML = "Item name should be less than 30 characters";
    }

    if (itemDescript.length > 10) {
        document.querySelector("#itemDescriptionErrorMsg").innerHTML = "Item description should be less than 80 characters";
    }

    // if (found) {
    //     addToList(itemCode, itemName, checkboxArray, itemPrice, itemDescript);
    // }
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