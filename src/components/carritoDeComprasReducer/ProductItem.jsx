import React from 'react'

const ProductItem = ({data, addToCart}) => {
    const {id,name,price} = data;
  return (
    <div className='w-[200px] flex flex-col gap-3 items-center border border-[#0a0909] rounded-md p-4'>
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={()=> addToCart(id)}>Agregar</button>
    </div>
  )
}

export default ProductItem