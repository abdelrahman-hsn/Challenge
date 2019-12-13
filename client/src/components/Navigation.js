import React from 'react';
import { NavLink } from "react-router-dom";



const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
        <NavLink exect className={aClassName} to={props.path}>{props.name}</NavLink>
    </li>
  );
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <NavItem path='/products' name="Products" />
            <NavItem path="/departments" name="Departments" />
            <NavItem path="/active" name="Active Products" />
            <NavItem path="/search" name="Search" />
            <NavItem path="/promocode" name="Promo Code Search" />

          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                   ref={input => this.search = input} onChange={this.handleChange} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    )
  }
}

export default Navigation;