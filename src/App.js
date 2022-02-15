import "./App.css";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import SingleService from "./pages/SingleService";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchService from "./pages/SearchService";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<SingleService />} />
        <Route path="/search" element={<SearchService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
