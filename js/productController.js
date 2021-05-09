//Doing a Product web app, in product page to display the name, description, imageURL, style, price ....

const createHTMLList = (index, code, name, colorArray, price, description, image, category) =>
    `<div class="card mb-5 column ${category}" style="width:18rem">
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img src="${image}" class="card-img-top" alt="...">
                    <h5>${category}</h5>
                </div>
                <div class="flip-box-back">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"></p>
                        <p>${price}</p>
                        <a id="${index}" href="#" class="btn btn-outline-dark" data-toggle="modal" data-target="#productModal">More</a>
                    </div>
                </div>
            </div>          
        </div>
    </div>`;

const createColorDropdown = (colorArray) => {
    var colorCode = "";
    for (i = 0; i < colorArray.length; i++) {

        colorCode = colorCode + `<a class="dropdown-item" href="#">${(colorArray[i].substring(0, 1)).toUpperCase() + colorArray[i].substring(1)}</a>`;
    }
    return colorCode;
}

function displayProductModal(item) {
    document.querySelector("#modalName").innerText = item.oItemName;
    document.querySelector("#modalCode").innerText = item.oItemCode;
    document.querySelector("#modalImg").src = item.oItemImage;
    document.querySelector("#modalDescription").innerText = item.oItemDescription;
    document.querySelector("#modalPrice").innerText = item.oItemPrice;
    document.querySelector("#colorDropdown").innerHTML = createColorDropdown(item.oColorArray);
}

class ProductsController {
    constructor() {
        this._items = [];   //create an array to store the details of product items
    }


    //method to add the items into the array
    addItem(itemCode, itemName, colorArray, itemPrice, itemDescript, itemImage, itemCategory) {
        const itemObj = {
            oItemCode: itemCode,
            oItemName: itemName,
            oColorArray: colorArray,
            oItemPrice: itemPrice,
            oItemDescription: itemDescript,
            oItemImage: itemImage,
            oItemCategory: itemCategory
        };

        this._items.push(itemObj);
    }

    displayItem() {

        var productHTMLList = [];

        //for men
        
        for (var i = 0; i < this._items.length; i++) {
            
            if (this._items[i].oItemCategory == "men") {
            const item = this._items[i];    //this is to assign the individual items to the variable

            const productHTML = createHTMLList(i, item.oItemCode, item.oItemName, item.oColorArray, item.oItemPrice, item.oItemDescription, item.oItemImage, item.oItemCategory);

            productHTMLList.push(productHTML);
            }
        }
        
        //for Ladies
        
        for (var i = 0; i < this._items.length; i++) {
            if(this._items[i].oItemCategory == "ladies") {
            const item = this._items[i];    //this is to assign the individual items to the variable

            const productHTML = createHTMLList(i, item.oItemCode, item.oItemName, item.oColorArray, item.oItemPrice, item.oItemDescription, item.oItemImage, item.oItemCategory);

            productHTMLList.push(productHTML);
            }
        }
        
        //for Kids
        
        for (var i = 0; i < this._items.length; i++) {
            if(this._items[i].oItemCategory == "kids") {
            const item = this._items[i];    //this is to assign the individual items to the variable

            const productHTML = createHTMLList(i, item.oItemCode, item.oItemName, item.oColorArray, item.oItemPrice, item.oItemDescription, item.oItemImage, item.oItemCategory);

            productHTMLList.push(productHTML);
            }
        }

        //add empty child div to ensure cards aligns to left side, all cards have width:18rem
        for (i = 0; i < 3 - (this._items.length % 3); i++) {
            productHTMLList.push('<div style="width:18rem">\n</div>');
        }
  
        //join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#row').innerHTML = pHTML;

        //addEventListener - click event
        for (let i = 0; i < this._items.length; i++) {
            const item = this._items[i];
            document.getElementById(i).addEventListener("click", function () { displayProductModal(item); });
        }

    }

}   //End of ProductsController class