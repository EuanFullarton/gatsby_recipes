import React, { Component } from 'react';
import "./categories.css"

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetch(this.props.endpoint)
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(err => console.error('Error ', err.toString()));
    }

    listCategories = (category) => {
        const categories = [];

        Object.keys(category).forEach(function (key, index) {
            categories.push(key);
        });

        return categories;
    }

    updateTitle(category) {
        console.log('hit', category);
    }

    render() {
        if (this.state.data.categories) {
            let categories = this.state.data.categories.map((category) => {
                return (
                    <li key={category.idCategory}>
                        <a href={"/?c=" + category.strCategory} onClick={() => {this.updateTitle(category.strCategory)}}>
                            {category.strCategory}
                        </a>
                    </li>
                )
            });
            return categories;
        } else {
            return null;
        }
    }
}

export default Categories;