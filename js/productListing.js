// to create an instance of ProductsController Class
const productsControl = new ProductsController();

function loadData() {
    //add items to the ProductsController Class - items currently are hard coded into the class
    //name: Cat Tee Black T-Shirt, description: 4MSL, imageURL:xxx
    //style : Cat, price : 

    productsControl.addItem("31263", "Rugged Backpack", ["black", "red", "blue", "white"], "$69.90", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag1.jpg");

    productsControl.addItem("12312", "Stylish Backpack", ["black", "white", "pink"], "$59.90", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag2.jpg");

    productsControl.addItem("54567", "Playful Backpack", ["black", "pink"], "$25.90", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag3.jpg");

    productsControl.addItem("21314", "Social Backpack", ["black", "blue", "brown", "white"], "$59.90", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag2.jpg");

    productsControl.addItem("65743", "After work Backpack", ["black"], "$59.90", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "images/bag1.jpg");

    productsControl.displayItem();
}

loadData();