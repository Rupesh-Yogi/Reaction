
import { useState } from "react";

function App(){
const[count, setCount]  = useState(0);

return (
  <>
  <p>{count}</p>


{/* <button onClick={()=> setCount(count + 1)}>Increase One</button>
<button onClick={()=> setCount(count + 3)}>Increase Three</button> */}

<button onClick={()=> setCount(prevCount => prevCount + 1)}>Increase One</button>
<button onClick={()=> setCount(prevCount => prevCount + 3)}>Increase Three</button>
  </>
);
}


export default App;