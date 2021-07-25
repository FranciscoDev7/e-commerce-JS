const products = [
    {id:5165,
     name:"tenis",
     price:550.50
    },
     {id:651,
     name:"camiseta",
     price:120.60
    },
     {id:6545,
     name:"calça",
     price:180.99
    },
     {id:165,
     name:"perfume",
     price:430.50
    },
     {id:786,
     name:"relogio",
     price:735.90
    }
]

let cart= []
let unitsArray = []
let ShopPrice = 0

const addProduct = (id) =>{
    //cria validacao para nao repetir item no cart
    const IDValidation = cart.filter(item=>item.id===id)[0]  
    if (IDValidation==null){
    // uma vez validado, adiciona item no cart
    let cartItem = products.filter(item => item.id === id )[0]
    cart.push(cartItem)
    //coloca quantidade do item
     let unitObject = {id:id, units:1, price:cartItem.price}
     unitsArray.push(unitObject)
     
    }
    totalPrice()
}

const addUnits= (id) =>{
    //cria validacao para nao teantar add unidades que nao add no cart
    const IDValidation = cart.filter(item=>item.id===id)[0]  
    if (IDValidation!=null){
    // Encontrar no unitsArray, destacar o item e add uma unidade
    const unitToAdd = unitsArray.filter(item=>item.id===id)[0]
    let {units} = unitToAdd
    units +=1
    // Cria um objecto com a unidade a mais
    const unitAddedObject = {id:id, units:units, price:unitToAdd.price}
    // Encontra o indice no units Array para substituir o novo objecto contendo units +1
    const unitArrayIndex = unitsArray.map(item=>item.id)
    .indexOf(id,0)
    
    //Addicionar o objecto no unitsArray
    unitsArray.splice(unitArrayIndex,1,unitAddedObject)
 
    }
    totalPrice()
}

const removeUnits =(id) =>{
    
    //cria validacao para nao teantar add unidades que nao add no cart
    const IDValidation = unitsArray.filter(item=>item.id===id)[0]  
    if (IDValidation!=null && IDValidation.units>1){
    // Encontrar no unitsArray, destacar o item e add uma unidade
    const unitToAdd = unitsArray.filter(item=>item.id===id)[0]
    let {units} = unitToAdd
    units -=1
    // Cria um objecto com a unidade a mais
    const unitAddedObject = {id:id, units:units, price:unitToAdd.price}
    // Encontra o indice no units Array para substituir o novo objecto contendo units +1
    const unitArrayIndex = unitsArray.map(item=>item.id)
    .indexOf(id,0)
    //Addicionar o objecto no unitsArray
    unitsArray.splice(unitArrayIndex,1,unitAddedObject)

          
    }
    totalPrice()
}

const removeProduct =(id) =>{
    //cria validacao para nao teantar add unidades que nao add no cart
    const IDValidation = cart.filter(item=>item.id===id)[0]  
    if (IDValidation!=null){
    //removendo items
    index = cart.map(item=>item.id).indexOf(id,0)
    unitsArray.splice(index,1)
    cart.splice(index,1)
       }
    totalPrice()
}

const totalPrice = () =>{
    //Zerando o preco
    ShopPrice = 0
    //Somando o preco total
    unitsArray.forEach(item=>{
       ({units,price} = item)
       const itemTotalPrice = units*price
       ShopPrice += itemTotalPrice 
    })

1}

