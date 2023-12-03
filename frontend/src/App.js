import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.js'
import Home from './components/Home/Home.js';





function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
        
        <Routes>
          <Route path='/' element={<Home />} />
        

        </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
