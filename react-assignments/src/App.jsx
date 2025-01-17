import "./App.css";
import DisplayComponent from "./DisplayComponent";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };
  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      <DisplayComponent person={person}/>
    </div>
  );
}

export default App;
