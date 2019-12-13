import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

class Departments extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        axios.get('api/v1/departments')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (
                        <div className="single-list" key={list.id}>
                            <h4>{list.name}</h4>
                            <p>{list.price}</p>
                            <NavLink className='' to={`/departments/${list.id}`} >Link</NavLink>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Departments;