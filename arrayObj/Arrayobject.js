// const products = [
//     { id: 1, name: "Laptop", price: 1200, inStock: true },
//     { id: 2, name: "Mouse", price: 25, inStock: true },
//     { id: 3, name: "Keyboard", price: 75, inStock: false },
//     { id: 4, name: "Monitor", price: 300, inStock: true },
//     { id: 5, name: "Webcam", price: 50, inStock: true }
// ];

// function show(products){
//     console.log(`id = ${products.id}`);
//     console.log(`name = ${products.name}`);
//     console.log(`price = ${products.price}`);
//     console.log(`inStock = ${products.inStock}`);
//     console.log(`--------------`);
    
// }

// products.forEach(show)



// ----------------------------------------

// const people = [
//     {
//         name : 'ly',
//         age : 18,
//         gender: 'Male'
//     },
//     {
//         name : 'nit',
//         age : 17,
//         gender: 'Female'
//     },
//     {
//         name : 'Hongly',
//         age : 19,
//         gender: 'Male'
//     }
// ]
// const container = document.querySelector('.container')

// people.forEach(person => {
//     container.innerHTML += `
//         <div class='userCard'>
//             <h3>UserName: ${person.name}</h3>
//             <hr>
//             <h4>Age: ${person.age}</h4>
//             <h4>Gender: ${person.gender}</h4>
        
//         </div>
//     `
// })

// ----------------------------------------------------

const prods = 
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
    ,'isWish' :true
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
     ,'isWish' :false
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
     ,'isWish' :true
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
     ,'isWish' :true
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "women  ",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
     ,'isWish' :false
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    } ,'isWish' :true
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    } ,'isWish' :false
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
     ,'isWish' :true
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
     ,'isWish' :true
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
     ,'isWish' :false
  }
]

const main = document.querySelector('main');
const display = document.querySelector('.display');
const category = document.getElementById('category');

let wish = 0

function countWish(){
  prods.forEach(prod => prod.isWish ? wish++ : 0);  
}
function render(){
  wish = 0;
  countWish()
  display.innerHTML = wish
  prods.forEach((prod,index) => {
     main.innerHTML += `
    <div class="card">
            <img src="${prod.image}" alt="">
            <hr>
            <h4>${prod.title}</h4>
            <p>${prod.description}</p>
            <p><span>${prod.price}</span></p>
            <p>Rating: <span>${prod.rating.rate}</span></p>
            <p>Count: <span>${prod.rating.count}</span> <i class="bi bi-eye-fill"></i></p>
                <button>Buy</button>
                <button onclick="counter(${index})"><i class=" ${prod.isWish ? 'isWish' : ''} bi bi-heart-fill"></i></button>
        </div>`;
      })
}

render();

function counter(index){
  prods[index].isWish = !prods[index].isWish;
  main.innerHTML ='' 
  render();
}

category.addEventListener('input', function(){
  main.innerHTML = '';
  const filterProducts = prods.filter( pro => pro.category.toLocaleLowerCase() === category.value.toLocaleLowerCase())
  filterProducts.forEach((prod) => {
     const originalIndex = prods.findIndex(p => p.id === prod.id);
     main.innerHTML += `
    <div class="card">
            <img src="${prod.image}" alt="">
            <hr>
            <h4>${prod.title}</h4>
            <p>${prod.description}</p>
            <p><span>${prod.price}</span></p>
            <p>Rating: <span>${prod.rating.rate}</span></p>
            <p>Count: <span>${prod.rating.count}</span> <i class="bi bi-eye-fill"></i></p>
                <button>Buy</button>
                <button onclick="counter(${index})"><i class=" ${prod.isWish ? 'isWish' : ''} bi bi-heart-fill"></i></button>
        </div>`;
  })
})

// let counter = 0;
// function counterFunc(){
//     counter++
//     display.innerHTML = counter;
// }


// prods.forEach( prod => {
//     main.innerHTML += `
//     <div class="card">
//             <img src="${prod.image}" alt="">
//             <hr>
//             <h4>${prod.title}</h4>
//             <p>${prod.description}</p>
//             <p><span>${prod.price}</span></p>
//             <p>Rating: <span>${prod.rating.rate}</span></p>
//             <p>Count: <span>${prod.rating.count}</span> <i class="bi bi-eye-fill"></i></p>
//             <div>
//                 <button>Buy</button>
//                 <button onclick="counterFunc()"><i class="bi bi-heart-fill"></i></button>
//             </div>
//         </div>`
// })