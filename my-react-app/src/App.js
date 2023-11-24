import logo from './logo.svg';
import './App.css';
import ProductsListing from './Components/products-listing-page/ProductsListing';
import { Header } from './Components/Header/Header';
import { AppRoutes } from './routes/AppRoutes';
import ProductsListening1 from './Components/products-listing-page/ProductsListening1';
import { Header1 } from './Components/Header/Header1';
import { AppRoutes1 } from './routes/AppRoutes1';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <AppRoutes /> 
      <ProductsListing /> */}
      <Header1 />
      <AppRoutes1 />
      <ProductsListening1 />
    </div>
  );
}

export default App;
