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

            <div className="row">
                {this.state.lists.map( list => {
                    return (
                    <div className="col-sm-6 card-products">
                        <div className="card">
                            <NavLink className='btn' to={`/departments/${list.id}`} >
                                <div className="card-body">
                                    <h5 className="card-title">{list.name}</h5>
                                </div>
                            </NavLink>
                        </div>
                        
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default Departments;