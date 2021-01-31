const products = [{
        id: 1,
        name: 'iPhone 12',
        price: 99,
        image: './images/iphone-12.png'
    },
    {
        id: 2,
        name: 'AirPods',
        price: 89,
        image: './images/airpods.png'
    }
]

const renderProducts = () => {
    const productDiv = document.querySelector('.products')
    productDiv.innerHTML = ''

    products.forEach((item, index) => {
        productDiv.innerHTML += 
        `<div class="product">
            <div class="product__image">
                <img src="${item.image}" />
            </div>
            <h2 class="product__title">${item.name}</h2>
            <h3 class="product__price">${item.price} تومان</h3>
            <button class="add-to-cart">افزودن به سبد خرید</button>
        </div>`
    })
    console.log(productDiv);
}

renderProducts()