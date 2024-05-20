import Footer from "./components/footer";
import IntroductionPage from "./pages/IntroPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import AccountDetails from "./pages/AccountInterface";
import AboutPage from "./pages/About";
import AdminPriv from "./pages/AdminLogin";



function App() {
  return (

    
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/Login' element={<IntroductionPage/>} />
          <Route exact path='/Signup' element={<CreateAccount/>} />
          <Route exact path='/Home' element={<HomePage/>} />
          <Route exact path='/contact' element={<HomePage/>} />
          <Route exact path='/docx' element={<AboutPage/>} />
          <Route exact path='/About' element={<AboutPage/>} />
          <Route exact path='/adminLogin' element={<AdminPriv/>} />


          <Route exact path='/accInt' element={<AccountDetails />} />
        </Routes>
    </Router>
    <div>
      
    </div>
    <br></br>
    <br></br>
    
    <Footer />
    </div>
    
    
  );
}

export default App;
