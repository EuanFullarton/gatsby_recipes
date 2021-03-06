import React, { Component } from 'react';
import "./recipe-list.css"

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            heading: "Latest"
        };
    }

    componentDidMount() {
        fetch(this.props.endpoint)
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(err => console.error('Error ', err.toString()));
    }

    listIngredients = (recipe) => {
        const   ingredientKeys = [];
        let     ingredients = [];

        Object.keys(recipe).forEach(function (key, index) {
            if (key.indexOf('strIngredient') !== -1) {
                ingredientKeys.push(key);
            }
        });

        for (let i = 0; i < ingredientKeys.length; i++) {
            if (recipe[ingredientKeys[i]] !== "") {
                ingredients.push(recipe[ingredientKeys[i]]);
            }
        }

        if (ingredients.length > 0) {
            ingredients = ingredients.join(', ');
            return ingredients;
        } else {
            return <a href={"https://www.themealdb.com/meal.php?c=" + recipe.idMeal}>View on MealDB</a>;
        }
    }

    render() {
        if (this.state.data.meals) {
            let recipes = this.state.data.meals.map((recipe) => {
                return (
                    <div className="col-xs-12 col-sm-6 col-lg-4 recipe" key={recipe.idMeal}>
                        <a href={recipe.strSource}>
                            <div className="img-container">
                                <img src={recipe.strMealThumb} />
                            </div>
                            <div className="ingredients">
                                <p>Ingredients:</p>
                                <p>{this.listIngredients(recipe)}</p>
                            </div>
                            <p>{recipe.strMeal}</p>
                        </a>
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