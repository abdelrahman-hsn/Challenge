import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import ActiveProducts from './components/ActiveProducts';
import Navigation from './components/Navigation';
import Products from './components/products/Products';
import Departments from './components/departments/Departments';
import ShowDepartments from './components/departments/ShowDepartments';
import Search from './components/Search';
import PromoCodeSearch from './components/PromoCodeSearch';

class App extends React.Component {
  render() {return (
    <div>
      <Router>

        <Navigation />
          <div className="container">
                <Route exect path='/products' component= {Products}/>
                <Route exect path='/active' component= {ActiveProducts}/>
                <Route exect path='/departments' component= {Departments}/>
                <Route exect path='/departments/:id' component= {ShowDepartments}/>
                <Route exect path='/search' component= {Search}/>
                <Route exect path='/promocode' component= {PromoCodeSearch}/>
          </div>
      </Router>

    </div>
  );
}
}
export default App;
