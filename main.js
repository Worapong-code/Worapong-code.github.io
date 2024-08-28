document.getElementById("saleoffproduct").innerHTML  = products.map((element)=>{

    if (element.discount>0) {
     return (
        `<div class="card col-md-3  mt-sm-2" style="width: 10rem;">
          <span class="abs bgred border-1">Sale ${element.discount} %</span>
          <img class="card-img-top" src="${element.url}">
          <div class="card-body row justify-content-lg-center ">
            <p class="card-text col-lg-12 text-lg-center">${element.name}</p>
            <h4 class="card-text "><del>${element.price+element.price*element.discount/100} $ </del></h4>
            <h4 class="card-text">></h4>
            <h4 class="  ress">${+element.price} $</h4>
          </div>
        </div>`
  )
    } 


 }).join("")

 document.getElementById("newproduct").innerHTML  = products.map((element)=>{
  
  if (element.productnew) {
   return (
      `<div class="card col-md-3  mt-sm-2" style="width: 10rem;">
        <span class="abs bgblue border-1">New arrivals</span>
        <img class="card-img-top" src="${element.url}">
        <div class="card-body row justify-content-lg-center ">
          <p class="card-text col-lg-12 text-center"">${element.name}</p>
          <h4 class="card-text">${element.price} $</h4>
        </div>
      </div>`
)
  } 


}).join("")

document.getElementById("bestproduct").innerHTML  = products.map((element)=>{

  if (element.best) {
   return (
      `<div class="card col-md-3  mt-sm-2" style="width: 10rem;">
        <span class="abs bggreen border-1">Best seller</span>
        <img class="card-img-top" src="${element.url}">
        <div class="card-body row justify-content-lg-center ">
          <p class="card-text col-lg-12 text-center">${element.name}</p>
          <h4 class="card-text">${element.price} $</h4>
        </div>
      </div>`
)
  } 


}).join("")

 document.getElementById("countCart").innerHTML = totalInCart;
//  console.log(products.productnew)
//  console.log(ButtonCart)
 CountCart();
