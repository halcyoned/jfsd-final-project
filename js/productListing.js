// to create an instance of ProductsController Class
const productsControl = new ProductsController();

function loadData() {
    //add items to the ProductsController Class - items currently are hard coded into the class
    //name: Cat Tee Black T-Shirt, description: 4MSL, imageURL:xxx
    //style : Cat, price : 
    
    productsControl.addItem("Men's Backpack", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag1.jpg", "69.90", 2);

    productsControl.addItem("Ladies' Backpack", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag2.jpg", "59.90", 5);

    productsControl.addItem("Children's Backpack", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag3.jpg", "25.90", 8);

    productsControl.addItem("Ladies' Backpack", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag2.jpg", "59.90", 5);

    productsControl.addItem("Ladies' Backpack", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag2.jpg", "59.90", 5);
    
    productsControl.displayItem();
}

loadData();