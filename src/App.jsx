function App() {
  const fruits = ["banana", "apple", "Mango", "Orange"];

  return (
    <div>
      {fruits.map((fruit) => {
        return <li key={fruit}>{fruit}</li>;
      })}
    </div>
  );
}

export default App;
