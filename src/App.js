import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
      //BrowserRouter diger componentleri sarmalamasi lazim
      // MyNav her sayfada gorunecek
      <BrowserRouter>
      <MyNav />
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}
export default App;
