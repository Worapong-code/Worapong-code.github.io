// function DisProduct() {
//     document.getElementById("dispalyproducts").innerHTML  = products.map((element)=>{
//         return `
        
//                 <div class="myDIV card col-lg-auto mt-2 pt-2" style="width: 14rem;">
                  
//                    <img class="myDIV  card-img-top" src="${element.url}" alt="Card image cap">
//                    <div class="card-body align-self-center">
//                      <h5 class="card-title">${element.name}</h5>
//                      <p class="card-text ">${element.des}</p>
        
//                    </div>
//                    <div class="row card-body justify-content-center">
//                      <h4 class="card-text col-md-6">${element.price} $</h4>
//                      <a href="#" onclick="addToCart2(${element.id})" class="btn btn-primary btn-outline-primary col-md-6" style=" font-size: 13px;">Add to Cart</a>
//                      </div>
//                    </div>
                  
//                    `
//      }).join('')
// }
function DisProduct() {
  document.getElementById("dispalyproducts").innerHTML  = products.map((element)=>{
      return `
            
        <!-- Button trigger modal --> 
        <div class="myDIV card col-lg-auto mt-2 pt-2" style="width: 14rem;">
          <div type="button" class="" data-toggle="modal" data-target="#exampleModal">
            <img src="${element.url}" alt="" class="" style="width: 10rem;">
          </div>
       
          <div class="card-body align-self-center">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text ">${element.des}</p>
          </div>

          <div class="row card-body justify-content-center">
            <h4 class="card-text col-md-6">${element.price} $</h4>
            <a href="#" onclick="addToCart2(${element.id})" class="btn btn-primary btn-outline-primary col-md-6" style=" font-size: 13px;">Add to Cart</a>
          </div>

        </div>

        <!-- Modal -->
        <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div class="modal-dialog  modal-lg" role="document">
            <div class="modal-content">
             
              <div class="modal-body text-center">
                <img src="${element.url}" alt="" class="" style="width: 40rem;">
                    </div>
              <div class="modal-footer">
                     </div>
            </div>
          </div>
        </div>
            
      
             
                
                 `
   }).join('')
}
DisProduct();






function myFunction(e) {
  let content = e;
  let productFil = products.filter( (a) => {
    if(content === ''){ return a;}
    else if(a.name.toLowerCase().includes(content.toLowerCase())){
       return a; 
    }
}).map( (a) => {
 
    return(
        
      `     
      <!-- Button trigger modal --> 
      <div class="myDIV card col-lg-auto mt-2 pt-2" style="width: 14rem;">
        <div type="button" class="" data-toggle="modal" data-target="#exampleModal">
          <img src="${a.url}" alt="" class="" style="width: 10rem;">
        </div>
     
        <div class="card-body align-self-center">
          <h5 class="card-title">${a.name}</h5>
          <p class="card-text ">${a.des}</p>
        </div>

        <div class="row card-body justify-content-center">
          <h4 class="card-text col-md-6">${a.price} $</h4>
          <a href="#" onclick="addToCart2(${a.id})" class="btn btn-primary btn-outline-primary col-md-6" style=" font-size: 13px;">Add to Cart</a>
        </div>

      </div>

      <!-- Modal -->
      <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog  modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">${a.name}</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center">
              <img src="${a.url}" alt="" class="" style="width: 40rem;">
                  </div>
            <div class="modal-footer">
                   </div>
          </div>
        </div>
      </div>
    
    `

    );
} ).join(''); 
document.getElementById("dispalyproducts").innerHTML = productFil;
// console.log(productFil)
}

 function addToCart2(id){
  
  addToCart(id);
  CountCart()
  document.getElementById("countCart").innerHTML =  totalInCart

  window.location.reload;
  
 }


 document.getElementById("countCart").innerHTML =  totalInCart

