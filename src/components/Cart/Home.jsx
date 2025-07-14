import React, { useEffect, useState } from 'react'
import { cartActions } from './ContextProvider';


const Home = () => {
    const [data, setData] = useState([]);

    const [isData, setIsData] = useState([])

    console.log(isData);


    const {dispatch} = cartActions();

    const fetchData = async()=>{
        try{
               const response = await fetch('https://dummyjson.com/products',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const res = await response.json();
        setData(res.products);
        }catch(error){
            console.log(error)
        }
    }

   useEffect(()=>{
     const newData = data.map((newItem)=>({
        ...newItem, quantity: 1, cart: false
    }));

    setIsData(newData);
   }, [data])

    const handleAddToCart = (item) =>{
        dispatch({type:"Add", product: item})
        setIsData((prevData)=>
            prevData.map((data)=>
            data.id === item.id ? ({...data, cart:true}) : data)
        )
    }



    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
   

      <div className='md:grid md:grid-cols-4 md:gap-6 gap-6 grid  mt-5'>
        {
            isData.map((item)=>(
                <div key={item.id} className='h-[450px] p-5 bg-amber-400' >
                    <h3>{item.id}</h3>

                    <img src={item.thumbnail} alt={item.description} />

                    <h3>${item.price}</h3>

                    <h3>{item.quantity}</h3>

                    <button className='bg-blue-900 w-[100px] p-2 text-white font-bold rounded-[10px]' onClick={()=> handleAddToCart(item, item.id)}
                        disabled={item.cart ? true : false}>Add</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Home;
