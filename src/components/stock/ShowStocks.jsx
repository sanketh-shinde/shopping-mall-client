import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ShowStocks = () => {
  const stocks =[
    {id :1,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},

    {id :2,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},

    {id :3,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},

    {id :4,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},
    {id :4,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},
    {id :4,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},
    {id :4,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},
    {id :4,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},
    {id :4,category:'Electronics'
      ,name :'Mobile',
    price:5000 , quantity:50},
  ]
const [stock , setStock]=useState(stocks)
  const handleUpdate =() =>{
    console.log(`Updating product with ID: $`);
  }
  const handleDelete =()=>{
    // setStock(stocks.filter(product => product.productId !== stocks.id));
    // console.log(`Deleted product with ID: `);
        }
  
  return (

    <>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {
      stocks.map(stock => {
        return <ProductCard
        key={stock.id}
        productName={stock.name}
        category={stock.category}
        price={stock.price}
        onUpdate={handleUpdate()} 
        onDelete={handleDelete()} 

        />
      })
    }
    </div>
    </>
  )
}

export default ShowStocks