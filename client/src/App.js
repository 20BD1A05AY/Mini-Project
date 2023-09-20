import logo from './assets/logo.svg';
import './App.css';
import CreatePost from './pages/CreatePost';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
// import Card from './components/Card';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>

      
      

      
      <header className="w-100 d-flex justify-content-between align-items-center bg-white px-4 py-4 border-bottom" style={{ borderBottomColor: "#e6ebf4" }}>
  <Link to="/">
    <img src={logo} alt="logo" className="w-50 object-fit-contain" />
  </Link>

  <Link to="/create" className="btn btn-primary">Create</Link>
</header>

<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreatePost/>}/>
        
      </Routes>

     

    </div>
  );
}

export default App;
