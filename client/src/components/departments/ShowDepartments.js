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
            
            

            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (
                        <div className="single-list" key={list.id}>
                            <h4>{list.name}</h4>
                            <p>{list.price}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default withRouter(ShowDepartments);