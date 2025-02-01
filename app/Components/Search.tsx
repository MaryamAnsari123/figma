//SEARCHBAR

"use client"
import { useState, useEffect, useRef } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client setup
import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(false); // Toggle search bar
  const [searchQuery, setSearchQuery] = useState(""); // Input value
  const [searchResults, setSearchResults] = useState([]); // Fetched results
  const inputRef = useRef(null); // Ref for input field

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
  };

  // Fetch data based on query
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]); // Clear results if input is empty
      return;
    }

    try {
      const results = await client.fetch(
        `*[_type == "product" && $search in tags]{
          _id,
          name,
          tags
        }`,
        { search: searchQuery }
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Icon */}
      <button
        onClick={toggleSearchBar}
        className="md:p-3 p-2 text-black hover:text-white bg-gray-400 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        <Search className='w-[16px] h-[16px]' />
      </button>

      {/* Search Bar */}
      {showSearch && (
        <div className="mt-10 absolute top-5 left-12">
          <input
            ref={inputRef} // Auto-focus
            type="text"
            placeholder="Search by Catergory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-56 px-4 py-2 border rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Search
          </button>
          {/* Display Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 absolute bg-slate-200 z-10 border-2
             md:w-96 w-56 rounded-md shadow-lg shadow-blue-600 border-black">
              {searchResults.map((item: any) => (
                <div
                  key={item._id}
                  className="p-2 border-b border-b-black hover:bg-white"
                >
                   <Link href={`/Alldata/${item._id}`}>
                    <p className="text-lg font-semibold text-blue-600 hover:underline">
                      {item.name}
                    </p>
                  </Link>
                  <p className="text-sm text-black">Tags: {item.tags.join(", ")}</p>
                </div>
              ))}
            </div>
          )}
          {searchResults.length === 0 && searchQuery.trim() !== "" && (
            <p className="mt-8 text-sm font-bold z-10 absolute bg-gray-200 p-2
             text-red-500">No results found!</p>
          )}
        </div>
      )}
    </div>
  );
}
