
function Cart (){
let noNum = 0;
let empty = true;
    document.getElementById("inCart").innerHTML  = products.map((element)=>{
      for (let index = 0; index < products.length+1; index++) {

        if(localStorage.getItem("id"+index)){
          let idLocal = JSON.parse(localStorage.getItem("id"+index)) ;
          
          if (element.id==idLocal.id) {
            noNum += 1;
            empty = false;
            return (
               `<tr>
               <th scope="list-inline ">${noNum}</th>
               <td><img src="${element.url}" style="width: 4rem;" alt=""></td>
               <td>${element.name}</td>
               <td class="row justify-content-start">
                 <h5 class="col-md-2 mr-2">
                 ${idLocal.count}
                 </h5>
                 
                 <a class="btn btn-outline-primary col-md-2 ml-1  btn-sm" onclick="addToCart1(${element.id})">+</a>
                 <a class="btn btn-outline-danger col-md-2  ml-1 btn-sm" onclick="removeToCart1(${element.id})">-</a>
               </td>
                
               <td>${element.price*idLocal.count} $</td>
             </tr>`
             
                   )} 
                   Totalprice();

        }
        

       } }).join("")
       if(empty){
        document.getElementById("inCart").innerHTML  = `<div>
              <h1 class="text-secondary">Cart is emty..</h1>
          </div>`
      }
}
      Cart ();  

      function Totalprice(){
        let formatNumber = new Intl.NumberFormat().format(totalprice);
        let sum = 0;

          for (let index = 0; index < products.length; index++) {
            if(localStorage.getItem('id'+(index+1))){
              let ide=(JSON.parse(localStorage.getItem('id'+(index+1))))
              sum += Number(ide.count)*Number(products[index].price)
            }
          }
        
        totalprice =sum;
       document.getElementById("totalPrice").innerHTML = "Total Price : " + formatNumber +" $";
       
      }

      function addToCart1(id){
        addToCart(id);
        Cart ();  
        CountCart()
        addCountCart() ;
      }

      function removeToCart1(id){
        removeToCart(id);
        Cart ();  
        CountCart()
        addCountCart() ;
      }
      function addCountCart() {
        document.getElementById("countCart").innerHTML =  totalInCart

      }

      addCountCart() ;
     


