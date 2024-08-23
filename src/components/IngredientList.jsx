// src/components/IngredientList.jsx




const IngredientList = (props) => {
  const {availableIngredients} = props
  const {addToBurger} = props
    return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        
        <li key={index} style={{backgroundColor:ingredient.color}}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
        
      ))}
    </ul>
    )
  };
  
  export default IngredientList;
  