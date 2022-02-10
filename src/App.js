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

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<SingleService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
