// to create an instance of ProductsController Class
const productsControl = new ProductsController();

function loadData() {
    //add items to the ProductsController Class - items currently are hard coded into the class
    //name: Cat Tee Black T-Shirt, description: 4MSL, imageURL:xxx
    //style : Cat, price : 
    
    productsControl.addItem("Cat Tee Black T-Shirt", "4 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Cat", 20);

    productsControl.addItem("Dog Tee Black T-Shirt", "5 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Dog", 10);

    productsControl.addItem("Duck Tee Black T-Shirt", "6 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Duck", 15);

    productsControl.addItem("Hamster Tee Black T-Shirt", "7 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Hamster", 20);

    productsControl.addItem("Sheep Tee Black T-Shirt", "8 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Sheep", 30);

    productsControl.displayItem();
}
loadData();