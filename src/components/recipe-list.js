import React, { Component } from 'react';
import "./recipe-list.css"

class RecipeList extends Component {
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

    render() {
        if (this.state.data.meals) {
            let recipes = this.state.data.meals.map((recipe) => {
                return (
                    <div class="col-xs-12 col-sm-6 col-lg-4 recipe" key={recipe.idMeal}>
                        <a href={recipe.strSource}>
                            <img src={recipe.strMealThumb} />
                        </a>
                        <div class="ingredients">
                            <p>Ingredients:</p>
                            <p>
                                {recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}, {recipe.strIngredient4}
                            </p>
                        </div>
                        <p>{recipe.strMeal}</p>
                    </div>
                )
            });
            return recipes;
        } else {
            return <h3>Loading recipes...</h3>
        }
    }
}

export default RecipeList;