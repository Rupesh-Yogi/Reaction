// function App() {
//   const isLoggedIn = true;

//   return (
//     <div>
//       <h1>My Website</h1>

//       {isLoggedIn && <p>Welcome back!</p>}
//     </div>
//   );
// }

// export default App;




function App() {
  const isLoggedIn = false;

  return (
    <div>

    <h1>My first React Website</h1>
    {/* {isLoggedIn && <p>Welcome!</p>} */}
    {isLoggedIn ? <p>Welcome!</p> : <p>Please Log in first.</p>}
    </div>
  )
}

export default App;