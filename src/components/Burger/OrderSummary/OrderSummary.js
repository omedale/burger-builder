import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
          return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                      {igKey}
                    </span>: 
                    {props.ingredients[igKey]}
                </li>
        })

  return (
    <>
      <h1> Your Order</h1>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout ?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
      <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
    </>
  );
}

export default orderSummary