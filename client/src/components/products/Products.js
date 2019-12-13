import React, { Component } from 'react';
import './Products.css';
import axios from 'axios';
class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('api/v1/products.json')
        .then(response => {
            console.log(response)
            this.setState({
                products: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="row">
                {this.state.products.map( product => {
                    return (
                    <div className="col-sm-6 card-products">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Price : {product.price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default Products;