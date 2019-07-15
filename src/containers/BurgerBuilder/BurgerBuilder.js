import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchaseable: false
  }

  addIngredientHandler = (type) => {
    this.setState((prevState, props) =>  {
      const updatedIngredients = {
        ...prevState.ingredients
      }
      updatedIngredients[type] =  prevState.ingredients[type] + 1
      const newPrice = prevState.totalPrice + INGREDIENT_PRICES[type];
      return {
        ingredients: updatedIngredients,
        totalPrice: newPrice
      }
    })
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = this.state.ingredients[type] + 1
    this.updatePurchaseState(updatedIngredients)
  }
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      },0)
      this.setState({purchaseable: sum > 0})
  }
  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] <= 0) {
      return;
    }
    this.setState((prevState, props) =>  {
      const updatedIngredients = {
        ...prevState.ingredients
      }
      updatedIngredients[type] =  prevState.ingredients[type] - 1
      const newPrice = prevState.totalPrice - INGREDIENT_PRICES[type];
      return {
        ingredients: updatedIngredients,
        totalPrice: newPrice
      }
    })
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = this.state.ingredients[type] - 1
    this.updatePurchaseState(updatedIngredients)
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          purchaseable={this.state.purchaseable}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;