import React from 'react'

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
    </>
  );
}

export default orderSummary