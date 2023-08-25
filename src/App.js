import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { InputRoutes } from "./routes/PagesRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <InputRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
