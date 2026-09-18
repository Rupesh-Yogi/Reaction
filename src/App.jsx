import { useState } from "react";

function App(){

  const[student1, setStudent1] = useState({
    name: "Rupesh",
    age: 22,
    course: "computer"
  });

  const[student2, setStudent2] = useState(["Alex", 25, "Mathematics"]);


  function changeStudent1Age(){
    setStudent1((prevStudent1) => ({...prevStudent1, age : 99}));
  }


function changeStudent2Course(){
  setStudent2(student2.map((data) => data == "Mathematics" ? "Economics" : data))
}

  return(
    <>

    <p>{student1.age}</p>
    <p>{student2}</p>

    <button onClick={changeStudent1Age}>Change Age</button>
    <button onClick={changeStudent2Course}>Change Course</button>
    </>
  )
}

export default App;