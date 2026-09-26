


import { useEffect, useState } from "react";

function App(){

const[count, setCount] = useState(0);

useEffect( () =>  {
  document.title = `Count: ${count}`;
}, [count])

return(
  <>
  <p>{count}</p>
  <button onClick={()=> setCount((prevCount) => prevCount + 1)}>Increase</button>
  </>
)

}

export default App;