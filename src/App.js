import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Products from './pages/Products';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Personal from './pages/Personal';
import ProductDetail from './pages/ProductDetail';
import BlogDetail from './pages/BlogDetail';
import AuthMain from './component/auth/AuthMain';

import $ from 'jquery';
  
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Products}/>
        <Route path="/testimonial" exact component={Testimonial}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/personal" exact component={Personal}/>
        <Route path="/product-detail" exact component={ProductDetail}/>
        <Route path="/blog-detail" exact component={BlogDetail}/>
        <Route path="/authentication" exact component={AuthMain}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
