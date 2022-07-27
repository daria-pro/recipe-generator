import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./pages/RecipePage/RecipePage";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
