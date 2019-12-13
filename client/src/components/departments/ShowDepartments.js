import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    withRouter
  } from "react-router-dom";

class ShowDepartments extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        const  id  = this.props.match.params.id ;
        axios.get(`/api/v1/departments/${id}`)
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
                        <div className="card-body">
                            <h5 className="card-title">{list.name}</h5>
                            <p className="card-text">Price : {list.price}</p>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default withRouter(ShowDepartments);