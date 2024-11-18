document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    fetch('https://fakestoreapi.in/api/products')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            
            
            const products = data.products;

            
            if (Array.isArray(products)) {
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');

                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-price">$${product.price}</p>
                        <p class="product-description">${product.description}</p>
                    `;

                    productContainer.appendChild(productCard);
                });
            } else {
                console.error('Products data is not an array.');
            }
        })
        .catch(error => {
            console.error('Error fetching the products:', error);
        });
});
