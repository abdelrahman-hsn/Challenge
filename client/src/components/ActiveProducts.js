
import React, { Component } from 'react';
import axios from 'axios';
class ActiveProducts extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        axios.get('api/v1/active')
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
                {this.state.lists.map( product => {
                    return (
                    <div className="col-sm-6 card-products">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Price : {product.price}</p>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default ActiveProducts;