import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-[280px] bg-[#232323] rounded-2xl px-4 py-2 mb-8 ml-150"
    >
      <SearchIcon className="text-white mr-3" />
      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-300 text-base"
        placeholder="Search City"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}