import React from 'react'

const CartItem = ({data,delFromCart}) => {
    const {id,name,price, quantity} = data;
  return (
    <div>
        <h4>{name}</h4>
        <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
        <button onClick ={()=>delFromCart(id)}>Eliminar Uno</button>
        <button onClick={()=>delFromCart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem