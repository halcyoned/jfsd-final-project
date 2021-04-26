//Doing a Product web app, in product page to display the name, description, imageURL, style, price ....

const createHTMLList = (name, description, imageURL, price, quantity) => 
    `<div class="card-deck mb-5 m">
        <div class="mx-5 card" style="width: 18rem;">
            <img src="${imageURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                
                <p>$${price}</p><p class="badge badge-warning">${quantity} pcs left!</p> 
                

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Colour</button>
            
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Black</a>
                        <a class="dropdown-item" href="#">Blue</a>
                        <a class="dropdown-item" href="#">Red</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;



class ProductsController {
    constructor() {
        this._items = [];   //create an array to store the details of product items
    }


    //method to add the items into the array
    addItem(name, description, imageURL, price, quantity) {
        const itemObj = {
            oName: name,
            oDescription: description,
            oimageURL: imageURL,
            oPrice: price,
            oQuantity: quantity
        };
        
      this._items.push(itemObj);
    }

    displayItem() {

        var productHTMLList = [];

        for (var i=0; i<this._items.length; i++) {

            const item = this._items[i];    //this is to assign the individual items to the variable

            const productHTML = createHTMLList(item.oName, item.oDescription, item.oimageURL, item.oPrice, item.oQuantity);

            productHTMLList.push(productHTML);
        }

        //join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#row').innerHTML = pHTML;

    }

}   //End of ProductsController class