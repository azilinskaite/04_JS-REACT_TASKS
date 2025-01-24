import "./App.css";
import DisplayComponent from "./Components/DisplayComponent.jsx";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent.jsx";
import EffectsComponent from "./Components/Effect/EffectsComponent.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// WHAT'S THE DIFFERENCE BETWEEEN REACT-ROUTER AND REACT-ROUTER-DOM?

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
  // IS IT OK TO HAVE OBJECT LIKE THIS INSIDE THE MAIN APP FUNCTION IN GENERAL?

  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="state-component"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              State Component
            </NavLink>
            <NavLink
              to="effects-component"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Effects Component
            </NavLink>
          </nav>
          <h1>MYSTERY NEWSLETTER</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DisplayComponent person={person} />} />
            <Route path="state-component" element={<MyStateComponent />} />
            <Route path="effects-component" element={<EffectsComponent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
