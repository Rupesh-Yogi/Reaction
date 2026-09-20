import { useState } from "react";

function Student() {
  console.log("Student rendered.");

  return <p>I am a student.</p>;
}

function App() {
  console.log("App rendered");

  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <Student />
    </>
  );
}

export default App;
