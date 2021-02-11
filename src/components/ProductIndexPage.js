import React, { Component } from 'react';
import productIndexData from '../productsIndexData';
import NewProductForm from './NewProductForm';

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: productIndexData }
    }
    createProduct(params) {
        this.setState({
            products: [{id: (Math.max(...this.state.products.map(p => p.id)) + 1), ...params},...this.state.products]
        })
    }
    deleteProduct(id) { this.setState({ products: this.state.products.filter(p => p.id !== id) }) }
    render() {
        return(
            <main>
            <NewProductForm createProduct={this.createProduct.bind(this)}/>
            {this.state.products.map(p => {
                return(
                <div key={p.id}>
                    <h1>{p.id} - {p.title}</h1>
                    <button onClick={() => this.deleteProduct(p.id)}>Delete</button>
                </div>
                )
            })}
            </main>
        )
    }
}

export default ProductIndexPage