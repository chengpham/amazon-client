import React, { Component } from 'react'
import {ProductDetails} from './ProductDetails';
import {ReviewList} from './ReviewList';
import productData from '../productData';

class ProductShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = productData
    this.deleteReview = this.deleteReview.bind(this)
  }
  deleteReview(id) {
    this.setState((state) => {
      return {
        reviews: state.reviews.filter(r => r.id !== id)
      }
    })
  }

  render() {
    
    return(
    <main>
      <ProductDetails
        title={this.state.title}
        description={this.state.description}
        price={this.state.price}
        seller={ this.state.seller } 
        created_at={this.state.created_at}
      />
      <ReviewList
        reviews={this.state.reviews}
        deleteReview={this.deleteReview}
      />
    </main>
    )
  }
}

export default ProductShowPage

