import React, { Component } from 'react';
import axios from 'axios';
class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        // this.setState({
        //     query: e.target.value
        // })
        axios.get(`api/v1/products?search=${e.target.value}`)
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
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                        ref={input => this.search = input} onChange={this.handleChange} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
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
            </div>  
        )
    }
}
export default Search;