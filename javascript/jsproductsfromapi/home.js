// loading products using ajax
// & making api calls using promise and async await
const loadProductsPromise = () => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', 'https://fakestoreapi.com/products');
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                const resp = xhttp.responseText;
                const productsData = JSON.parse(resp);
                console.log(productsData)
                resolve();

                //////////////////////  Point # 1      products With above Average Price////////////
                let table = `<div>             
                <table class="table table-bordered">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Product Title</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Product Image</th>
                  </tr>
                </thead>
                <tbody>`
                /// first calculte avg price
                const totalPrice = productsData.reduce((sum, productsData) => sum + productsData.price, 0)
                const avgPrice = totalPrice / productsData.length

                const aboveAverageProducts = productsData.filter(product => product.price > avgPrice);
                document.getElementById("averagePrice").innerHTML += " " + avgPrice.toFixed(2)

                aboveAverageProducts.forEach((product) => {
                    table += `<tr scope="row">
                           <td class="text-center pt-5 pb-5">${product.id}</td>
                           <td class="pt-4 pb-4 text-muted">${product.title}</td>
                           <td class="pt-2 pb-2">${product.description}</td>                  
                           <td class="text-center pt-5 pb-5 text-danger"><strong>$ ${product.price}</strong></td>
                           <td class="img-tumbnail"> <img src="${product.image}" alt="Card image cap"width=200 height=100></td>
                       </tr> `
                })
                table += ` </tbody> </table></div>`
                document.getElementById("productsAboveAveragePrice").innerHTML = table
                //////////////////////    End of    products With Above Average Price  //////////////////////////



                /////////////////////////////    Point # 2        top 5 products with highest rating ////////////////      
                // // Sort products rating de-order
                const sorted = productsData.sort((a, b) => b.rating.rate - a.rating.rate);
                // 5 highest rating products
                const top5Products = sorted.slice(0, 5);

                let Top5RatingProductsCards = ` <div class="container"><div class="row">  `
                top5Products.forEach(product => {
                    Top5RatingProductsCards += `<div class="col"><div class="card">
                    <img class="card-img-top" src="${product.image}" alt="Card image cap"width=""height="200px">
                     <div class="card-body bg-secondary">
                     <h5 class="card-title text-light">Product ID: ${product.id}</h5>
                      <h6 class="card-text fs-5 text-danger">$ ${product.price}</h6>
                      <p class="text-warning">Rate: ${product.rating.rate} <br> Count: ${product.rating.count}</p>
                      <p></p>
                    </div>
                    </div> </div>`
                });
                Top5RatingProductsCards += `</div></div>`
                document.getElementById("Top5RatingProducts").innerHTML = Top5RatingProductsCards
                ///////////////////////////    End of     top 5 products with highest rating //////////////// /////// 





                //////////////////////// Point # 4    Print average price and rating //////////////////////
                ///calculate aavg rating bcz in point one avgprice is already calculated.//
                let totalRating = 0
                productsData.forEach((product) => {
                    totalRating += product.rating.rate
                })
                let avgRating = totalRating / productsData.length

                document.getElementById("productAvgRating").innerHTML = "Average Rating: " + avgRating.toFixed(2)
                // also display avgPrice on dom which is calculated before stored in variable => avpPrice 
                document.getElementById("productAvgPrice").innerHTML = "Average Price: $" + avgPrice.toFixed(2)
                //////////////////////// End of         Print average price and rating ///////////////////////////


                //////////////////////    Point # 3        List all distinct categories. ////////////////
                let = headerCategories = `<p class="">`
                
                    fetch('https://fakestoreapi.com/products/categories')
                        .then(res => res.json())
                        .then(distanctCategories => distanctCategories.forEach(category => {
                            headerCategories += `<span class=""> ${category}</span>`
                        }), headerCategories += `</p>`)
                        .then(ddoc => document.getElementById("headCategories").innerHTML = headerCategories)
            //////////////////////    end of        List all distinct categories. /////////////


    //////////////// Point # 5   List top 5 products with highest rating and lowest price //////
                const productRatingDup = {}
                const filterProducts = productsData.filter((product) => {
                    if (productRatingDup[product.rating.rate]) {
                        if (product.price < productRatingDup[product.rating.rate].price)
                        {
                            productRatingDup[product.rating.rate] = product;
                        }
                        return false
                    } else
                    {
                        productRatingDup[product.rating.rate] = product;
                        return true;
                    }
                })
                const sortedProductss = filterProducts.sort((productA, productB) => {
                    if (productA.rating.rate >= productB.rating.rate) {
                        if (productA.price < productB.price) {
                            return productA - productB
                        }
                    }
                })
                const product5 = sortedProductss.slice(0, 5)
                ///////////// showing them in cards /////
                let ProductsCardsHighRatingLowPrice = ` <div class="container"><div class="row">  `
                product5.forEach(product => {
                    ProductsCardsHighRatingLowPrice += `<div class="col"><div class="card">
                    <img class="card-img-top" src="${product.image}" alt="Card image cap"width=""height="200px">
                     <div class="card-body bg-secondary">
                     <h5 class="card-title text-light">Product ID: ${product.id}</h5>
                      <h6 class="card-text fs-5 text-danger">$ ${product.price}</h6>
                      <p class="text-warning">Rate: ${product.rating.rate} <br> Count: ${product.rating.count}</p>
                      <p></p>
                    </div>
                    </div></div> `
                });
                ProductsCardsHighRatingLowPrice += `</div></div>`
                document.getElementById("Top5HrateLprice").innerHTML = ProductsCardsHighRatingLowPrice

     ////////////////////// End Of 5 ///////////////////////////////////////////////////// /////

     
            }// end of readystatechange
        }// end of onLoad
        xhttp.send();
    });// end of promise
}// end of loadProductsPromise



//loading products and user using ajax
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
async function loadUserPromise() 
{
    const product = await fetchData('https://fakestoreapi.com/products')
    const users = await fetchData('https://fakestoreapi.com/users')

    const userList = users.map((user, index) => {
        const userProducts = product.slice(index * 2, (index * 2) + 2); // Select 2 products for each user
        const totalBill = userProducts.reduce((total, product) => total + product.price, 0);
        return {
            user,
            userProducts,
            totalBill,
        };
    });
    
    let point6 = `
            <div class="row">   
                ${userList.map((user) => `
                    <div class="col-3">
                    <div class="card" style="height: 430px">
                            <div class="card-header text-center h4 text-uppercase">  ${user.user.username} </div>
                            <div class="card-body bg-secondary text-light">
                                <h6>Email: ${user.user.email}</h6>
                                <h6>City: ${user.user.address.city}</h6>
                                <h5>Products:</h5>
                                
                                <ul>
                                
                                    ${user.userProducts.slice(0, 3).map((product) => `
                                        <h6> ${product.title}</h6>
                                        <h6 class="text-danger">Price: $${product.price}</h6>`).join("")}

                                </ul>
                                </div>
                                <div class="card-footer">
                                <h5 class="text-warning">Total Bill: $${user.totalBill.toFixed(2)}</h5>
                                </div>
                            
                        </div>
                    </div>`)
      .join("")}
            </div>`

            document.getElementById('userData').innerHTML = point6;
}


async function loadProductsAndUsers() {
    await loadProductsPromise()
    await  loadUserPromise()
    console.log("done")
}
loadProductsAndUsers()

