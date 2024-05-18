import Footer from "./components/footer";
import IntroductionPage from "./pages/IntroPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import AccountDetails from "./pages/AccountInterface";

function App() {
  return (

    
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/Login' element={<IntroductionPage/>} />
          <Route exact path='/Signup' element={<CreateAccount/>} />
          <Route exact path='/Home' element={<HomePage/>} />
          <Route exact path='/accInt' element={<AccountDetails />} />
        </Routes>
    </Router>
    <div>
      <Footer />
    </div>
    
    
    </div>
    
  );
}

export default App;
