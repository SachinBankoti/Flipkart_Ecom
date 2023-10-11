import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
   const {cartItems} = useSelector(state => state.cart);
  return (    
   <>
    {
        cartItems ?
        <Grid container>
            <Grid item></Grid>
            <Grid
        </Grid>
        : <div>Empty</div>
    }
   </>
  )    
}

export default Cart    