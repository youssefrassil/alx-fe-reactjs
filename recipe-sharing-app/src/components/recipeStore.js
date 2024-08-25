import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Compute filtered recipes based on the search term
  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== recipeId),
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes
      .map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
      .filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
  })),
}));

export default useRecipeStore;
