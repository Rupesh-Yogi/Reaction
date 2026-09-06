  import { useState } from "react";


  function App() {
    const[name, setName] = useState("Rupesh");
    return (
  <>
      <p>Name: {name}</p>
      <button onClick={() => setName("Alex")}>Change Name</button>
  </>
    );
  }

  export default App;