import React, { Component } from 'react';
import axios from 'axios';
class PromoCodeSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        axios.get(`api/v1/promocode?code=${e.target.value}`)
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
            <div>
                <form className="">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                        ref={input => this.search = input} onChange={this.handleChange} />
                </form>
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
            </div>  
        )
    }
}
export default PromoCodeSearch;