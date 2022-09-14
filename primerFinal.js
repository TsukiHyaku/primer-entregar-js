const productos = [
    {nombre: "buzo de nezuko", precio: 5800},
    {nombre: "galletitas" , precio: 6700},
    {nombre: "cerveza" , precio: 4200 },
    {nombre: "manteca" , precio: 4900},
    {nombre: "azucar" , precio: 5200},
    {nombre: "buzo de vegetta777" , precio: 5300},
];
let carrito = []
let seleccion = prompt("Hola ¿desea comprar algo? si o no.")

while(seleccion.toLocaleLowerCase() != "si" && seleccion.toLocaleLowerCase() != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola ¿Desea comprar algo? si o no.")
}

if(seleccion == "si"){
    alert("a continuacion se mostrara nuestro listado de productos")
    let todosLosProductos = productos.map((producto) => `${producto.nombre}  $${producto.precio}`);
    alert(todosLosProductos.join(" - "))
}else if(seleccion == "no"){
    alert("gracias, vuelva prontos")
}
while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0
    
    if(producto == "buzo de nezuko" || producto == "buzo de creeper" || producto == "buzo de  gintama" || producto == "buzo de ricardo Milos" || producto == "buzo de rubius" || producto == "buzo de vegetta777"){
        switch(producto){
            case "buzo de nezuko":
                precio = 5800 ;
                break;
            case "buzo de creeper":
                precio = 6700;
                break;
            case "buzo de  gintama":
                precio = 4200 ;
                break;
            case "buzo de ricardo Milos":
                precio = 4900 ;
                break;
            case "buzo de rubius":
                precio = 5200 ;
                break;
            case "buzo de vegetta777":
                precio = 5300;
                break;
        }
        let unidades =parseInt(prompt("¿cuantas unidades quiere llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando? si o no.")
    while(seleccion.toLocaleLowerCase() != "si" && seleccion.toLocaleLowerCase() != "no"){
        alert("Por favor ingrese si o no")
        seleccion = prompt("desea seguir comprando? si o no.")
    }
    while(seleccion.toLocaleLowerCase() === "no"){
        alert("gacias, vuelva prontos")
        carrito.forEach((carritoFinal) => {
            console.log(`producto : ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar pro producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
}
 const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
 console.log(`el total a pagar es: ${total}`)