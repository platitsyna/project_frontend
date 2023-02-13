import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AddRoutes from "./routes/AddRoutes";
import './styles/App.css'


function App() {
  return (
          <BrowserRouter>
              <Navbar/>
              <AddRoutes/>
          </BrowserRouter>
  );
}

export default App;
