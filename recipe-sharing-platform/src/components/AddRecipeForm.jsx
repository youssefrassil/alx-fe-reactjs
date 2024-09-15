import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Form submission logic
    console.log({
      title,
      ingredients: ingredients.split('\n'), // Split ingredients by newline
      steps: steps.split('\n'),             // Split steps by newline
    });

    // Reset the form after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 ${errors.title ? 'border-red-500' : ''}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients (Separate each by a new line)
          </label>
          <textarea
            id="ingredients"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 ${errors.ingredients ? 'border-red-500' : ''}`}
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 text-sm font-bold mb-2">
            Preparation Steps (Separate each step by a new line)
          </label>
          <textarea
            id="steps"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 ${errors.steps ? 'border-red-500' : ''}`}
            rows="6"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 transition-all"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
