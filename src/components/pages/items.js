import React, { Component } from 'react';

export default class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://backend-demo-ar.herokuapp.com/item/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
                loading: false
            });
        })
        .catch(error => {
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderItems() {
        const itemsHTML = this.state.items.map(items => {
            return (
            <div className='item-wrapper'>
                <h3 className="title">{items.name}</h3>
                <p className="description">${items.price.toFixed(2)}</p>
            </div>)
        })

        return itemsHTML;
    }

    render() {
        console.log(this.state.items)
        return (
            <div>{this.renderItems()}</div>
        )
    }
}