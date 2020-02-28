import React, { Component } from 'react'
import Items from './Items';

class Dashboard extends Component {
    state = {
        items: []
    };



    componentDidMount() {
        fetch("https://www.aimeleondore.com/products.json")
        .then(res => res.json())
        .then((data) => {
            console.log(data.products);
            this.setState({ items: data.products});
            console.log(this.state)
        })
        .catch((err) => {
            console.log(err);
        });
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