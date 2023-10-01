import {Children, React, useReducer } from 'react'
import { shoppingReducer, shoppingInitialState } from './shoppingReducer'
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { TYPES } from './shopingAction';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} =state;
   //console.log(products);

    const addToCart = (id) => {
        //console.log(id);
        dispatch({type:TYPES.ADD_TO_CART,payload:id})
    };

    const delFromCart = () => {

    }

    const clearCart = () => {
        console.log('eliminando');
    }

  return (
    <div>
        <h2> Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className='flex gap-5 flex-wrap p-6 m-4 shadow-inner'>
            {products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/> )}
        </article>
        <h3>Carrito</h3>
        <article className='p-6 m-4 shadow-inner'>
            <button onClick={clearCart}>Limpiar Carrito</button>
            {cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)}
        </article>
    </div>
  )
}

export default ShoppingCart