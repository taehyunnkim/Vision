import React, { Component } from 'react'
import Items from './Items';

class Dashboard extends Component {
    state = {
        items: [
            {id: 1, image: 'https://cdn.shopify.com/s/files/1/0302/7829/products/intarsia-navy_800x.jpg?v=1571847068', name: 'ALD Hudson Bay Sweater', price: '$310.00', link: 'https://www.aimeleondore.com/collections/tops/products/hudson-bay-sweater-navy?variant=30937490554977'},
            {id: 2, image: 'https://cdn.shopify.com/s/files/1/0302/7829/products/striped-wool-orange_800x.jpg?v=1569342426', name: 'ALD Monogram Knit Sweater', price: '$325.00', link: 'https://www.aimeleondore.com/collections/tops/products/monogram-knit-sweater?variant=30108343500897'},
            {id: 3, image: 'https://cdn.shopify.com/s/files/1/0302/7829/products/Aime_FW19_D1_Product_087_800x.jpg?v=1566836437', name: 'ALD A-Wing Oxford', price: '$225.00', link: 'https://www.aimeleondore.com/collections/tops/products/a-wing-oxford-pink?variant=29172206469217'},
            {id: 4, image: 'https://cdn.shopify.com/s/files/1/0302/7829/products/waffle-resize-1_800x.jpg?v=1568651941', name: 'ALD Distressed Waffle Thermal', price: '$120.00', link: 'https://www.aimeleondore.com/collections/tops/products/distressed-waffle-thermal?variant=29172192510049'},
            {id: 5, image: 'https://cdn.shopify.com/s/files/1/0302/7829/products/pullover_red_800x.jpg?v=1569861634', name: 'ALD French Terry Pullover', price: '$230.00', link: 'https://www.aimeleondore.com/collections/tops/products/french-terry-pull-over-2?variant=30108371517537'},
            {id: 6, image: 'https://cdn.shopify.com/s/files/1/0302/7829/products/cross-stitch-green_b07095db-a20a-4627-b83b-562dd32b63bd_800x.jpg?v=1569861615', name: 'ALD Cross Stitch Crewneck', price: '$210.00', link: 'https://www.aimeleondore.com/collections/tops/products/cross-stitch-crewneck?variant=30108295102561'}
        ]
    }

    render() {
        return (
            <div className = "">
                <Items items = {this.state.items}/>
            </div>
        )
    }
}

export default Dashboard;