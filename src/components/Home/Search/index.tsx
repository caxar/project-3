import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-block relative bg-sidebar_color w-[550px] rounded-full flex items-center">
        <div className="search-block__icon ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          className="bg-transparent w-full h-full py-[10px] pl-[10px] pr-[20px]"
          type="text"
          placeholder="Поиск по городу"
        />
      </div>
    </div>
  );
};

export default Search;
