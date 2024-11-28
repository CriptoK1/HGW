// Componente reutilizable para crear una tarjeta de producto
function createProductCard(name, price, imageUrl) {
    const card = document.createElement('div');
    card.className = 'producto';

    // Contenedor de la imagen
    const productImageDiv = document.createElement('div');
    productImageDiv.className = 'producto-imagen';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `Imagen de ${name}`;
    image.className = 'product-image';
    productImageDiv.appendChild(image);
    card.appendChild(productImageDiv);

    // Contenedor de información del producto
    const info = document.createElement('div');
    info.className = 'producto-info';

    const category = document.createElement('p');
    category.className = 'categoria';
    category.textContent = 'Categoría'; // Puedes personalizar esto o agregar datos dinámicos
    info.appendChild(category);

    const productName = document.createElement('h3');
    productName.className = 'nombre';
    productName.textContent = name;
    info.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.className = 'precio';
    productPrice.textContent = price;
    info.appendChild(productPrice);

    // Botón de "Añadir al carrito"
    const btnCarrito = document.createElement('button');
    btnCarrito.className = 'btn-carrito';
    btnCarrito.textContent = 'Añadir al carrito';
    info.appendChild(btnCarrito);

    // Botón de "Comprar"
    const btnComprar = document.createElement('button');
    btnComprar.className = 'btn-comprar';
    btnComprar.textContent = 'Comprar ahora';
    info.appendChild(btnComprar);

    card.appendChild(info);

    return card;
}

// Función para agregar productos dinámicamente a un contenedor
function addProductsToPage(products, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        // Limpiar el contenedor
        container.innerHTML = '';

        // Crear y agregar cada tarjeta de producto
        products.forEach(product => {
            const productCard = createProductCard(product.name, product.price, product.imageUrl);
            container.appendChild(productCard);
        });
    }
}
let currentIndex = 0;
function moveSlider() {
    const slider = document.getElementById('product-slide');
    const totalItems = slider.children.length;
    if (totalItems > 0) {
        if (currentIndex === totalItems - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        slider.style.transform = `translateX(-${currentIndex * 320}px)`; // Desplazar el slider (ajusta el valor 320 a tu necesidad)
    }
}

// Función para iniciar el slider automático
function startSlider() {
    setInterval(moveSlider, 3000); // Cambiar de slide cada 3 segundos
}

// Cargar los productos al cargar la página
window.onload = function () {
    addProductsToSlider(food); // Puedes cambiar la variable de productos aquí (food, products, etc.)
    startSlider(); // Iniciar el slider automático
};
//ARRAYS

const products = [
    { name: "Pasta Dental", price: "$30,400", imageUrl: "https://file.healthgreenworld.com/file/image/20230629/265b6065cac94e7fb227d0bda8219602.jpg" },
    { name: "Ganoderma Soluble Coffee", price: "$87,400", imageUrl: "https://file.healthgreenworld.com/file/image/20230629/4b344f5237c640519bd408378813bdba.jpg" },
    { name: "Black Tea Coffee", price: "$76,000", imageUrl: "https://file.healthgreenworld.com/file/image/20220711/70fe377106ff41cd8ca59284c00745d7.jpg" },
    { name: "Caramelos de arándano", price: "$22,040", imageUrl: "https://file.healthgreenworld.com/file/image/20230629/fbb685c98ed543b19613ea47b012ec79.jpg" },
    { name: "Jabón Turmalina", price: "$15,960", imageUrl: "https://file.healthgreenworld.com/file/image/20230629/be365d7a3cb24699a58ed13b76389303.jpg" }
];

const food = [
    { name: "Ganoderma Soluble Coffee", price: "$87,400", imageUrl: "https://via.placeholder.com/150" },
    { name: "Blue Berry Coffee", price: "$87,400", imageUrl: "https://via.placeholder.com/150" },
    { name: "Berry Coffee", price: "$600,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Black Tea Coffee", price: "$76,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Lactiberry", price: "$98.800", imageUrl: "https://via.placeholder.com/150" },
    { name: "Mermelada", price: "$45.800", imageUrl: "https://via.placeholder.com/150" },
    { name: "Caramelos de arandano", price: "$22.800", imageUrl: "https://via.placeholder.com/150" },
    { name: "Proteina de arandano", price: "$136.800", imageUrl: "https://via.placeholder.com/150" },
];
const selfcare = [
    { name: "Toalla Sanitaria Día", price: "$1,200,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Toalla Sanitaria Noche", price: "$600,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Protector diario", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Jabón Turmalina", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Pasta Dental", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
];

const cosmetics = [
    { name: "Toalla Sanitaria Día", price: "$1,200,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Toalla Sanitaria Noche", price: "$600,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Protector diario", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Jabón Turmalina", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Pasta Dental", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
];
const equipment = [
    { name: "Toalla Sanitaria Día", price: "$1,200,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Toalla Sanitaria Noche", price: "$600,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Protector diario", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Jabón Turmalina", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Pasta Dental", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
];
const accessories = [
    { name: "Toalla Sanitaria Día", price: "$1,200,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Toalla Sanitaria Noche", price: "$600,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Protector diario", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Jabón Turmalina", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
    { name: "Pasta Dental", price: "$150,000", imageUrl: "https://via.placeholder.com/150" },
];

window.onload = function () {
    addProductsToPage(food, 'food-section');
    addProductsToPage(products, 'product-container');
    addProductsToPage(selfcare, 'selfcare-section' )
    addProductsToPage(cosmetics, 'cosmetics-section' )
    addProductsToPage(equipment, 'equipment-section' )
    addProductsToPage(accessories, 'accessories-section' )
};
