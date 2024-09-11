function CartCheckOut(){
let noNum = 0;
document.getElementById('cartCheckOut').innerHTML = products.map((element)=>{
    for (let index = 0; index < products.length; index++) {

      if(localStorage.getItem("id"+index)){
        let idLocal = JSON.parse(localStorage.getItem("id"+index)) ;
        
        if (element.id==idLocal.id) {
          totalprice +=element.price*idLocal.count;
          noNum +=1;
          return (
             `<tr >
             <th scope="list-inline ">${noNum}</th>
             <td><img src="${element.url}" style="width: 4rem;" alt=""></td>
             <td>${element.name}</td>
             <td >
               <h5 class="col-sm-2 ">${idLocal.count}</h5>
             </td>
             <td>${element.price*idLocal.count}  $</td>
           </tr>`
                 )} 
                 

      }

     } }).join("")


}

function confirmOrder() {
  
  clearLocal();
  return (window.location.href = '/index.html')
}

function Total (){
  document.getElementById('total').innerHTML = `Tatal Price: ${totalprice} $`
}

function addCountCart() {
  document.getElementById("countCart").innerHTML =  totalInCart

}

addCountCart() ;


CartCheckOut()
Total ()
