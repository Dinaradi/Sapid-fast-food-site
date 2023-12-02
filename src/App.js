import Navbar from "./layouts/navbar/navbar";
import Header from "./pages/header/header";
import Main from "./pages/main/main";
import Delivery from "./pages/delivery/delivery";
import Footer from "./layouts/footer/footer";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Main/>
    <Delivery/>
    <Footer/>
    </div>
  );
}

export default App;
