// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const {stack} = props
  const {removeFromBurger} = props
    return (
    <ul>
  
  {stack.map((ingredient, index) => (
        
        <li key={index} 
        style={{backgroundColor:ingredient.color}} >
          {ingredient.name}
          <button onClick={() => removeFromBurger(index)}>-</button>
        </li>
 ))}
    </ul>
    )
  }
  
  export default BurgerStack;
  