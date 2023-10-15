import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold underline text-red-50">
              Let's go Alex
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
