
let products = [
   
    {
        id: 1,
        name: "Parlor Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/88453933.jpg",
        price: 30,
        discount: 0,
        best: false,
        productnew: true
    },
    {
        id: 2,
        name: "Dragonmaid Hospitality",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/78231355.jpg",
        price: 50,
        discount: 0,
        best: false,
        productnew: true
    },
    {
        id: 3,
        name: "Dragonmaid Downtime",
        des: "Type: Trap Card",
        url: "https://images.ygoprodeck.com/images/cards/77515704.jpg",
        price: 70,
        discount: 0,
        best: false,
        productnew: false
    },
    {
        id: 4,
        name: "Dragonmaid Ernus",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/76782778.jpg",
        price: 100,
        discount: 0,
        best: false,
        productnew: true
    },
    {
        id: 5,
        name: "Dragonmaid Tidying",
        des: "Type: Trap Card",
        url: "https://images.ygoprodeck.com/images/cards/57416183.jpg",
        price: 70,
        discount: 0,
        best: false,
        productnew: true
    },
    {
        id: 6,
        name: "Chamber Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/32600024.jpg",
        price: 30,
        discount: 0,
        best: true,
        productnew: false
    },
    {
        id: 7,
        name: "Dragonmaid Nudyarl",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/49575521.jpg",
        price: 100,
        discount: 30,
        best: false,
        productnew: true
    },
    {
        id: 8,
        name: "Dragonmaid Tinkhec",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/42055234.jpg",
        price: 100,
        discount: 20,
        best: false,
        productnew: true
    },
    {
        id: 9,
        name: "House Dragonmaid",
        des: "Type: Fusion Monster",
        url: "https://images.ygoprodeck.com/images/cards/41232647.jpg",
        price: 500,
        discount: 0,
        best: true,
        productnew: false
    },
    {
        id: 10,
        name: "Nurse Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/40398073.jpg",
        price: 30,
        discount: 0,
        best: false,
        productnew: true
    },
    {
        id: 11,
        name: "Dragonmaid Change",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/40110009.jpg",
        price: 100,
        discount: 0,
        best: true,
        productnew: false
    },
    {
        id: 12,
        name: "Dragonmaid Sheou",
        des: "Type: Fusion Monster",
        url: "https://images.ygoprodeck.com/images/cards/24799107.jpg",
        price: 700,
        discount: 0,
        best: true,
        productnew: false
    },
    {
        id: 13,
        name: "Kitchen Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/16960120.jpg",
        price: 30,
        discount: 0,
        best: true,
        productnew: false
    },
    {
        id: 14,
        name: "Dragonmaid Lorpar",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/15848542.jpg",
        price: 100,
        discount: 30,
        best: false,
        productnew: false
    },
    {
        id: 15,
        name: "Dragonmaid Send-Off",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/15754711.jpg",
        price: 100,
        discount: 0,
        best: false,
        productnew: true
    },
    {
        id: 16,
        name: "Dragonmaid Welcome",
        des: "Type: Spell Card",
        url: "https://images.ygoprodeck.com/images/cards/14625090.jpg",
        price: 50,
        discount: 80,
        best: false,
        productnew: false
    },
    {
        id: 17,
        name: "Laundry Dragonmaid",
        des: "Type: Effect Monster",
        url: "https://images.ygoprodeck.com/images/cards/13171876.jpg",
        price: 50,
        discount: 30,
        best: false,
        productnew: false
    }
    
];


let totalprice=0;
let totalInCart=0;
let productInlocal = [];






function addToCart(e){
    let inlocal = [];
    let id = 'id'+e;
    let counter;

    //Display Product in Cart
    if(localStorage.getItem(id)){
         inlocal = JSON.parse(localStorage.getItem(id))
         counter = Number(inlocal.count)

        inlocal=({
          id : e,
          count:counter+1
          })
    }else{
          inlocal=({
            id : e,
            count:1
            })
         }
     

    localStorage.setItem(id,JSON.stringify(inlocal));

    return totalInCart ;
   
  }

  function removeToCart(e){
    let inlocal = [];
    let id = 'id'+e;
    let counter;
    if(localStorage.getItem(id)){
        inlocal = JSON.parse(localStorage.getItem(id))
        counter = Number(inlocal.count)
 
        // console.log(totalprice);
        inlocal=({
          id : e,
          count:counter-1
          })
          
         }else{
          inlocal=({
            id : e,
            count:1
            })
         }

         if (counter==1) {
            localStorage.removeItem(id)

        }else{
             localStorage.setItem(id,JSON.stringify(inlocal));

        }   


    
    
  }

  function clearLocal(){
    totalprice=0;
    localStorage.clear();
    Cart ();  
    Totalprice();
    setTimeout(returnToIndex, 2000);
    
   }

  
   function CountCart(){
    totalInCart=0;
      for (let index = 0; index < products.length; index++) {
        if(localStorage.getItem('id'+(index+1))){
            totalInCart +=1;
        }
      }
      
  }
  CountCart();

const ButtonCart = totalInCart;
   


const returnToIndex  = () => {
    window.location.href = '/checkout.html'
}
