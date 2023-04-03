// const Products = {
//     id:1, 
//     name: "papas fritas",
//     description: "descripcion del producto",
//     stock: 100
// }

function productos(id, name, description, stock, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.category = category;
}


const Products = [
    new productos(1, "papas fritas", "descripcion del objeto", 500, "alimento"),
    new productos(2, "agua en botella", "descripcion del objeto", 200, "alimento"),
    new productos(3, "monster", "descripcion del objeto", 1000, "alimento"),
    new productos(4, "pilas AA", "descripcion del objeto", 150, "electronica"),
    new productos(5, "papas", "descripcion del objeto", 700, "alimento"),
    new productos(6, "lapiz 2B", "descripcion del objeto", 550, "papeleria"),
    new productos(7, "Samsung A12", "descripcion del objeto", 100, "electronica"),
    new productos(8, "laptop HP", "descripcion del objeto", 700, "electronica"),
    new productos(9, "Monitor 22 \" ", "descripcion del objeto", 50, "electronica"),
    new productos(10, "mouse Gamer", "descripcion del objeto", 600, "electronica")
];


function print() {
    console.log(Products)
}

function findById(id) {

    console.log(Products.find(element => element.id == id))

}

function stockOver(){
    Products.forEach(element => {
        if(element.stock >= 300){
            console.log(element)
        }
    });
}

function selectProductByCategory(category){
    let patata

    switch (category){
        case "alimento":
            
            patata = Products.filter(element => element.category == "alimento");
            break;
        
        case "electronica":
            patata = Products.filter(element => element.category == "electronica");
            break;
        
        case "papeleria":
            patata = Products.filter(element => element.category == "papeleria");
            break;

        default:
            console.log("sintax error")
            break
    }
    
    return console.log(patata);
}

console.log("*/*/*/*/*/*/*//*/*/*/*/*/*/*/*//1")
selectProductByCategory("alimento")
console.log("*/*/*/*/*/*/*//*/*/*/*/*/*/*/*//")
stockOver();
console.log("*/*/*/*/*/*/*//*/*/*/*/*/*/*/*//")
findById(5);
console.log("*/*/*/*/*/*/*//*/*/*/*/*/*/*/*//")
print();
