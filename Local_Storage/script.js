// localStorage.setItem(
//     "Key", "Value"
// )

let products = []
const tbody = document.querySelector('tbody')

const render = () => {
    products = JSON.parse(localStorage.getItem('products')) || []
    
    const mapProduct = products.map(product =>{
            return` 
                <tr>
                    <td>${product.name}</td>
                    <td><img style="height: 120px" src="${product.imageURL}" alt="Product Image"/></td>
                    <td>$${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>${product.description}</td>
                </tr>
             `

            })
            tbody.innerHTML = mapProduct.join('')
}

const productNameInput = document.getElementById('productName');
const imageURLInput = document.getElementById('imageURL');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity')
const descriptionInput = document.getElementById('description')

const addProduct = (e) =>{
    e.preventDefault();
    const productName = productNameInput.value;
    const imageURL = imageURLInput.value;
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const description = descriptionInput.value;

    products.push({
        name : productName,
        imageURL: imageURL,
        price : price,
        quantity: quantity,
        description: description
    })

    localStorage.setItem('products', JSON.stringify(products))

    render();

    productNameInput.value = "";
    imageURLInput.value = "";
    priceInput.value= "";
    quantityInput.value = "";
    descriptionInput.value = "";
}


document.addEventListener('DOMContentLoaded', () =>{
    render()
})