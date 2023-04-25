/* Como requisito, deberás crear un objeto con las propiedades que incluyen: la marca, el modelo, el precio y 
la imagen utilizada. Dado que esta vista le permite al usuario ver una alternativa de compra, al hacer clic 
en “ver una alternativa”, sobrescribirás los valores del objeto que has creado, para poblarlo con nueva información */

let imagenLaptop = document.createElement("img"); //Crea elemento imagen
let contImagen = document.getElementById("imagenLaptop"); //captura contenedor img

let Laptop = {
    marca: "Dell",
    modelo: "xtreme 270",
    precio: "3,990",
    imagen: "./assets/img/dell.jpg"
}

//funcion mostrar info
function mostrarInfo(Laptop) {
    marcaLaptop.innerHTML = Laptop.marca;
    modeloLaptop.innerHTML = Laptop.modelo
    precioLaptop.innerHTML = Laptop.precio;
    // Mostrar la imagen
    imagenLaptop.src = Laptop.imagen;
    imagenLaptop.classList.add("d-block");
    imagenLaptop.style.width = "300px";
    imagenLaptop.style.height = "auto"; 
    contImagen.appendChild(imagenLaptop); // Agregar imagen al contenedor
}
mostrarInfo(Laptop);


//ver alternativa
function verAlternativa() {
    // Sobrescribir valores objeto 
    Laptop.marca = "Apple";
    Laptop.modelo = "MacBook Air";
    Laptop.precio = "999";
    //imagen
    Laptop.imagen = "./assets/img/apple.jpg"; //nueva ruta imagen
    imagenLaptop.src = Laptop.imagen; //Actualizar imagen
    imagenLaptop.classList.add("d-block");
    imagenLaptop.style.width = "350px";
    imagenLaptop.style.height = "auto"; 
    contImagen.appendChild(imagenLaptop); //Agregar imagen al contenedor
    mostrarInfo(Laptop); //muestra la nueva info del objeto
}