import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import ListsContainer from './components/ListsContainer';
import Navigation from './components/Navigation';
import Products from './components/products/Products';
import Departments from './components/departments/Departments';
import ShowDepartments from './components/departments/ShowDepartments';
import Search from './components/Search';

class App extends React.Component {
  render() {return (
    <div>
      <Router>

        <Navigation />
          <div className="container">
                <Route exect path='/products' component= {Products}/>
                <Route exect path='/lists' component= {ListsContainer}/>
                <Route exect path='/departments' component= {Departments}/>
                <Route  path='/departments/:id' component= {ShowDepartments}/>
                <Route  path='/search' component= {Search}/>
          </div>
      </Router>

    </div>
  );
}
}
export default App;
