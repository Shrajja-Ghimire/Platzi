import React from "react";

const Searchbar = ({ search, setSearch }) => {
  
  const inputEvent = (event) => {
    const data = event.target.value;
    event.preventDefault();
    setSearch(data);
  };

  return (
    <div>
      <form className="max-w-md mx-auto  " onSubmit={(e) => e.preventDefault()}>
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative m-5">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={search}
            onChange={inputEvent}
            className="bg-white block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
            placeholder="Search Your Products!.."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
