import Footer from "./components/footer";
import IntroductionPage from "./pages/IntroPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";


function App() {
  return (

    
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<IntroductionPage/>} />
          <Route exact path='/Login' element={<IntroductionPage/>} />
          <Route exact path='/Signup' element={<CreateAccount/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
