// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const {stack} = props
  // const {removeFromBurger} = props
    return (
    <ul>
  
  {stack.map((ingredient, index) => (
        
        <li key={index} >
          {ingredient.name}
        </li>
 ))}
    </ul>
    )
  }
  
  export default BurgerStack;
  