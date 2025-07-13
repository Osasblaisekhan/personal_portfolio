import React, { useEffect, useState } from 'react'
import { cartActions } from './ContextProvider';

const Home = () => {
    const [data, setData] = useState([]);

    const {dispatch} = cartActions();

    data.map((da)=>{
        console.log(da.id)
    })
    console.log('yoo', data)
    const fetchData = async()=>{
        const response = await fetch('https://dummyjson.com/products',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const res = await response.json();
        setData(res.products);
    }

    const newData = data.map((newItem)=>({
        ...newItem, quantity:1
    }));


    useEffect(()=>{
        fetchData();
    })
  return (
    <div>
   

      <div className='md:grid md:grid-cols-4 md:gap-6 gap-6 grid  mt-5'>
        {
            newData.map((item)=>(
                <div key={item.id} className='h-[450px] p-5 bg-amber-400'>
                    <h3>{item.id}</h3>

                    <img src={item.images} alt={item.description} />

                    <h3>${item.price}</h3>

                    <h3>{item.quantity}</h3>

                    <button className='bg-blue-900 w-[100px] p-2 text-white font-bold rounded-[10px]' onClick={()=> dispatch({type:"Add", product: item})}>Add</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Home;
