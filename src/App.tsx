import './css/App.css';
import NavbarComponent from "./Navigation/NavbarComponent";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
      <div>
        <header>
          <NavbarComponent />
        </header>
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;
