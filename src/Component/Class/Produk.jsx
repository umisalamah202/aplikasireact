import React, {Component } from 'react'

import './CSS/Produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {
        return (
            <div className="box-stock">
                <h2>Nama Produk</h2>
                <img src="https://icdn3.digitaltrends.com/image/digitaltrends/apple-macbook-pro-16-feature-500x500.jpg" alt=""/>
                <p>Harga</p>
                <p>stock</p>
                <button className="btn-click">Beli</button>
                <p>Status</p>

            </div>
        )

    }
   
}
export default Produk