import React from "react"
import Categories from "../components/categories"
import RecipeList from "../components/recipe-list"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';

let category = 'latest.php'; 

if (window.location.search !== '') {
  category = 'filter.php' + window.location.search;
}

const Recipes = () => (
  <Layout>
    <div className="container">
      <div className="row py-3">
        <div className="col">
          <h6>Categories: </h6>
          <ul className="p-0">
            <li id="show-all" className="active">
              <a href="/">All</a>
            </li>
            <Categories endpoint="https://www.themealdb.com/api/json/v1/1/categories.php" />
          </ul>
        </div>
      </div>
      <div className="row">
        <RecipeList
          endpoint={"https://www.themealdb.com/api/json/v1/1/" + category}
        />
      </div>
    </div>
  </Layout>
)

export default Recipes;
