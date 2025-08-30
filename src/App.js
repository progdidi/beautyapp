import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <main className="main">
          <MainPage/>
        </main>

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
