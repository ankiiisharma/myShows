import React, { useState } from "react";

const FillForm = () => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    releasedOn: "",
    rating: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 p-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Add Movie Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 px-20">
        <div>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageUrl"
            name="imageUrl"
            type="text"
            placeholder="Enter image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Movie Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter movie name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="releasedOn"
          >
            Released On
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="releasedOn"
            name="releasedOn"
            type="text"
            placeholder="Enter release year"
            value={formData.releasedOn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            name="rating"
            type="text"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="details"
          >
            Details
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="details"
            name="details"
            placeholder="Enter movie details"
            value={formData.details}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pr-10 pl-10 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FillForm;
