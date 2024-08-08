import { useState } from "react";
import Child from "../child/child";

export default function Parent()
{

    // const[age,setage]=useState(5)
    // return(

    //     <div>
    //         <h1>parent comp</h1>
    //         <Child hamada={age}/>
    //     </div>
    // )



    const[product,setproduct]=useState([
       {
        id : 1 ,
        name: "samsung",
        category: "mobile",
        price: "5000",
        onsale : true,
      
       },
       {
        id : 2 ,
        name: "iphone",
        category: "mobile",
        price: "9000",
        onsale : true,
       },
       {
        id : 3 ,
        name: "xaomi",
        category: "mobile",
        price: "6000",
        onsale : true,
       }


    ]);

    function deleteproduct(id)
    {
        let newcopy = structuredClone(product)
        let x = newcopy.filter(function(item) {return item.id != id})
        setproduct(x)
    }

       
 
    
    return(

        <div className="w-[80%] mx-auto flex flex-wrap">
            {/* <h1>parent comp</h1> */}
            {/* <Child hamada={age}/> */}
           
            {product.map(function(item) {return <Child pro={item} del={deleteproduct}/> })}
            
            
        </div>
    )
}