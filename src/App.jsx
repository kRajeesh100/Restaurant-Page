import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurantlist from './components/Restaurantlist';
import Viewrest from'./components/Viewrest';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



function App() {
  return (
   <div className='App'>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Restaurantlist></Restaurantlist>}> </Route>
    <Route path='/viewrest/:id' element={<Viewrest/>}></Route> 
    <Route path='/home/' element={<Restaurantlist></Restaurantlist>}/>
  </Routes>
  
  <Footer></Footer>
    
   </div>
  );
}

export default App;
