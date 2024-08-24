import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Add the deleteRecipe action
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
  })),
  
  // Add the updateRecipe action
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
