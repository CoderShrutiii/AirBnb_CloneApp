import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import hotelsData from './assests/hotelsdata';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className='product-cards'>
        {hotelsData.map((hotel) => (
          <ProductCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
