//Doing a Product web app, in product page to display the name, description, imageURL, style, price ....

const createHTMLList = (name, description, imageURL) =>
`
<div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src=${imageURL} class="card-img-top"
                alt="image">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-primary">More</a>
            </div>
        </div>
      </div>
`;

<div class="card-deck">
    <div class="card" style="width: 18rem;">
        <img src="images/bag1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Men's backpack</h5>
            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            
            <p>$69.50 <span class="badge badge-warning">2 pcs left!</span></p>
            
            <p class="badge badge-warning">2 pcs left!</p>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Colour</button>
        
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Black</a>
                    <a class="dropdown-item" href="#">Blue</a>
                    <a class="dropdown-item" href="#">Red</a>
                </div>
            </div>>
        </div>
    </div>
</div>


class ProductsController {
    constructor() {
        this._items = [];   //create an array to store the details of product items
    }


    //method to add the items into the array
    addItem(name, description, imageURL, style, price) {
        const itemObj = {
            oName: name,
            oDescription: description,
            oimageURL: imageURL,
            oStyle: style,
            oPrice: price
        };

        this._items.push(itemObj);
    }

    displayItem() {

        var productHTMLList = [];

        for (var i=0; i<this._items.length; i++) {

            const item = this._items[i];    //this is to assign the individual items to the variable

            const productHTML = createHTMLList(item.oName, item.oDescription, item.oimageURL);

            productHTMLList.push(productHTML);
        }

        //join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#row').innerHTML = pHTML;

    }

}   //End of ProductsController class