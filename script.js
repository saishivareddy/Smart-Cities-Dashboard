document.addEventListener('DOMContentLoaded', () => {
    const tilesContainer = document.getElementById('tiles-container');
    const addProductButton = document.getElementById('add-product-button');

    // Sample data for products
    const products = [
        { name: 'Smart Traffic Lights', data: 'Active: 120 Lights' },
        { name: 'Waste Management', data: 'Bins Full: 65%' },
        { name: 'Air Quality', data: 'PM2.5: 45 µg/m³' },
    ];

    // Function to create a tile
    function createTile(product) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.data}</p>
        `;
        return tile;
    }

    // Add initial products to the dashboard
    products.forEach((product) => {
        const tile = createTile(product);
        tilesContainer.appendChild(tile);
    });

    // Add new product functionality
    addProductButton.addEventListener('click', () => {
        const newProductName = prompt('Enter Product Name:');
        const newProductData = prompt('Enter Product Data:');
        if (newProductName && newProductData) {
            const newTile = createTile({ name: newProductName, data: newProductData });
            tilesContainer.appendChild(newTile);
        }
    });
});
