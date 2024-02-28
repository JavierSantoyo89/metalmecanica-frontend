
import {useCounter} from "../../state/counter";
export default function Settings() {
  const count = useCounter((state) =>  state.count)
 const increment = useCounter((state) =>  state.increment)
 const decrement = useCounter((state) =>  state.decrement)
 const reset = useCounter((state) =>  state.reset)
  return (
    <div>Settings
      <div>
        <span>Contador: {count}</span>
         <button onClick={increment}>Incrementar</button>
 <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Reset</button>  
      </div>
    </div>
  )
}
