import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          {/* Use Link to navigate to the RecipeDetails page */}
          <h3>
            <Link to={`/recipe/${recipe.id}`}>
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
