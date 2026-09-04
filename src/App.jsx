// function MyButton({onClick}) {

//   return <button onClick = {onClick}>Click here</button>
// }

// function App() {

//     function showMessage(){
//       console.log("Button Clicked!");
//     }

//     return <MyButton onClick = {showMessage}/>
// }

// export default App;



function MyButton({clccl}){

  return <button onClick = {clccl}> Click Me</button>
}

function App(){

  function showMessage(){
    console.log("Something done with button.")
  }

  return (
    <MyButton  clccl = {showMessage} />
  )
}

export default App;