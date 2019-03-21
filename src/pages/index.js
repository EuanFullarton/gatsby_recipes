import React from "react"
import RecipeList from "../components/recipe-list"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';

const Recipes = () => (
  <Layout>
    <div class="container">
      <div class="row">
        <h1 class="p-3">Latest recipes</h1>
      </div>
      <div class="row">
        <ul>
          <li>Categories</li>
          <li>to go</li>
          <li>here</li>
        </ul>
      </div>
      <div class="row">
        <RecipeList endpoint="https://www.themealdb.com/api/json/v1/1/latest.php" />
      </div>
    </div>
  </Layout>
)

export default Recipes;
