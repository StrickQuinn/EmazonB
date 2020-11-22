import React, { Component } from 'react'
import ProductBox from "./Product.js"
export default class Inventory extends Component {
    render() {
        return (
            <div className="productBox">
                <h1>Inventory Component</h1>
                {this.props.products.map((product, _id) => {
                    return (
                        <div >
                            <ProductBox product={ product } key={ _id } deleteProduct={ this.props.deleteProduct } />
                            
                        </div>
                    );
                })}
            </div>
        )
    }
}
