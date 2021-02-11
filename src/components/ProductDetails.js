import React from 'react';

export function ProductDetails({title, description, seller, price, created_at}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>By {seller.full_name}</p>
      <p>Price: ${price}</p>
      <p><small>Created at: {created_at.toLocaleString()}</small></p>
    </div>
  )
}
